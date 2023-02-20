export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    rating: number;
    link: string;
    img: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Apple iPhone 13',
      price: 380498,
      description: 'технология NFC: Да цвет: черный тип экрана: OLED, Super Retina XDR диагональ: 6.1 дюйм размер оперативной памяти: 4 ГБ процессор: 6-ядерный Apple A15 Bionic объем встроенной памяти: 128 ГБ емкость аккумулятора: 3095 мАч',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHCZqaaQb6J1kTTzz3On5CqdwdNLBkRhGoNPVA8gRTA4w4tu4FK93VBoCatwQAvD_BwE#!/item',
      img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg'
    },
    {
      id: 2,
      name: 'Apple iPhone 11',
      price: 295930 ,
      description: 'технология NFC: Да цвет: черный тип экрана: сенсорный мультитач цветной IPS, Liquid Retina HD диагональ: 6.1 дюйм размер оперативной памяти: 4 ГБ процессор: 6-ядерный Apple A13 Bionic объем встроенной памяти: 128 ГБ емкость аккумулятора: 3110 мАч',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHCZqaaQb6J1kTTzz3On5CqdwdNLBkRhGoNPVA8gRTA4w4tu4FK93VBoCatwQAvD_BwE#!/item',
      img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg'
    },
    {
      id: 3,
      name: 'Apple iPhone 14 Pro Max',
      price: 711623,
      description: 'технология NFC: Да цвет: фиолетовый тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы диагональ: 6.7 дюйм размер оперативной памяти: 6 ГБ процессор: 6-ядерный Apple A16 Bionic объем встроенной памяти: 256 ГБ емкость аккумулятора: 3095 мАч',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHCZqaaQb6J1kTTzz3On5CqdwdNLBkRhGoNPVA8gRTA4w4tu4FK93VBoCatwQAvD_BwE#!/item',
      img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg'
    },
    {
      id: 4,
      name: 'Samsung Galaxy A13 ',
      price: 87490,
      description: 'технология NFC: Да цвет: черный тип экрана: PLS TFT LCD сенсорный, мультитач диагональ: 6.6 дюйм размер оперативной памяти: 4 ГБ процессор: 8-ядерный Exynos 850 объем встроенной памяти: 128 ГБ емкость аккумулятора: 5000 мАч',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHCZqaaQb6J1kTTzz3On5CqdwdNLBkRhGoNPVA8gRTA4w4tu4FK93VBoCatwQAvD_BwE#!/item',
      img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/h49/49613711966238/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg'
    },
    {
      id: 5,
      name: 'Samsung Galaxy A23',
      price: 104675,
      description: 'технология NFC: Да цвет: черный тип экрана: PLS TFT LCD сенсорный, мультитач диагональ: 6.6 дюйм размер оперативной памяти: 6 ГБ процессор: 8-ядерный Snapdragon 680 объем встроенной памяти: 128 ГБ емкость аккумулятора: 5000 мАч',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHCZqaaQb6J1kTTzz3On5CqdwdNLBkRhGoNPVA8gRTA4w4tu4FK93VBoCatwQAvD_BwE#!/item',
      img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg'
    },
    {
      id: 6,
      name: 'Samsung Galaxy A33',
      price: 129790,
      description: 'технология NFC: Да цвет: черный тип экрана: Super AMOLED, сенсорный, Corning Gorilla Glass 5 диагональ: 6.4 дюйм размер оперативной памяти: 6 ГБ процессор: 8-ядерный Exynos 1280 объем встроенной памяти: 128 ГБ емкость аккумулятора: 5000 мАч',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000&tab=reviews#!/item',
      img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h56/h8c/49894748160030/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-1.jpg'
    },
    {
      id: 7,
      name: 'Samsung Galaxy A53',
      price: 160370,
      description: 'технология NFC: Да цвет: черный тип экрана: Super AMOLED, сенсорный, мультитач диагональ: 6.5 дюйм размер оперативной памяти: 6 ГБ процессор: 8-ядерный Exynos 1280объем встроенной памяти: 128 ГБ емкость аккумулятора: 5000 мАч',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a53-5g-6-gb-128-gb-chernyi-104253225/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHCZqaaQb6J1kTTzz3On5CqdwdNLBkRhGoNPVA8gRTA4w4tu4FK93VBoCatwQAvD_BwE#!/item',
      img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h21/he7/49613532528670/smartfon-samsung-galaxy-a53-5g-128gb-sm-a536ezkdskz-black-104253225-1.jpg'
    },
    {
      id: 8,
      name: 'Xiaomi Redmi Note 11',
      price: 139340,
      description: 'технология NFC: Да цвет: серый тип экрана: AMOLED, сенсорный, мультитач диагональ: 6.67 дюйм размер оперативной памяти: 8 ГБ процессор: MediaTek Helio G96 объем встроенной памяти: 128 ГБ емкость аккумулятора: 5000 мАч',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHCZqaaQb6J1kTTzz3On5CqdwdNLBkRhGoNPVA8gRTA4w4tu4FK93VBoCatwQAvD_BwE#!/item',
      img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-1.jpg'
    },
    {
      id: 9,
      name: 'Xiaomi Redmi Note 10 Pro',
      price: 128350 ,
      description: 'технология NFC: Да цвет: серый тип экрана: цветной AMOLED, сенсорный диагональ: 6.67 дюйм размер оперативной памяти: 8 ГБ процессор: 8-ядерный Qualcomm Snapdragon 732G объем встроенной памяти: 256 ГБ емкость аккумулятора: 5020 мАч',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHCZqaaQb6J1kTTzz3On5CqdwdNLBkRhGoNPVA8gRTA4w4tu4FK93VBoCatwQAvD_BwE#!/item',
      img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg'
    },
    {
      id: 10,
      name: 'Xiaomi Redmi Note 11',
      price: 99750,
      description: 'технология NFC: Нет цвет: серыйтип экрана: AMOLED, сенсорный, Corning Gorilla Glass 3 диагональ: 6.43 дюйм размер оперативной памяти: 4 ГБ процессор: 8-ядерный Qualcomm Snapdragon 680 объем встроенной памяти: 128 ГБ емкость аккумулятора: 5000 мАч',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-4-gb-128-gb-seryi-103541773/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHCZqaaQb6J1kTTzz3On5CqdwdNLBkRhGoNPVA8gRTA4w4tu4FK93VBoCatwQAvD_BwE#!/item',
      img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haa/hc9/48472414289950/smartfon-xiaomi-redmi-note-11-4-128-graphite-gray-103541773-1.jpg'
    },

  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */