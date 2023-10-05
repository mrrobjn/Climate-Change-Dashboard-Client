import { CSVLink } from "react-csv";
import "../assets/scss/components/Button.scss";
const CSVButton = ({ data }) => {
  const formatData = (data) => {
    let arr = [];
    let keys = Object.keys(data);
    let length = data[keys[0]]?.length;
    for (let i = 0; i < length; i++) {
      let newObj = {};
      for (let key of keys) {
        newObj[key] = data[key][i];
      }
      arr.push(newObj);
    }
    return arr;
  };
  return (
    <CSVLink
      className="primary-btn light"
      data={formatData(data)}
      filename="archive"
    >
      Download CSV
    </CSVLink>
  );
};

export default CSVButton;
