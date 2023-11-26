import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../../api/axios";
import { useState } from "react";
import "../../../assets/scss/pages/admin/EditArticlePage.scss";
import { storage } from "../../../config/firebase";
import { ref, uploadBytes } from "firebase/storage";

const EditArticlePage = () => {
  const [article, setArticle] = useState({});
  const [detail, setDetail] = useState([]);
  const { article_id } = useParams();
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`articles/find?id=${article_id}`);
        const res2 = await axios.get(`articles/find_detail?id=${article_id}`);
        setArticle(res.data);
        setDetail(res2.data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchData();
  }, []);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      if (file) {
        const oldImageName = ref(storage, article.img_url).name;
        const imgRef = ref(storage, `article_covers/${oldImageName}`);
        await uploadBytes(imgRef, file);
      }
      const res = await axios.post("articles/update_article", article);
      detail.forEach(async (d) => {
        await axios.post("articles/update_content", d);
      });
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChartDescChange = (e, index) => {
    const newDetail = [...detail];
    newDetail[index] = { ...newDetail[index], desc: e.target.value };
    setDetail(newDetail);
  };

  const handleChange = (e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="edit-article-container">
      {article._id && (
        <>
          <form method="PUT" onSubmit={handleUpdateSubmit}>
            <div className="left-block">
              <h1>Edit Article</h1>
              <div className="primary-info">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  defaultValue={article.title}
                  required
                  onChange={handleChange}
                />
                <label htmlFor="desc">Description</label>
                <textarea
                  maxLength={1000}
                  required
                  name="desc"
                  id="desc"
                  defaultValue={article.desc}
                  onChange={handleChange}
                ></textarea>
              </div>
              {detail.map((chart, i) => {
                return (
                  <div className="edit-chart-item" key={i}>
                    <div className="visualize-output">
                      <div className="img-container">
                        <img src={chart.chartURL} alt="" />
                      </div>
                      <div className="explain">
                        {/* <div className="control-bar">
                          <button type="button">
                            <i className="fa-solid fa-xmark fa-2xl"></i>
                          </button>
                        </div> */}
                        <h3>Topic: {chart.question}</h3>
                        <p>Rationale: {chart.rationale}</p>
                        <p className="visualization">
                          Visualization: {chart.visualization}
                        </p>
                        <textarea
                          cols="30"
                          placeholder="Describe chart visualized with your own language"
                          defaultValue={chart.desc}
                          onChange={(e) => handleChartDescChange(e, i)}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="right-block">
              <div className="article-banner-container">
                <img src={file ? URL.createObjectURL(file) : article.img_url} />
              </div>
              <div className="file-input">
                <input
                  type="file"
                  accept=".jpg,.png"
                  id="banner"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <label htmlFor="banner" className="primary-btn">
                  New Image
                </label>
                <button type="submit">SAVE</button>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default EditArticlePage;
