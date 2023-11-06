import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { visualizeForm } from "../../redux/selector";
import axios from "../../api/axios";
import "../../assets/scss/components/admin/CreateArticleForm.scss";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../config/firebase";
import { v4 } from "uuid";
import base64ToBlob from "../../utility/base64ToBlob";
import { addChartImgUrl } from "../../redux/slides/VisualizeFormSlice";

const initState = {
  title: "",
  desc: "",
};

const CreateArticleForm = () => {
  const [img, setImg] = useState(null);
  const [info, setInfo] = useState(initState);
  const charts = useSelector(visualizeForm).charts;
  const dispatch = useDispatch();
  const handleInsertArticle = async (e) => {
    e.preventDefault();
    try {
      const imgName = v4();
      const imgRef = ref(storage, `article_covers/${imgName}`);
      await uploadBytes(imgRef, img);
      const photoURL = await getDownloadURL(imgRef).catch((err) => {
        toast.error(err.message);
      });

      // Create a new array to hold the updated charts
      let updatedCharts = [...charts];

      for (let index = 0; index < charts.length; index++) {
        const chart = charts[index];
        const chartImgName = v4();
        const imgBlob = base64ToBlob(chart.base64);
        const chartRef = ref(storage, `article_charts/${chartImgName}`);
        await uploadBytes(chartRef, imgBlob);
        const chartURL = await getDownloadURL(chartRef).catch((err) => {
          toast.error(err.message);
        });

        // Update the chart URL in the new array and set base64 to an empty string
        updatedCharts[index] = { ...chart, chartURL, base64: "" };
      }

      // Now create the data object with the updated charts
      const data = {
        title: info.title,
        img_url: photoURL,
        contents: updatedCharts, // Use the updated charts
        desc: info.desc,
      };

      const res = await axios.post("articles/insert", data);
      toast.success(res.data.message);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="create-article-form">
      <form method="POST" onSubmit={(e) => handleInsertArticle(e)}>
        <div className="form-container">
          <div className="text-input-field">
            <input
              type="text"
              placeholder="Your title"
              value={info.title}
              onChange={(e) => setInfo({ ...info, title: e.target.value })}
            />
            <textarea
              placeholder="Description"
              value={info.desc}
              onChange={(e) => setInfo({ ...info, desc: e.target.value })}
            />
          </div>
          <div className="file-input-field">
            <input
              type="file"
              id="cover_upload"
              accept=".jpg,.png"
              onChange={(e) => setImg(e.target.files[0])}
            />
            <div className="upload-header">
              <i className="fa-solid fa-cloud-arrow-up"></i> upload
            </div>
            <label htmlFor="cover_upload">
              {img ? (
                <img src={URL.createObjectURL(img)} alt="" srcSet="" />
              ) : (
                <>
                  <i className="fa-regular fa-image fa-2xl"></i>
                  <p>
                    Drag and drop image here
                    <br />
                    or browse to begin the upload
                  </p>
                </>
              )}
            </label>
          </div>
        </div>
        <button type="submit" className="primary-btn">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateArticleForm;
