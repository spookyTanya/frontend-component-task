import React, { useState, useEffect } from "react";
import Checkbox from "../Checkbox";

const Row = ({ name, data }) => {
  const [checked, setChecked] = useState(data.userData[data.currentUser][name].selectedItems);

  const handleCheckbox = (event) => {
    const checkboxName = event.currentTarget.name;
    const elemIndex = checked.indexOf(checkboxName);

    if (event.currentTarget.checked === false) {
      if (elemIndex !== -1) {
        setChecked(checked.filter(elem => elem !== checkboxName));
      }
    } else {
      setChecked([...checked, checkboxName]);
    }
  };

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  return (
    <div>
      <h4>{name}</h4>
      {data.checkboxes.map(
        (item) => (
          <Checkbox
            name={item}
            handler={handleCheckbox}
            isChecked={data.userData[data.currentUser][name].selectedItems.indexOf(item) !== -1}
            isDisabled={data.userData[data.currentUser][name].availableItems.indexOf(item) === -1}/>
        )
      )}
    </div>
  );
};

export { Row };
