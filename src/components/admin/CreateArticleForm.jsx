import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { visualizeForm } from "../../redux/selector";
import axios from "../../api/axios";
import "../../assets/scss/components/admin/CreateArticleForm.scss";

const CreateArticleForm = () => {
  const [img, setImg] = useState(null);
  const [title, setTitle] = useState("");
  const charts = useSelector(visualizeForm).charts;
  const handleInsertArticle = async (e) => {
    e.preventDefault();
    try {
      const data = {
        title,
        img_url: "banner.png",
        contents: charts,
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
        <div className="title-input-field">
          <input
            type="text"
            placeholder="Your title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="file-input-field">
          <input
            type="file"
            id="cover_upload"
            accept=".jpg,.png"
            onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))}
          />
          <div className="upload-header">
            <i className="fa-solid fa-cloud-arrow-up"></i> upload
          </div>
          <label htmlFor="cover_upload">
            {img ? (
              <img src={img} alt="" srcSet="" />
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
        <button type="submit" className="primary-btn">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateArticleForm;
