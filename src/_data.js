// import itemImg from './img/item.png';
// import offerImg from './img/offer.png';

export const items = [
  {
    id: 1,
    title: 'Зачётный набор',
    descr: '64 штук',
    weight: 1585,
    price: 1099,
    image: require('./img/zachotniy.jpg'),
    category: 0,
    list: [
      {title: 'Фила чиз', count: 8},
      {title: 'Кёри', count: 8},
      {title: 'Колорадо', count: 8},
      {title: 'Ред', count: 8},
      {title: 'Чеддер', count: 8},
      {title: 'Нежный', count: 8},
      {title: 'Тортилла', count: 8},
      {title: 'Атари маки', count: 8},
    ],
  },
  {
    id: 2,
    title: 'Сумерки',
    descr: '72 штук',
    weight: 1665,
    price: 1269,
    image: require('./img/sumerki.jpg'),
    category: 0,
    list: [
      {title: 'Фила чиз', count: 8},
      {title: 'Колорадо', count: 8},
      {title: 'Крейзи', count: 8},
      {title: 'Сан сэй', count: 8},
      {title: 'Тортилла', count: 8},
      {title: 'Сэйк маки', count: 8},
      {title: 'Каппа маки', count: 8},
      {title: 'Атари маки', count: 8},
      {title: 'Кёри', count: 8},
    ],
  },
  {
    id: 3,
    title: 'Бенефит',
    descr: '24 штуки',
    weight: 620,
    price: 539,
    image: require('./img/benefit.jpg'),
    category: 0,
    list: [
      {title: 'Фила чиз', count: 8},
      {title: 'Колорадо', count: 8},
      {title: 'Тортилла', count: 8},
    ],
  },
  {
    id: 4,
    title: 'Империя Вкуса',
    descr: '88 штук',
    weight: 2000,
    price: 1689,
    image: require('./img/imperia_vkusa.png'),
    category: 0,
    list: [
      {title: 'Атари маки', count: 8},
      {title: 'Нежный лосось', count: 8},
      {title: 'Колорит', count: 8},
      {title: 'Сяке тамаго маки', count: 8},
      {title: 'Лосось маки', count: 8},
      {title: 'Экзотика', count: 8},
      {title: 'Сырный', count: 8},
      {title: 'Сяке маки', count: 8},
      {title: 'Запечённый оранж', count: 8},
      {title: 'Запечённый грин', count: 8},
      {title: 'Фила грин', count: 8},
    ],
  },

  {
    id: 5,
    title: 'На хайпе',
    descr: '72 штуки',
    weight: 1685,
    price: 1199,
    image: require('./img/hype.png'),
    category: 2,
    list: [
      {title: 'Фила чиз', count: 8},
      {title: 'Каппа маки', count: 8},
      {title: 'Муру каи', count: 8},
      {title: 'Цувай гани', count: 8},
      {title: 'Тортилья тори', count: 8},
      {title: 'Запечённый ред', count: 8},
      {title: 'Нежный', count: 8},
      {title: 'Атари маки', count: 8},
      {title: 'Ролл с уткой', count: 8},
    ],
  },
  {
    id: 6,
    title: 'Лайк',
    descr: '40 штук',
    weight: 1040,
    price: 739,
    image: require('./img/like.jpg'),
    category: 3,
    list: [
      {title: 'Кёри', count: 8},
      {title: 'Колорадо', count: 8},
      {title: 'Чеддер', count: 8},
      {title: 'Нежный', count: 8},
      {title: 'Фила чиз', count: 8},
    ],
  },
  {
    id: 7,
    title: 'Пять вкусов',
    descr: '40 штук',
    weight: 835,
    price: 799,
    image: require('./img/pyat_vkusov.jpg'),
    category: 3,
    list: [
      {title: 'Фила грин', count: 8},
      {title: 'Эби темпура маки', count: 8},
      {title: 'Кагуавасе', count: 8},
      {title: 'Тортилья тори', count: 8},
      {title: 'Каппа маки', count: 8},
    ],
  },
  {
    id: 8,
    title: 'Офисный',
    descr: '64 штуки',
    weight: 1550,
    price: 1049,
    image: require('./img/office.png'),
    category: 2,
    list: [
      {title: 'Запечённый ред', count: 8},
      {title: 'Запечённый оранж', count: 8},
      {title: 'Запечённый грин', count: 8},
      {title: 'Атари маки', count: 8},
      {title: 'Каппа маки', count: 8},
      {title: 'Тори маки', count: 8},
      {title: 'Навитори', count: 8},
      {title: 'Цувай гани', count: 8},
    ],
  },
];

export const basket = [0, 4, 5, 6];

export const offers = [
  {
    image: require('./img/bd.jpg'),
    title: 'Набор в подарок на день рождения',
    descr: `если у тебя День Рождения. Мы дарим набор "Подарочный", при покупке от 1000 рублей. Действие акции - в день рождения и 7 дней после. При предъявлении паспорта и только один раз!`,
  },
  {
    image: require('./img/magnit.jpg'),
    title: 'Магниты',
    descr: `Соберите 6 магнитов и получите вкусный набор "Бенефит"

Магнитик кладем при заказе от 500 рублей`,
  },
];

export const orders = [
  {
    id: 12132131,
    date: new Date(),
    count: 6,
    amount: 1441,
    status: 0,
    summary: {bonuses: 20, price: 1099, delivery: 0, sale: 0},
    deliveryTime: 35,
    details: `Санкт-Петербург, улица Туристская, 24/42, подъезд 1,
этаж 9, квартира 88
Получатель Андрей, +7 887 787 88 88
Оплата картой онлайн`,
    items: [
      {id: 2, count: 1},
      {id: 4, count: 2},
      {id: 3, count: 1},
      {id: 5, count: 2},
    ],
  },
  {
    id: 12132112,
    date: new Date(),
    count: 4,
    amount: 1212,
    status: 1,
    deliveryTime: 35,
    summary: {bonuses: 20, price: 1099, delivery: 0, sale: 0},
    details: `Санкт-Петербург, улица Туристская, 24/42, подъезд 1,
этаж 9, квартира 88
Получатель Андрей, +7 887 787 88 88
Оплата картой онлайн`,
    items: [{id: 1, count: 2}, {id: 6, count: 5}, {id: 8, count: 1}],
  },
  {
    id: 12132112,
    date: new Date(),
    count: 4,
    amount: 1212,
    status: 1,
    deliveryTime: 35,
    summary: {bonuses: 20, price: 1099, delivery: 0, sale: 0},
    details: `Санкт-Петербург, улица Туристская, 24/42, подъезд 1,
этаж 9, квартира 88
Получатель Андрей, +7 887 787 88 88
Оплата картой онлайн`,
    items: [{id: 4, count: 2}, {id: 2, count: 5}, {id: 1, count: 1}],
  },
  {
    id: 12132112,
    date: new Date(),
    count: 4,
    amount: 1212,
    status: 1,
    deliveryTime: 35,
    summary: {bonuses: 20, price: 1099, delivery: 0, sale: 0},
    details: `Санкт-Петербург, улица Туристская, 24/42, подъезд 1,
этаж 9, квартира 88
Получатель Андрей, +7 887 787 88 88
Оплата картой онлайн`,
    items: [{id: 3, count: 2}, {id: 8, count: 5}, {id: 7, count: 1}],
  },
  {
    id: 12132112,
    date: new Date(),
    count: 4,
    amount: 1212,
    status: 1,
    deliveryTime: 35,
    summary: {bonuses: 20, price: 1099, delivery: 0, sale: 0},
    details: `Санкт-Петербург, улица Туристская, 24/42, подъезд 1,
этаж 9, квартира 88
Получатель Андрей, +7 887 787 88 88
Оплата картой онлайн`,
    items: [{id: 4, count: 2}, {id: 5, count: 5}, {id: 6, count: 1}],
  },
  {
    id: 12132112,
    date: new Date(),
    count: 4,
    amount: 1212,
    status: 1,
    deliveryTime: 35,
    summary: {bonuses: 20, price: 1099, delivery: 0, sale: 0},
    details: `Санкт-Петербург, улица Туристская, 24/42, подъезд 1,
этаж 9, квартира 88
Получатель Андрей, +7 887 787 88 88
Оплата картой онлайн`,
    items: [{id: 2, count: 2}, {id: 1, count: 5}, {id: 8, count: 1}],
  },
  {
    id: 12132112,
    date: new Date(),
    count: 4,
    amount: 1212,
    status: 1,
    deliveryTime: 35,
    summary: {bonuses: 20, price: 1099, delivery: 0, sale: 0},
    details: `Санкт-Петербург, улица Туристская, 24/42, подъезд 1,
этаж 9, квартира 88
Получатель Андрей, +7 887 787 88 88
Оплата картой онлайн`,
    items: [{id: 3, count: 2}, {id: 6, count: 5}, {id: 8, count: 1}],
  },
  {
    id: 12132112,
    date: new Date(),
    count: 4,
    amount: 1212,
    status: 1,
    deliveryTime: 35,
    summary: {bonuses: 20, price: 1099, delivery: 0, sale: 0},
    details: `Санкт-Петербург, улица Туристская, 24/42, подъезд 1,
этаж 9, квартира 88
Получатель Андрей, +7 887 787 88 88
Оплата картой онлайн`,
    items: [{id: 2, count: 2}, {id: 6, count: 5}, {id: 4, count: 1}],
  },
  {
    id: 12132112,
    date: new Date(),
    count: 4,
    amount: 1212,
    status: 1,
    deliveryTime: 35,
    summary: {bonuses: 20, price: 1099, delivery: 0, sale: 0},
    details: `Санкт-Петербург, улица Туристская, 24/42, подъезд 1,
этаж 9, квартира 88
Получатель Андрей, +7 887 787 88 88
Оплата картой онлайн`,
    items: [{id: 5, count: 2}, {id: 1, count: 5}, {id: 8, count: 1}],
  },
];

export const basketOffers = [0, 1, 2, 3];

export const user = {
  name: 'Андрей',
  phone: '12121212',
  birthday: '12.12.12',
  gender: 1,
  balance: 1234,
};

export const addresses = [
  'Санкт-Петербург, улица Туристская, 24/42, подъезд 1, этаж 9, квартира 88',
  'Санкт-Петербург, улица Пушкина, 12, подъезд 5, этаж 2, квартира 11',
];
