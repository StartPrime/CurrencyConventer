interface ICurrencyData {
  code: string;
  name: string;
  icon: string;
}

export const currencyData: ICurrencyData[] = [
  {
    code: 'EUR',
    name: 'Евро',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1920px-Flag_of_Europe.svg.png',
  }, // Европейский союз
  {
    code: 'USD',
    name: 'Доллар США',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png',
  }, // США
  {
    code: 'JPY',
    name: 'Японская иена',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/1920px-Flag_of_Japan.svg.png',
  }, // Япония
  {
    code: 'BGN',
    name: 'Болгарский лев',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/2560px-Flag_of_Bulgaria.svg.png',
  }, // Болгария
  {
    code: 'CZK',
    name: 'Чешская крона',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1920px-Flag_of_the_Czech_Republic.svg.png',
  }, // Чехия
  {
    code: 'DKK',
    name: 'Датская крона',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1920px-Flag_of_Denmark.svg.png',
  }, // Дания
  {
    code: 'GBP',
    name: 'Британский фунт стерлингов',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/2560px-Flag_of_the_United_Kingdom_%283-5%29.svg.png',
  }, // Великобритания
  {
    code: 'HUF',
    name: 'Венгерский форинт',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/2560px-Flag_of_Hungary.svg.png',
  }, // Венгрия
  {
    code: 'PLN',
    name: 'Польский злотый',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/1920px-Flag_of_Poland.svg.png',
  }, // Польша
  {
    code: 'RON',
    name: 'Румынский лей',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1920px-Flag_of_Romania.svg.png',
  }, // Румыния
  {
    code: 'SEK',
    name: 'Шведская крона',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/1920px-Flag_of_Sweden.svg.png',
  }, // Швеция
  {
    code: 'CHF',
    name: 'Швейцарский франк',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/1280px-Flag_of_Switzerland.svg.png',
  }, // Швейцария
  {
    code: 'ISK',
    name: 'Исландская крона',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1920px-Flag_of_Iceland.svg.png',
  }, // Исландия
  {
    code: 'NOK',
    name: 'Норвежская крона',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/1920px-Flag_of_Norway.svg.png',
  }, // Норвегия
  {
    code: 'HRK',
    name: 'Хорватская куна',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/2560px-Flag_of_Croatia.svg.png',
  }, // Хорватия
  {
    code: 'RUB',
    name: 'Российский рубль',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1920px-Flag_of_Russia.svg.png',
  }, // Россия
  {
    code: 'TRY',
    name: 'Турецкая лира',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1920px-Flag_of_Turkey.svg.png',
  }, // Турция
  {
    code: 'AUD',
    name: 'Австралийский доллар',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/2560px-Flag_of_Australia.svg.png',
  }, // Австралия
  {
    code: 'BRL',
    name: 'Бразильский реал',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1920px-Flag_of_Brazil.svg.png',
  }, // Бразилия
  {
    code: 'CAD',
    name: 'Канадский доллар',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/2560px-Flag_of_Canada_%28Pantone%29.svg.png',
  }, // Канада
  {
    code: 'CNY',
    name: 'Китайский юань',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/800px-Flag_of_the_People%27s_Republic_of_China.svg.png?20240131214219',
  }, // Китай
  {
    code: 'HKD',
    name: 'Гонконгский доллар',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/1920px-Flag_of_Hong_Kong.svg.png',
  }, // Гонконг
  {
    code: 'IDR',
    name: 'Индонезийская рупия',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/1920px-Flag_of_Indonesia.svg.png',
  }, // Индонезия
  {
    code: 'ILS',
    name: 'Израильский новый шекель',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/1920px-Flag_of_Israel.svg.png',
  }, // Израиль
  {
    code: 'INR',
    name: 'Индийская рупия',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/1920px-Flag_of_India.svg.png',
  }, // Индия
  {
    code: 'KRW',
    name: 'Южнокорейская вона',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1920px-Flag_of_South_Korea.svg.png',
  }, // Южная Корея
  {
    code: 'MXN',
    name: 'Мексиканское песо',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1920px-Flag_of_Mexico.svg.png',
  }, // Мексика
  {
    code: 'MYR',
    name: 'Малайзийский ринггит',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/2560px-Flag_of_Malaysia.svg.png',
  }, // Малайзия
  {
    code: 'NZD',
    name: 'Новозеландский доллар',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1920px-Flag_of_New_Zealand.svg.png',
  }, // Новая Зеландия
  {
    code: 'PHP',
    name: 'Филиппинское песо',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/1920px-Flag_of_the_Philippines.svg.png',
  }, // Филиппины
  {
    code: 'SGD',
    name: 'Сингапурский доллар',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1920px-Flag_of_Singapore.svg.png',
  }, // Сингапур
  {
    code: 'THB',
    name: 'Тайский бат',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1920px-Flag_of_Thailand.svg.png',
  }, // Таиланд
  {
    code: 'ZAR',
    name: 'Южноафриканский ранд',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1920px-Flag_of_South_Africa.svg.png',
  }, // Южная Африка
];
