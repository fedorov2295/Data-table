import React, { useState } from 'react';
import classes from './App.module.css';
import ActionButtons from './UI/DeleteButton/ActionButtons'

const App = () => {
  const [allItems, setItems] = useState(JSON.parse(localStorage.getItem("allEntries")))
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [color, setColor] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputType, setInputType] = useState('');
  const [inputColor, setInputColor] = useState('');
  const [onEditMode, setOnEditMode] = useState({
    status: false,
    rowKey: null
  })
  const [onEditRowMode, setOnEditRowMode] = useState({
    status: false,
    rowKey: null
  })

  const addEntry = () => {
    const newItems = JSON.parse(localStorage.getItem("allEntries"))
    newItems.push({
      "name": inputName,
      "type": inputType,
      "color": inputColor,
    });
    localStorage.setItem("allEntries", JSON.stringify(newItems));
    setItems(JSON.parse(localStorage.getItem("allEntries")));
    setInputName('');
    setInputType('');
    setInputColor('');
  }

  const onClickDeleteButton = (event) => {
    const newItems = JSON.parse(localStorage.getItem("allEntries"))
    newItems.splice(event.target.closest('TR').id, 1)
    localStorage.setItem("allEntries", JSON.stringify(newItems))
    setItems(JSON.parse(localStorage.getItem("allEntries")))
  }

  const onClickEditButton = ({ id, currentName, currentColor }) => {
    setOnEditMode({
      status: true,
      rowKey: id
    });
    setName(currentName);
    setColor(currentColor);
  };
  const onClickEditRowButton = (id) => {
    setOnEditRowMode({
      status: true,
      rowKey: id
    });

  };

  const onSave = (index) => {
    allItems[index] = {
      "name": name,
      "type": type,
      "color": color,
    }
    localStorage.setItem("allEntries", JSON.stringify(allItems));
    setItems(JSON.parse(localStorage.getItem("allEntries")));

    setOnEditMode({
      status: false,
      rowKey: null
    })
    setName('');
    setType('');
    setColor('');
  }

  const onChangeRowHandler = (from, to) => {
    // allItems.splice(to, 0, allItems.splice(from, 1)[0]);
    const rowToMove = allItems[from];
    allItems.splice(from, 1);
    allItems.splice(to, 0, rowToMove)
  }

  const onSaveRowHandler = () => {
    localStorage.setItem("allEntries", JSON.stringify(allItems));
    setItems(JSON.parse(localStorage.getItem("allEntries")));
    setOnEditRowMode({
      status: false,
      rowKey: null
    })
  }

  return (
    <div className={classes.App}>
      <table className={classes.table}>
        <thead className={classes.tableHead}>
          <tr>
            <th className={classes.rowNumber}></th>
            <th className={classes.rowName}>Name</th>
            <th className={classes.rowNType}>Type</th>
            <th className={classes.rowNColor}>Color</th>
            <th className={classes.rowAction}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            allItems.map((entry, index) => (

              <tr className={classes.data} id={index} key={index}>
                <td>
                  {
                    onEditRowMode.status && onEditRowMode.rowKey === index ? (
                      <div className={classes.rows}>
                        <input
                          autoFocus
                          onChange={(event) => onChangeRowHandler(index, event.target.value - 1)}
                        />
                        <span onClick={() => onSaveRowHandler()}></span>
                      </div>
                    ) : (
                      <div className={classes.rows}>
                        {index + 1}
                        <div className={classes.rowEdit}
                          onClick={() => onClickEditRowButton(index)}></div>
                      </div>
                    )
                  }
                </td>
                <td>
                  {
                    onEditMode.status && onEditMode.rowKey === index ? (
                      <input
                        value={name}
                        onChange={event => setName(event.target.value)}
                        placeholder='Enter name' />
                    ) : (
                      entry.name
                    )
                  }
                </td>
                <td>
                  {
                    onEditMode.status && onEditMode.rowKey === index ? (
                      <select value={type} onChange={event => setType(event.target.value)}>
                        <option></option>
                        <option>Main</option>
                        <option>Side</option>
                        <option>Lower</option>
                      </select>
                    ) : (
                      entry.type
                    )
                  }
                </td>
                <td>
                  {
                    onEditMode.status && onEditMode.rowKey === index ? (
                      <input
                        onChange={event => setColor(event.target.value)}
                        value={color}
                        type='color'
                      />
                    ) : (
                      entry.color
                    )
                  }
                </td>
                {
                  onEditMode.status && onEditMode.rowKey === index ?
                    (
                      <td>
                        <ActionButtons
                          elementType='save'
                          saveItem={() => onSave(index, entry)} />
                      </td>
                    ) : (
                      <td>
                        <ActionButtons
                          elementType='delete'
                          deleteItem={entry => onClickDeleteButton(entry)} />
                        <ActionButtons
                          elementType='edit'
                          editItem={() => onClickEditButton({ id: index, currentName: entry.name, currentColor: entry.color })} />
                      </td>
                    )
                }
              </tr>
            ))}
          <tr className={classes.data}>
            <td></td>
            <td>
              <input
                value={inputName}
                onChange={event => setInputName(event.target.value)}
                placeholder='Enter name' />
            </td>
            <td>
              <select
                value={inputType}
                onChange={event => setInputType(event.target.value)}>
                <option></option>
                <option>Main</option>
                <option>Side</option>
                <option>Lower</option>
              </select>
            </td>
            <td>
              <input
                value={inputColor}
                type='color'
                onChange={event => setInputColor(event.target.value)} />
            </td>

          </tr>
        </tbody>
      </table>
      <ActionButtons elementType='add' addItem={addEntry}>Add Item</ActionButtons>
    </div>
  );
}

export default App;
