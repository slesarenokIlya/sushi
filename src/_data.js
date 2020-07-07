import itemImg from './img/item.png'
import offerImg from './img/offer.png'

export const items = [
  {title: 'test', descr: 'lalalalalalalal', weight: 123, price: 333, image: itemImg, category: 0},
  {title: 'test', descr: 'lalalalalalalal', weight: 123, price: 333, image: itemImg, category: 0},
  {title: 'test', descr: 'lalalalalalalal', weight: 123, price: 333, image: itemImg, category: 1},
  {title: 'test', descr: 'lalalalalalalal', weight: 123, price: 333, image: null, category: 1},
  {title: 'test', descr: 'lalalalalalalal', weight: 123, price: 333, image: itemImg, category: 2},
  {title: 'test', descr: 'lalalalalalalal', weight: 123, price: 333, image: null, category: 3},
  {title: 'test', descr: 'lalalalalalalal', weight: 123, price: 333, image: null, category: 3},
  {title: 'test', descr: 'lalalalalalalal', weight: 123, price: 333, image: null, category: 2},
  {title: 'test', descr: 'lalalalalalalal', weight: 123, price: 333, image: null, category: 1},
]

export const basket = [
  {title: 'test', descr: 'lalalalalalalal', weight: 123, price: 333, image: itemImg, category: 0},
  {title: 'test', descr: 'lalalalalalalal', weight: 123, price: 333, image: itemImg, category: 0},
  {title: 'test', descr: 'lalalalalalalal', weight: 123, price: 333, image: null, category: 1},
  {title: 'test', descr: 'lalalalalalalal', weight: 123, price: 333, image: itemImg, category: 2},
  {title: 'test', descr: 'lalalalalalalal', weight: 123, price: 333, image: null, category: 1},
]

export const offers = [
  {image: offerImg, title: 'lalalal', descr: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.`},
  {image: offerImg, title: 'lalalal', descr: 'lalal lalal lalal lalal lalal lalal lalal lalal lalal lalal lalal lalal lalal '},
  {image: offerImg, title: 'lalalal', descr: 'lalal lalal lalal lalal lalal lalal lalal lalal lalal lalal lalal lalal lalal '},
  {image: offerImg, title: 'lalalal', descr: 'lalal lalal lalal lalal lalal lalal lalal lalal lalal lalal lalal lalal lalal '},
  {image: offerImg, title: 'lalalal', descr: 'lalal lalal lalal lalal lalal lalal lalal lalal lalal lalal lalal lalal lalal '},
]

export const orders = [
  {id: 12132131, date: new Date(), count: 6, amount: 1441, status: 0},
  {id: 12132112, date: new Date(), count: 4, amount: 1212, status: 1}
]
