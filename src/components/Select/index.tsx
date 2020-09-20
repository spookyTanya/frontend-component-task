import React, {useState} from 'react';

const Select = () => {
  const [user, setUser] = useState('');

  const handleSelect = (event) => {
    console.log(event.currentTarget.value)
    setUser(event.currentTarget.value)
  };

  return (
    <div>
      <span>User Role</span>
      <select name="userRole" onChange={handleSelect}>
        <option value="" hidden defaultValue>Select an option</option>
        <option value="User">User</option>
        <option value="Member">Member</option>
        <option value="Admin">Admin</option>
      </select>
    </div>
  );
};

export default Select;
