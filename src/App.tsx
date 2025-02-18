import classes from './App.module.scss';
import SelectionArea from './components/SelectionArea';

function App() {
  return (
    <>
      <main className={classes.main}>
        <p className={classes.title}>Конвертер валют</p>
        <p className={classes.currentCourse}>Текущие курсы</p>

        <section className={classes.section}>
          <div>
            <p className={classes.description}>Сумма</p>
            <SelectionArea />
          </div>
          <div>
            <hr />
            <div></div>
          </div>
          <div>
            <p className={classes.description}>Конвертированная сумма</p>
            <SelectionArea />
          </div>
        </section>
        <div>
          <p>Обменный курс</p>
          <p></p>
        </div>
      </main>
    </>
  );
}

export default App;
