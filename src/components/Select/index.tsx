import React, {useState} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {selectUser} from '../../actions/selectUser';
import './select.scss';

const Select = ({selectUser}) => {
  const handleSelect = (event) => {
    selectUser(event.currentTarget.value.toLowerCase());
  };

  return (
    <div className='select-wrapper'>
      <span>User Role</span>
      <select name="userRole" onChange={handleSelect}>
        <option value="User" defaultValue>User</option>
        <option value="Member">Member</option>
        <option value="Admin">Admin</option>
      </select>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({selectUser: selectUser}, dispatch);
};

export default connect(null, mapDispatchToProps)(Select);
