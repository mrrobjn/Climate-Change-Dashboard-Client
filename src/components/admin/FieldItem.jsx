import '../../assets/scss/components/admin/FieldItem.scss'

const FieldItem = ({ field }) => {
  return (
    <>
      <div className="field-item">
        <h4>#{field.column}</h4>
        <p>Type: {field.properties.dtype}</p>
        <p># Unique value: {field.properties.num_unique_values}</p>
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
