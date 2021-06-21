import React from 'react';
import classes from './TableHead.module.css';

const TableHead = () => {
  return (
    <thead className={classes.tableHead}>
      <tr>
        <th className={classes.rowNumber}></th>
        <th className={classes.rowName}>Name</th>
        <th className={classes.rowNType}>Type</th>
        <th className={classes.rowNColor}>Color</th>
        <th className={classes.rowAction}>Action</th>
      </tr>
    </thead>
  );
};

export default TableHead;
