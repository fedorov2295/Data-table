import React, { useState } from 'react';
import classes from './App.module.css';
import TableHead from './components/TableHead/TableHead';
import NewTableElement from './components/NewTableElement/NewTableElement';
import TableContent from './components/TableContent/TableContent';
import TableRowNumber from './components/TableRowNumber/TableRowNumber';

const App = () => {
  const [allItems, setItems] = useState(
    JSON.parse(localStorage.getItem('allEntries'))
  );

  return (
    <div className={classes.App}>
      <table className={classes.table}>
        <TableHead />
        <tbody>
          {allItems.map((entry, index) => (
            <tr className={classes.data} id={index} key={index}>
              <TableRowNumber
                allItems={allItems}
                setItems={setItems}
                index={index}
              />
              <TableContent
                index={index}
                entry={entry}
                allItems={allItems}
                setItems={setItems}
              />
            </tr>
          ))}
          <NewTableElement setItems={setItems} />
        </tbody>
      </table>
    </div>
  );
};

export default App;
