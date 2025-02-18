import classes from './SelectionArea.module.scss';
import { currencyData } from '../utils';
import { useState } from 'react';

export default function SelectionArea() {
  const [currentCurrency, setCurrentCurrency] = useState(
    currencyData[Math.floor(Math.random() * (33 - 0 + 1))],
  );

  return (
    <div className={classes.selectionArea}>
      <div className={classes.section}>
        <div
          style={{ backgroundImage: `url(${currentCurrency.icon})` }}
          className={classes.icon}
        ></div>
        <select defaultValue={currentCurrency.code} className={classes.select}>
          {currencyData.map((currency) => (
            <option key={currency.code}>{currency.code}</option>
          ))}
        </select>
      </div>
      <input type="text" />
    </div>
  );
}
