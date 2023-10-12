import '../assets/scss/components/SelectInput.scss'
const SelectInput = ({ data, setValue }) => {
  return (
    <select className="select-input light" name="" id="" onChange={(e) => setValue(e.target.value)}>
      {data.map((d, i) => {
        return (
          <option key={i} value={d.value}>
            {d.label}
          </option>
        );
      })}
    </select>
  );
};

export default SelectInput;
