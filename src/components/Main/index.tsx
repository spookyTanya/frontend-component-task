import React from "react";
import Select from "../Select";
import {Row} from "../Row";

const Main = ({ data }) => {
  console.log(data)
  return (
    <div className='wrapper'>
      <Select users={data.users}/>
      <Row name='folders' data={data}/>
    </div>
  );
};

export default Main;
