import classes from './SelectionArea.module.scss';
import { currencyData } from '../utils';
import { useEffect, useState } from 'react';

type TCurrencyValue = {
  code: string;
  value?: number;
};

type Props = {
  onSelect: boolean;
  setValue: ({ code, value }: TCurrencyValue) => void;
};

export default function SelectionArea({ onSelect, setValue }: Props) {
  const [currentCurrency, setCurrentCurrency] = useState(
    currencyData[Math.floor(Math.random() * (33 - 0 + 1))],
  );
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setValue({
      code: currentCurrency.code,
    });
  }, []);

  return (
    <div className={classes.selectionArea}>
      <div className={classes.section}>
        <div
          style={{ backgroundImage: `url(${currentCurrency.icon})` }}
          className={classes.icon}
        ></div>
        <select
          defaultValue={currentCurrency.code}
          className={classes.select}
          onChange={(e) => {
            const index = currencyData.find(
              (item) => item.code === e.target.selectedOptions[0].value,
            );
            if (index) {
              setCurrentCurrency(index);
            }
            setValue({
              code: e.target.selectedOptions[0].value,
              value: count,
            });
          }}
        >
          {currencyData.map((currency) => (
            <option key={currency.code}>{currency.code}</option>
          ))}
        </select>
      </div>
      <input
        type="number"
        readOnly={!onSelect}
        onChange={(e) => {
          setValue({
            code: currentCurrency.code,
            value: Number(e.target.value),
          });
          setCount(Number(e.target.value));
        }}
      />
    </div>
  );
}
