import { CSVLink } from "react-csv";
import '../assets/scss/components/Button.scss'
const CSVButton = ({ data }) => {
  
  return (
    <CSVLink
    className="primary-btn light"
      data={[
        { year: 2016, value: 25 },
        { year: 2017, value: 23 },
        { year: 2018, value: 24 },
        { year: 2019, value: 23 },
        { year: 2020, value: 26 },
        { year: 2021, value: 27 },
        { year: 2022, value: 29 },
      ]}
      filename="archive"
    >
      Download CSV
    </CSVLink>
  );
};

export default CSVButton;
