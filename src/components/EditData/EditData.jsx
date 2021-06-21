import React from 'react';

const EditData = (props) => {
  let editedData = null;

  switch (props.dataType) {
    case 'name':
      editedData = (
        <input
          value={props.name}
          onChange={(event) => props.setName(event.target.value)}
          placeholder="Enter name"
        />
      );
      break;
    case 'type':
      editedData = (
        <select
          value={props.type}
          onChange={(event) => props.setType(event.target.value)}
        >
          <option></option>
          <option>Main</option>
          <option>Side</option>
          <option>Lower</option>
        </select>
      );
      break;
    case 'color':
      editedData = (
        <input
          onChange={(event) => props.setColor(event.target.value)}
          value={props.color}
          type="color"
        />
      );
      break;

    default:
      break;
  }

  return editedData;
};

export default EditData;
