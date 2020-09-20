import React, {useState} from "react";
import './checkbox.scss';

interface IProps {
  isChecked: boolean;
  name: string;
  isDisabled: boolean;
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<IProps> = ({ isChecked, name, isDisabled, handler }) => {
  const [checked, setChecked] = useState(isChecked);

  const checkboxChange = (event) => {
    setChecked(event.currentTarget.checked);
    handler(event);
  };

  // console.log({isChecked, name, isDisabled});
  return (
    <div>
      <input type="checkbox" name={name}
             onChange={checkboxChange}
             checked={checked ? 'checked': ''}
             // className={checked === true ? "checked" : "unchecked"}
             disabled={isDisabled === true ? 'disabled' : ''}
             />
      <label htmlFor={name}>{name}</label>
      {/*<img src='../../materials/check.png'/>*/}
    </div>
  );
};

export default Checkbox;
