import { useState } from 'react';
import '../assets/scss/components/CheckBox.scss'
const CheckBox = ({data}) => {
    const [checkedItems, setCheckedItems] = useState([]);

  const handleChange = (e) => {
    if (e.target.checked) {
      setCheckedItems([...checkedItems, e.target.value]);
    } else {
      setCheckedItems(checkedItems.filter(item => item !== e.target.value));
    }
  }

  return (
    <div className='check-box-container'>
      {data.map((item, index) => (
        <div className='check-box-item' key={index} >
          <input type="checkbox" id={item.value} name={item.value} value={item.value} onChange={(e)=>handleChange(e)}/>
          <label htmlFor={item.value}>{item.label}</label>
        </div>
      ))}
    </div>
  )
}

export default CheckBox