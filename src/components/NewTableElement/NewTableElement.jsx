import React, { useState } from 'react';
import ActionButtons from '../../UI/DeleteButton/ActionButtons';
import classes from './NewTableElement.module.css';

const NewTableElement = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputType, setInputType] = useState('');
  const [inputColor, setInputColor] = useState('');

  const addEntry = () => {
    const newItems = JSON.parse(localStorage.getItem('allEntries'));
    newItems.push({
      name: inputName,
      type: inputType,
      color: inputColor,
    });
    localStorage.setItem('allEntries', JSON.stringify(newItems));
    props.setItems(JSON.parse(localStorage.getItem('allEntries')));
    setInputName('');
    setInputType('');
    setInputColor('');
  };

  return (
    <React.Fragment>
      <tr className={classes.data}>
        <td></td>
        <td>
          <input
            value={inputName}
            onChange={(event) => setInputName(event.target.value)}
            placeholder="Enter name"
          />
        </td>
        <td>
          <select
            value={inputType}
            onChange={(event) => setInputType(event.target.value)}
          >
            <option></option>
            <option>Main</option>
            <option>Side</option>
            <option>Lower</option>
          </select>
        </td>
        <td>
          <input
            value={inputColor}
            type="color"
            onChange={(event) => setInputColor(event.target.value)}
          />
        </td>
        <td>
          <ActionButtons elementType="add" addItem={addEntry}>
            Add Item
          </ActionButtons>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default NewTableElement;
