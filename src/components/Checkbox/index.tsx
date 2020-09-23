import React, {useState, useEffect} from "react";
import './checkbox.scss';

interface Props {
  isChecked: boolean;
  name: string;
  isDisabled: boolean;
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<Props> = ({ isChecked, name, isDisabled, handler }) => {
  const [checked, setChecked] = useState(isChecked);

  React.useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const checkboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setChecked(event.currentTarget.checked);
    handler(event);
  };

  return (
    <div className='checkbox-wrapper'>
      <label>
        <input type="checkbox" name={name}
               onChange={checkboxChange}
               checked={checked ? 'checked': ''}
               disabled={isDisabled === true ? 'disabled' : ''}
        />
        <span>{name}</span>
      </label>
    </div>
  );
};

export default Checkbox;
