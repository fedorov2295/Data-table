import React, { useState } from 'react';
import classes from './TableRowNumber.module.css';

const TableRowNumber = (props) => {
  const [onEditRowMode, setOnEditRowMode] = useState({
    status: false,
    rowKey: null,
  });

  const onChangeRowHandler = (from, to) => {
    const rowToMove = props.allItems[from];
    props.allItems.splice(from, 1);
    props.allItems.splice(to, 0, rowToMove);
  };

  const onClickEditRowButton = (id) => {
    setOnEditRowMode({
      status: true,
      rowKey: id,
    });
  };

  const onSaveRowHandler = () => {
    localStorage.setItem('allEntries', JSON.stringify(props.allItems));
    props.setItems(JSON.parse(localStorage.getItem('allEntries')));
    setOnEditRowMode({
      status: false,
      rowKey: null,
    });
  };

  return (
    <td>
      {onEditRowMode.status && onEditRowMode.rowKey === props.index ? (
        <div className={classes.rows}>
          <input
            autoFocus
            onChange={(event) =>
              onChangeRowHandler(props.index, event.target.value - 1)
            }
          />
          <span onClick={() => onSaveRowHandler()}></span>
        </div>
      ) : (
        <div className={classes.rows}>
          {props.index + 1}
          <div
            className={classes.rowEdit}
            onClick={() => onClickEditRowButton(props.index)}
          ></div>
        </div>
      )}
    </td>
  );
};

export default TableRowNumber;
