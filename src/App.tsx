import classes from './App.module.scss';
import SelectionArea from './components/SelectionArea';
import { useState } from 'react';

type TCurrencyValue = {
  code: string;
  value?: number;
};

type TPrice = {
  firstCurrency: string;
  firstValue: number;
  secondCurrency: string;
  secondValue: number;
};

function App() {
  const [firstValue, setFirstValue] = useState<TCurrencyValue | null>();
  const [secondValue, setSecondValue] = useState<TCurrencyValue | null>(null);
  const [price, setPrice] = useState<TPrice | undefined>(undefined);
  const [error, setError] = useState(false);

  function setFirstValueFunction({ code, value }: TCurrencyValue): void {
    setFirstValue({ code: code, value: value });
  }

  function setSecondValueFunction({ code, value }: TCurrencyValue): void {
    setSecondValue({ code: code, value: value });
  }

  async function convert(): Promise<void> {
    try {
      if (firstValue?.code && firstValue.value && secondValue?.code) {
        const url = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_4Osqh6qA9z8tSFv5AABgFE7qp1TvNxiXZP9F4nxZ&currencies=${
          secondValue.code
        }${
          !(firstValue.code === 'USD')
            ? `&base_currency=${firstValue.code}`
            : ''
        }`;

        const response = await fetch(url, {
          method: 'get',
        });
        const data = await response.json();

        setPrice({
          firstCurrency: firstValue.code,
          firstValue: firstValue.value,
          secondCurrency: secondValue.code,
          secondValue: data.data[secondValue.code] * firstValue.value,
        });
        setError(false);
      }
    } catch {
      setError(true);
    }
  }

  return (
    <>
      <main className={classes.main}>
        <p className={classes.title}>Конвертер валют</p>
        <p className={classes.currentCourse}>Текущие курсы</p>

        <div className={classes.container}>
          <section className={classes.section}>
            <div>
              <p className={classes.description}>Сумма</p>
              <SelectionArea
                onSelect={true}
                setValue={setFirstValueFunction}
                price={undefined}
              />
            </div>
            <div className={classes.rotateContainer}>
              <hr />
              <div className={classes.rotate} onClick={convert}>
                <p className={classes.noRotateItem}>1</p>
                <p className={classes.rotateItem}>1</p>
              </div>
            </div>
            <div>
              <p className={classes.description}>Конвертированная сумма</p>
              <SelectionArea
                onSelect={false}
                setValue={setSecondValueFunction}
                price={price?.secondValue}
              />
            </div>
            {error && <p className={classes.error}>Произошла ошибка</p>}
          </section>
          <div className={classes.result}>
            <p>Обменный курс</p>
            {price && (
              <p>{`${price.firstValue} ${
                price.firstCurrency
              } = ${price.secondValue.toFixed(6)} ${price.secondCurrency}`}</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
