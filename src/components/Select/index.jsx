import React from 'react';
import s from './Select.module.css';

const Select = ({ category, children, value, onChange }) => {
  const nameFor = () => {
    switch(category){
      case "helmets":
        return "Helmet";
      case "gloves":
        return "Gloves";
      case "chests":
        return "Chest";
      case "boots":
        return "Boots";
        case "swords":
          return "Sword";
      default: return category;
    }
  };
  
  return(
    <React.Fragment>
      <label htmlFor={category} className={s.label}>
        <span>{nameFor()}:</span>
      <select 
        value={value}
        className={s.select} 
        id={category}
        onChange={onChange}
        >
        {children}
      </select>
      </label><br/>
    </React.Fragment>
  );
}

export default Select;