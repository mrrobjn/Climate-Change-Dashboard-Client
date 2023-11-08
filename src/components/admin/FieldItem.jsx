import "../../assets/scss/components/admin/FieldItem.scss";

const FieldItem = ({ field }) => {
  return (
    <>
      <div className="field-item">
        <h4>#{field.column}</h4>
        <p>Type: {field.properties.dtype}</p>
        <p># Unique value: {field.properties.num_unique_values}</p>
        {field.properties.min && <p># Min: {field.properties.min}</p>}
        {field.properties.max && <p># Max: {field.properties.max}</p>}
        <div className="samples-list">
          {field.properties.samples.map((sample, i) => {
            return (
              <div className="sample-item" key={i}>
                {sample}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FieldItem;
