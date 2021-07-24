import React, { useState } from 'react';
import EditData from '../EditData/EditData';
import ActionButtons from '../../UI/DeleteButton/ActionButtons';

const TableContent = (props) => {
  const [name, setName] = useState('1');
  const [type, setType] = useState('Main');
  const [color, setColor] = useState('#112233');
  const [onEditMode, setOnEditMode] = useState({
    status: false,
    rowKey: null,
  });

  const onClickDeleteButton = (event) => {
    const newItems = JSON.parse(localStorage.getItem('allEntries'));
    newItems.splice(event.target.closest('TR').id, 1);
    localStorage.setItem('allEntries', JSON.stringify(newItems));
    props.setItems(JSON.parse(localStorage.getItem('allEntries')));
  };

  const onClickEditButton = ({ id, currentName, currentColor }) => {
    setOnEditMode({
      status: true,
      rowKey: id,
    });
    setName(currentName);
    setColor(currentColor);
  };

  const onSave = (index) => {
    props.allItems[index] = {
      name: name,
      type: type,
      color: color,
    };
    localStorage.setItem('allEntries', JSON.stringify(props.allItems));
    props.setItems(JSON.parse(localStorage.getItem('allEntries')));

    setOnEditMode({
      status: false,
      rowKey: null,
    });
    setName('');
    setType('');
    setColor('');
  };

  let content = (
    <React.Fragment>
      <td>{props.entry.name}</td>
      <td>{props.entry.type}</td>
      <td>{props.entry.color}</td>
      <td>
        <ActionButtons
          elementType="delete"
          deleteItem={(entry) => onClickDeleteButton(entry)}
        />
        <ActionButtons
          elementType="edit"
          editItem={() =>
            onClickEditButton({
              id: props.index,
              currentName: props.entry.name,
              currentColor: props.entry.color,
            })
          }
        />
      </td>
    </React.Fragment>
  );

  if (onEditMode.status && onEditMode.rowKey === props.index) {
    content = (
      <React.Fragment>
        <td>
          <EditData dataType="name" name={name} setName={setName} />
        </td>
        <td>
          <EditData dataType="type" type={type} setType={setType} />
        </td>
        <td>
          <EditData dataType="color" color={color} setColor={setColor} />
        </td>
        <td>
          <ActionButtons
            elementType="save"
            saveItem={() => onSave(props.index, props.entry)}
          />
        </td>
      </React.Fragment>
    );
  }

  return content;
};

export default TableContent;
