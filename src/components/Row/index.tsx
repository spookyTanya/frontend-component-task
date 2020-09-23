import React, { useState, useEffect } from "react";
import Checkbox from "../Checkbox";
import './row.scss';

interface Props {
  name: string;
  data: string[];
  checkboxArray: string[];
  checkboxSetter: (string: React.Dispatch<React.SetStateAction<string>>) => void;
}

const Row: React.FC<Props> = ({ name, data, checkboxArray, checkboxSetter }) => {
  const checkboxNames = ["create", "update", "move", "delete", "view", "share"];

  const handleCheckbox = (event) => {
    const checkboxName = event.currentTarget.name;
    const elemIndex = checkboxArray.indexOf(checkboxName);

    if (event.currentTarget.checked === false) {
      if (elemIndex !== -1) {
        checkboxSetter(checkboxArray.filter(elem => elem !== checkboxName));
      }
    } else {
      checkboxSetter([...checkboxArray, checkboxName]);
    }
  };

  return (
    <div className='row-wrapper'>
      <h4>{name}</h4>
      <div className="checkbox-container">
        {checkboxNames.map(
          (item, index) => {
            return (
            <Checkbox
              name={item}
              key={index}
              handler={handleCheckbox}
              isChecked={checkboxArray.indexOf(item) !== -1}
              isDisabled={data.availableItems.indexOf(item) === -1}/>
            );
          }
        )}
      </div>
    </div>
  );
};

export { Row };
