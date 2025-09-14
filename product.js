// Данные о продуктах
const products = [
    {
        "title": "Курага",
        "price": 139.9,
        "image": "https://catalog-images.x5static.net/product/1164660-main/320x320.jpeg?updated_at=2025-03-12T07:07:59.650Z"
    },
    {
        "title": "Кофе Bushido Original натуральный растворимый сублимированный 100г",
        "price": 899.99,
        "image": "https://catalog-images.x5static.net/product/1161125-main/320x320.jpeg?updated_at=2025-06-17T14:20:09.301Z"
    },
    {
        "title": "Зефир Шарлиз глазированный ваниль 240г",
        "price": 129.99,
        "image": "https://catalog-images.x5static.net/product/1169170-main/320x320.jpeg?updated_at=2025-03-10T18:16:22.093Z"
    },
    {
        "title": "Кофе Ambassador Platinum натуральный растворимый сублимированный 190г",
        "price": 529.99,
        "image": "https://catalog-images.x5static.net/product/1203624-main/320x320.jpeg?updated_at=2025-02-14T08:41:59.797Z"
    },
    {
        "title": "Смесь Mixbar из жареных орехов с цукатами 130г",
        "price": 189.99,
        "image": "https://catalog-images.x5static.net/product/1199168-main/320x320.jpeg?updated_at=2025-02-18T13:16:44.439Z"
    },
    {
        "title": "Средство для купания и шампунь Honey Kid 2в1 750мл",
        "price": 279.99,
        "image": "https://catalog-images.x5static.net/product/1181454-main/320x320.jpeg?updated_at=2025-02-25T19:34:46.883Z"
    },
    {
        "title": "Цикорий Большая чашка черничный растворимый 85г",
        "price": 95.99,
        "image": "https://catalog-images.x5static.net/product/1174962-main/320x320.jpeg?updated_at=2025-03-10T18:16:37.684Z"
    },
    {
        "title": "Чипсы Русская Картошка Зеленый лук и сметана 190г",
        "price": 124.99,
        "image": "https://catalog-images.x5static.net/product/1602396-main/320x320.jpeg?updated_at=2025-03-10T18:25:25.040Z"
    },
    {
        "title": "Кофе в зернах Julius Meinl Юбилейный 500г",
        "price": 1399,
        "image": "https://catalog-images.x5static.net/product/1372398-main/320x320.jpeg?updated_at=2025-02-14T08:41:56.906Z"
    },
    {
        "title": "Туалетная бумага Papia Балийский цветок 3 слоя 8шт.",
        "price": 289.99,
        "image": "https://catalog-images.x5static.net/product/1173174-main/320x320.jpeg?updated_at=2025-03-10T15:38:23.634Z"
    },
    {
        "title": "Кофе Jardin Americano Crema молотый 250г",
        "price": 467.99,
        "image": "https://catalog-images.x5static.net/product/1176428-main/320x320.jpeg?updated_at=2025-01-31T14:12:00.000Z"
    },
    {
        "title": "Мини-маффины Шарлиз с начинкой с шоколадным вкусом 433г",
        "price": 169.99,
        "image": "https://catalog-images.x5static.net/product/1191672-main/320x320.jpeg?updated_at=2025-03-03T15:53:15.817Z"
    },
    {
        "title": "Халва Рот Фронт глазированная шоколадной глазурью 370г",
        "price": 399.99,
        "image": "https://catalog-images.x5static.net/product/1502287-main/320x320.jpeg?updated_at=2025-03-10T18:16:24.054Z"
    },
    {
        "title": "Напиток чайный Вкус & Польза Шиповник-каркаде 20x1.5г",
        "price": 80.99,
        "image": "https://catalog-images.x5static.net/product/1469435-main/320x320.jpeg?updated_at=2025-03-12T07:10:00.253Z"
    },
    {
        "title": "Мини-маффины Шарлиз с вареной сгущенкой 433г",
        "price": 169.99,
        "image": "https://catalog-images.x5static.net/product/1191671-main/320x320.jpeg?updated_at=2025-03-03T15:53:15.944Z"
    },
    {
        "title": "Колбаса Casademont Сальчичон монтанья экстра сыровяленая 250г",
        "price": 649.99,
        "image": "https://catalog-images.x5static.net/product/1172974-main/320x320.jpeg?updated_at=2025-02-25T14:27:53.174Z"
    },
    {
        "title": "Мини-маффины Шарлиз с клубничной начинкой 433г",
        "price": 169.99,
        "image": "https://catalog-images.x5static.net/product/1191673-main/320x320.jpeg?updated_at=2025-03-03T15:53:15.675Z"
    },
    {
        "title": "Конфеты Красный Октябрь Мишка косолапый 200г",
        "price": 359.99,
        "image": "https://catalog-images.x5static.net/product/1179999-main/320x320.jpeg?updated_at=2025-03-10T18:25:25.171Z"
    },
    {
        "title": "Томат Розовый",
        "price": 189.99,
        "image": "https://catalog-images.x5static.net/product/1184560-main/320x320.jpeg?updated_at=2025-07-29T14:36:49.458Z"
    },
    {
        "title": "Пастила Шармэль Ваниль 221г",
        "price": 189.99,
        "image": "https://catalog-images.x5static.net/product/1157273-main/320x320.jpeg?updated_at=2025-02-10T15:39:38.882Z"
    },
    {
        "title": "Салат Руккола 75г",
        "price": 129.99,
        "image": "https://catalog-images.x5static.net/product/1186987-main/320x320.jpeg?updated_at=2025-03-05T10:57:40.019Z"
    },
    {
        "title": "Яблоки Global Village Роял Гала",
        "price": 129.99,
        "image": "https://catalog-images.x5static.net/product/1158310-main/320x320.jpeg?updated_at=2025-03-10T15:43:26.742Z"
    },
    {
        "title": "Ирис Красный октябрь Золотой ключик 250г",
        "price": 175.99,
        "image": "https://catalog-images.x5static.net/product/1159936-main/320x320.jpeg?updated_at=2025-03-10T18:26:15.838Z"
    },
    {
        "title": "Зефир Шарлиз бело-розовый 180г",
        "price": 87.99,
        "image": "https://catalog-images.x5static.net/product/1209439-main/320x320.jpeg?updated_at=2025-03-10T18:48:03.542Z"
    },
    {
        "title": "Чак-Чак Караван-Сарай медовый 250г",
        "price": 129.99,
        "image": "https://catalog-images.x5static.net/product/1190468-main/320x320.jpeg?updated_at=2025-03-10T18:16:21.447Z"
    },
    {
        "title": "Напиток Coca-Cola Classic 0.33л",
        "price": 129.99,
        "image": "https://catalog-images.x5static.net/product/1157129-main/320x320.jpeg?updated_at=2025-02-14T15:15:56.083Z"
    },
    {
        "title": "Салат Месклан 75г",
        "price": 139.99,
        "image": "https://catalog-images.x5static.net/product/1196337-main/320x320.jpeg?updated_at=2025-06-25T12:42:07.979Z"
    },
    {
        "title": "Картофель для варки 3кг",
        "price": 279.99,
        "image": "https://catalog-images.x5static.net/product/1163404-main/320x320.jpeg?updated_at=2025-08-04T07:22:01.883Z"
    },
    {
        "title": "Смесь фруктовая Mixbar Компотная 500г",
        "price": 189.99,
        "image": "https://catalog-images.x5static.net/product/1207075-main/320x320.jpeg?updated_at=2025-01-31T14:37:07.359Z"
    },
    {
        "title": "Мюсли Matti Банан и шоколад 250г",
        "price": 114.99,
        "image": "https://catalog-images.x5static.net/product/1168756-main/320x320.jpeg?updated_at=2025-03-10T18:15:32.811Z"
    },
    {
        "title": "Хурма сушеная",
        "price": 149.9,
        "image": "https://catalog-images.x5static.net/product/1602737-main/320x320.jpeg?updated_at=2025-03-11T17:27:59.651Z"
    },
    {
        "title": "Смесь Белая Дача Тоскана салатная 120г",
        "price": 179.99,
        "image": "https://catalog-images.x5static.net/product/1177515-main/320x320.jpeg?updated_at=2025-07-17T08:08:30.264Z"
    },
    {
        "title": "Малина",
        "price": 1499,
        "image": "https://catalog-images.x5static.net/product/1498663-main/320x320.jpeg?updated_at=2025-07-14T07:10:35.457Z"
    },
    {
        "title": "Печенье Bombbar Шоколадный Брауни 40г",
        "price": 114.99,
        "image": "https://catalog-images.x5static.net/product/1564519-main/320x320.jpeg?updated_at=2025-03-10T18:54:02.489Z"
    },
    {
        "title": "Попкорн Mixbar со вкусом сыра 85г",
        "price": 58.99,
        "image": "https://catalog-images.x5static.net/product/1174409-main/320x320.jpeg?updated_at=2025-03-04T05:34:32.295Z"
    },
    {
        "title": "Конфеты Рот Фронт Батончики 250г",
        "price": 219.99,
        "image": "https://catalog-images.x5static.net/product/1159950-main/320x320.jpeg?updated_at=2025-03-10T18:26:12.505Z"
    },
    {
        "title": "Паста шоколадно-молочная Шарлиз 350г",
        "price": 169.99,
        "image": "https://catalog-images.x5static.net/product/1165158-main/320x320.jpeg?updated_at=2025-03-10T18:26:20.969Z"
    },
    {
        "title": "Напиток чайный Вкус & Польза Иван-чай 50г",
        "price": 129.99,
        "image": "https://catalog-images.x5static.net/product/1422448-main/320x320.jpeg?updated_at=2025-03-11T13:37:01.334Z"
    },
    {
        "title": "Нектар IL Primo Манго с мякотью 0.2л",
        "price": 79.98,
        "image": "https://catalog-images.x5static.net/product/1200970-main/320x320.jpeg?updated_at=2025-03-10T18:54:31.773Z"
    },
    {
        "title": "Грейпфрут красный",
        "price": 169.99,
        "image": "https://catalog-images.x5static.net/product/1157121-main/320x320.jpeg?updated_at=2025-03-12T07:06:20.841Z"
    },
    {
        "title": "Топпинг Махеевъ мягкая карамель 300г",
        "price": 109.99,
        "image": "https://catalog-images.x5static.net/product/1202816-main/320x320.jpeg?updated_at=2025-02-24T19:15:49.246Z"
    },
    {
        "title": "Напиток Evervess Индиан Тоник газированный 1л",
        "price": 82.99,
        "image": "https://catalog-images.x5static.net/product/1444421-main/320x320.jpeg?updated_at=2025-08-08T15:24:56.147Z"
    },
    {
        "title": "Орех грецкий в скорлупе",
        "price": 49.99,
        "image": "https://catalog-images.x5static.net/product/1205453-main/320x320.jpeg?updated_at=2025-02-24T08:08:25.363Z"
    },
    {
        "title": "Напиток чайный Вкус & Польза Смородиновое лукошко сухой ароматизированный 90г",
        "price": 232.99,
        "image": "https://catalog-images.x5static.net/product/1825824-main/320x320.jpeg?updated_at=2025-04-16T09:35:50.824Z"
    },
    {
        "title": "Попкорн Party Mixbar сладко-соленый 85г",
        "price": 57.99,
        "image": "https://catalog-images.x5static.net/product/1174410-main/320x320.jpeg?updated_at=2025-03-10T18:48:08.818Z"
    },
    {
        "title": "Халва Караван-Сарай подсолнечная 350г",
        "price": 124.99,
        "image": "https://catalog-images.x5static.net/product/1486798-main/320x320.jpeg?updated_at=2025-03-10T18:54:03.225Z"
    },
    {
        "title": "Круассан с миндалем 68г",
        "price": 79.99,
        "image": "https://catalog-images.x5static.net/product/1436768-main/320x320.jpeg?updated_at=2025-07-16T09:42:17.907Z"
    },
    {
        "title": "Попкорн Mixbar Party соленый 100г",
        "price": 57.99,
        "image": "https://catalog-images.x5static.net/product/1174408-main/320x320.jpeg?updated_at=2025-03-10T18:48:09.524Z"
    },
    {
        "title": "Лепешка томаты с базиликом 165г",
        "price": 85.99,
        "image": "https://catalog-images.x5static.net/product/1158638-main/320x320.jpeg?updated_at=2025-07-24T07:46:32.831Z"
    },
    {
        "title": "Джем Махеевъ Лесные ягоды 300г",
        "price": 109.99,
        "image": "https://catalog-images.x5static.net/product/1187112-main/320x320.jpeg?updated_at=2025-03-10T14:59:47.230Z"
    },
    {
        "title": "Пряники Полет Мятные 300г",
        "price": 134.99,
        "image": "https://catalog-images.x5static.net/product/1203171-main/320x320.jpeg?updated_at=2025-02-11T06:47:34.248Z"
    },
    {
        "title": "Инжир",
        "price": 89.99,
        "image": "https://catalog-images.x5static.net/product/1158274-main/320x320.jpeg?updated_at=2025-09-01T00:57:36.684Z"
    },
    {
        "title": "Жевательная резинка Dirol Colors XXL ассорти фруктовых вкусов 19г",
        "price": 69.99,
        "image": "https://catalog-images.x5static.net/product/1180040-main/320x320.jpeg?updated_at=2024-12-26T08:57:28.047Z"
    },
    {
        "title": "Яблоко сезонное",
        "price": 109.99,
        "image": "https://catalog-images.x5static.net/product/1157088-main/320x320.jpeg?updated_at=2025-01-27T18:10:12.012Z"
    },
    {
        "title": "Щербет Караван-сарай молочно-арахисовый 250г",
        "price": 144.99,
        "image": "https://catalog-images.x5static.net/product/1208106-main/320x320.jpeg?updated_at=2025-03-10T18:48:03.430Z"
    },
    {
        "title": "Снеки Cheetos Сыр 50г",
        "price": 89.99,
        "image": "https://catalog-images.x5static.net/product/1408829-main/320x320.jpeg?updated_at=2025-02-24T13:22:15.355Z"
    },
    {
        "title": "Горошек Global Village зеленый из мозговых сортов 400г",
        "price": 94.99,
        "image": "https://catalog-images.x5static.net/product/1165554-main/320x320.jpeg"
    },
    {
        "title": "Яблоки Гренни Смит",
        "price": 169.99,
        "image": "https://catalog-images.x5static.net/product/1157230-main/320x320.jpeg?updated_at=2025-03-10T15:38:28.167Z"
    },
    {
        "title": "Кукуруза Global Village сахарная 340г",
        "price": 94.99,
        "image": "https://catalog-images.x5static.net/product/1164290-main/320x320.jpeg?updated_at=2025-03-10T18:54:21.862Z"
    },
    {
        "title": "Шоколад Milka Bubbles Пористый c кокосовой начинкой молочный 87г",
        "price": 124.99,
        "image": "https://catalog-images.x5static.net/product/1614980-main/320x320.jpeg?updated_at=2025-06-19T16:18:29.566Z"
    },
    {
        "title": "Шоколад Goodmix молочный с хрустящей вафлей 40г",
        "price": 72.99,
        "image": "https://catalog-images.x5static.net/product/1618217-main/320x320.jpeg?updated_at=2025-06-03T19:41:50.265Z"
    },
    {
        "title": "Крекер Яшкино Французский хрустящий с кунжутом, 185г",
        "price": 48.99,
        "image": "https://catalog-images.x5static.net/product/1164059-main/320x320.jpeg?updated_at=2025-07-01T08:55:10.906Z"
    },
    {
        "title": "Батончик шоколадный Nuts Фундук и фисташка 47г",
        "price": 102.99,
        "image": "https://catalog-images.x5static.net/product/1614895-main/320x320.jpeg?updated_at=2025-07-11T15:39:57.357Z"
    },
    {
        "title": "Мармелад Mix Bar жевательный со вкусом колы 70г",
        "price": 41.99,
        "image": "https://catalog-images.x5static.net/product/1198558-main/320x320.jpeg?updated_at=2025-03-10T18:54:03.277Z"
    },
    {
        "title": "Сухарики Три корочки Семга и сыр 60г + соус тартар 25мл",
        "price": 36.99,
        "image": "https://catalog-images.x5static.net/product/1161847-main/320x320.jpeg?updated_at=2025-02-17T16:30:01.775Z"
    },
    {
        "title": "Карамель Chupa Chups в ассортименте 17г",
        "price": 20.99,
        "image": "https://catalog-images.x5static.net/product/1157932-main/320x320.jpeg?updated_at=2025-03-10T16:04:43.510Z"
    },
    {
        "title": "Карамель Chupa Chups Экзотик-тропик в ассортименте 12г",
        "price": 13.99,
        "image": "https://catalog-images.x5static.net/product/1157560-main/320x320.jpeg?updated_at=2025-03-10T16:04:43.703Z"
    },
    {
        "title": "Ядра арахиса Красная цена жареные соленые 80г",
        "price": 33.99,
        "image": "https://catalog-images.x5static.net/product/1201215-main/320x320.jpeg?updated_at=2025-04-11T13:16:20.990Z"
    },
    {
        "title": "Улитка Греческая с мясом 130г",
        "price": 59.99,
        "image": "https://catalog-images.x5static.net/product/2025018-main/320x320.jpeg?updated_at=2025-06-24T14:34:29.346Z"
    },
    {
        "title": "Улитка Греческая с начинкой курица с картофелем 130г",
        "price": 59.99,
        "image": "https://catalog-images.x5static.net/product/2026515-main/320x320.jpeg?updated_at=2025-06-24T14:40:43.467Z"
    },
    {
        "title": "Огурцы Ботаника свежие фасованные 420г",
        "price": 119.99,
        "image": "https://catalog-images.x5static.net/product/1856554-main/320x320.jpeg?updated_at=2025-06-03T20:01:14.140Z"
    },
    {
        "title": "Арбуз Global Village Сладкий Малыш",
        "price": 69.99,
        "image": "https://catalog-images.x5static.net/product/1515390-main/320x320.jpeg?updated_at=2025-02-13T14:18:18.668Z"
    },
    {
        "title": "Цикорий Вкус & Польза растворимый порошкообразный 85г",
        "price": 77.99,
        "image": "https://catalog-images.x5static.net/product/1825840-main/320x320.jpeg?updated_at=2025-06-03T19:51:58.774Z"
    },
    {
        "title": "Варенье Выручай клубничное 380г",
        "price": 199.99,
        "image": "https://catalog-images.x5static.net/product/2019352-main/320x320.jpeg?updated_at=2025-07-22T08:05:15.885Z"
    },
    {
        "title": "Чипсы Dr.Diesel со вкусом лобстера 120г",
        "price": 99.99,
        "image": "https://catalog-images.x5static.net/product/2020524-main/320x320.jpeg"
    },
    {
        "title": "Чипсы картофельные Dr.Diesel Мраморный стейк 120г",
        "price": 99.99,
        "image": "https://catalog-images.x5static.net/product/2033091-main/320x320.jpeg"
    },
    {
        "title": "Йогурт питьевой Фругурт со вкусом черники 1% БЗМЖ 930г",
        "price": 119.99,
        "image": "https://catalog-images.x5static.net/product/2020027-main/320x320.jpeg?updated_at=2025-06-09T13:00:39.330Z"
    },
    {
        "title": "Йогурт питьевой Чудо Вишня, шоколад, гранола 2.2% БЗМЖ 260г",
        "price": 89.99,
        "image": "https://catalog-images.x5static.net/product/2017135-main/320x320.jpeg?updated_at=2025-06-19T09:46:29.744Z"
    },
    {
        "title": "Варенье Выручай вишневое 380г",
        "price": 199.99,
        "image": "https://catalog-images.x5static.net/product/2019995-main/320x320.jpeg?updated_at=2025-07-22T08:10:31.157Z"
    },
    {
        "title": "Фрукты Вкус & Польза Ассорти клубника и банан сублимированные 12г",
        "price": 109.99,
        "image": "https://catalog-images.x5static.net/product/2027056-main/320x320.jpeg?updated_at=2025-06-23T09:46:06.564Z"
    },
    {
        "title": "Чипсы Вкус & Польза Микс овощные 25г",
        "price": 80.99,
        "image": "https://catalog-images.x5static.net/product/2027057-main/320x320.jpeg?updated_at=2025-06-23T09:45:37.402Z"
    },
    {
        "title": "Джем Махеевъ Клубничный 300г",
        "price": 109.99,
        "image": "https://catalog-images.x5static.net/product/1167332-main/320x320.jpeg?updated_at=2025-03-10T18:16:16.738Z"
    },
    {
        "title": "Авокадо",
        "price": 419.99,
        "image": "https://catalog-images.x5static.net/product/1185186-main/320x320.jpeg?updated_at=2025-06-23T12:38:11.279Z"
    },
    {
        "title": "Туалетная бумага Zewa Deluxe Без аромата 3 слоя 8 рулонов",
        "price": 319.99,
        "image": "https://catalog-images.x5static.net/product/1165428-main/320x320.jpeg?updated_at=2025-09-10T07:58:18.254Z"
    },
    {
        "title": "Йогурт Neo Классический обогащенный магнием и витамином B6 1.8% БЗМЖ 260г",
        "price": 74.99,
        "image": "https://catalog-images.x5static.net/product/1852480-main/320x320.jpeg?updated_at=2025-06-03T20:12:18.529Z"
    },
    {
        "title": "Туалетная бумага Papia 3 слоя 8шт.",
        "price": 289.99,
        "image": "https://catalog-images.x5static.net/product/1173083-main/320x320.jpeg?updated_at=2025-03-10T15:38:38.967Z"
    },
    {
        "title": "Корм сухой Perfect Fit Sterile с курицей для стерилизованных кошек 1.2кг",
        "price": 699.99,
        "image": "https://catalog-images.x5static.net/product/1170167-main/320x320.jpeg?updated_at=2025-03-10T15:38:49.188Z"
    },
    {
        "title": "Персики",
        "price": 219.99,
        "image": "https://catalog-images.x5static.net/product/1158369-main/320x320.jpeg?updated_at=2025-06-26T13:39:26.797Z"
    },
    {
        "title": "Крем для тела Bodyart Миндаль увлажняющий 250мл",
        "price": 253.99,
        "image": "https://catalog-images.x5static.net/product/1604714-main/320x320.jpeg?updated_at=2025-03-03T10:52:23.402Z"
    },
    {
        "title": "Кофе Egoiste Noir в зернах 1кг",
        "price": 2399,
        "image": "https://catalog-images.x5static.net/product/1174883-main/320x320.jpeg?updated_at=2025-06-17T14:25:06.327Z"
    },
    {
        "title": "Пельмени Сибирская Коллекция Сибирские 700г",
        "price": 799.99,
        "image": "https://catalog-images.x5static.net/product/1484705-main/320x320.jpeg?updated_at=2025-01-13T06:09:18.607Z"
    },
    {
        "title": "Колбаса Casademont Лонганиза сыровяленая сухая 250г",
        "price": 1149,
        "image": "https://catalog-images.x5static.net/product/1589435-main/320x320.jpeg?updated_at=2025-06-06T13:28:58.113Z"
    },
    {
        "title": "Пельмени Цезарь Император 800г",
        "price": 679.99,
        "image": "https://catalog-images.x5static.net/product/1188879-main/320x320.jpeg?updated_at=2025-01-20T13:12:57.389Z"
    },
    {
        "title": "Гель-концентрат для стирки Персил Power Gel Свежесть от Vernel 1.3л",
        "price": 559.99,
        "image": "https://catalog-images.x5static.net/product/1194374-main/320x320.jpeg?updated_at=2025-04-08T08:43:47.919Z"
    },
    {
        "title": "Пельмени Сибирская Коллекция со сливками 700г",
        "price": 559.99,
        "image": "https://catalog-images.x5static.net/product/1207271-main/320x320.jpeg?updated_at=2025-02-10T16:00:28.850Z"
    },
    {
        "title": "Свинина Великолукский МК тушеная 325г",
        "price": 229.99,
        "image": "https://catalog-images.x5static.net/product/1189802-main/320x320.jpeg?updated_at=2025-03-10T18:25:40.924Z"
    },
    {
        "title": "Торт Mirel карамельный на сгущенке 700г",
        "price": 614.99,
        "image": "https://catalog-images.x5static.net/product/1391509-main/320x320.jpeg?updated_at=2025-03-06T10:43:00.472Z"
    },
    {
        "title": "Торт Mirel Прага 660г",
        "price": 699.99,
        "image": "https://catalog-images.x5static.net/product/1424318-main/320x320.jpeg?updated_at=2025-03-06T10:42:59.401Z"
    },
    {
        "title": "Кофе Nescafe Gold Crema растворимый 170г",
        "price": 707.99,
        "image": "https://catalog-images.x5static.net/product/1616781-main/320x320.jpeg?updated_at=2025-06-09T06:47:46.915Z"
    },
    {
        "title": "Таблетки Liberhaus для посудомоечных машин 50шт",
        "price": 519.99,
        "image": "https://catalog-images.x5static.net/product/1518262-main/320x320.jpeg?updated_at=2025-02-17T15:06:49.286Z"
    },
    {
        "title": "Пельмени Горячая штучка Бигбули с мясом 700г",
        "price": 359.99,
        "image": "https://catalog-images.x5static.net/product/1619159-main/320x320.jpeg?updated_at=2025-06-03T19:42:43.257Z"
    },
    {
        "title": "Сыр Cheezzi Горгонзола с голубой плесенью 60% БЗМЖ 100г",
        "price": 332.99,
        "image": "https://catalog-images.x5static.net/product/1471704-main/320x320.jpeg?updated_at=2025-02-25T14:24:39.522Z"
    },
    {
        "title": "Торт Фили-Бейкер Наполеон слоеный 660г",
        "price": 759.99,
        "image": "https://catalog-images.x5static.net/product/1611120-main/320x320.jpeg?updated_at=2025-02-10T07:59:43.891Z"
    },
    {
        "title": "Виноград Шайн Мускат нефритовый",
        "price": 399.99,
        "image": "https://catalog-images.x5static.net/product/1623007-main/320x320.jpeg?updated_at=2025-06-03T19:44:26.007Z"
    },
    {
        "title": "Бомбочка BodyArt для ванны в ассортименте 120г 1шт",
        "price": 103.99,
        "image": "https://catalog-images.x5static.net/product/1423078-main/320x320.jpeg?updated_at=2025-02-17T15:01:13.135Z"
    },
    {
        "title": "Крем-гель для душа Фа Йогурт Алое Вера 750мл",
        "price": 399.99,
        "image": "https://catalog-images.x5static.net/product/1167508-main/320x320.jpeg?updated_at=2025-03-10T18:15:29.787Z"
    },
    {
        "title": "Сухой корм Мираторг Extra Meat с нежной телятиной для стерилизованных кошек 800г",
        "price": 599.99,
        "image": "https://catalog-images.x5static.net/product/1802355-main/320x320.jpeg?updated_at=2025-06-03T19:48:00.618Z"
    },
    {
        "title": "Хамон Casademont свиной сыровяленый 100г",
        "price": 679.99,
        "image": "https://catalog-images.x5static.net/product/1180250-main/320x320.jpeg?updated_at=2025-02-25T14:27:16.560Z"
    },
    {
        "title": "Кофе растворимый Fresco Arabica Solo натуральный сублимированный 190г",
        "price": 599.99,
        "image": "https://catalog-images.x5static.net/product/1496706-main/320x320.jpeg?updated_at=2025-06-10T10:12:34.901Z"
    },
    {
        "title": "Пирог Тирольские Пироги с начинкой малина 580г",
        "price": 757.99,
        "image": "https://catalog-images.x5static.net/product/1187252-main/320x320.jpeg?updated_at=2025-03-11T20:35:49.451Z"
    },
    {
        "title": "Шампунь Глисс Кур Исключительное Увлажнение для нормальных и склонных к сухости волос 400мл",
        "price": 399.99,
        "image": "https://catalog-images.x5static.net/product/1608584-main/320x320.jpeg?updated_at=2025-03-10T18:25:27.963Z"
    },
    {
        "title": "Таблетки для посудомоечных машин Econta 7в1 60шт.",
        "price": 415.99,
        "image": "https://catalog-images.x5static.net/product/1206717-main/320x320.jpeg?updated_at=2025-02-17T13:25:25.597Z"
    },
    {
        "title": "Креветки Vici Приорити 50/70 королевские варено-мороженые 1кг",
        "price": 999.99,
        "image": "https://catalog-images.x5static.net/product/1372172-main/320x320.jpeg?updated_at=2025-03-11T20:35:07.578Z"
    },
    {
        "title": "Мороженое молочное Эkzo ванильное с добавлением сока арбуза и дыни 2% БЗМЖ 520г",
        "price": 539.99,
        "image": "https://catalog-images.x5static.net/product/1195378-main/320x320.jpeg?updated_at=2025-02-25T14:36:42.611Z"
    },
    {
        "title": "Гречка Увелка Экстра 5х80г",
        "price": 82.99,
        "image": "https://catalog-images.x5static.net/product/1177934-main/320x320.jpeg?updated_at=2025-01-31T14:12:20.698Z"
    },
    {
        "title": "Пленка Econta для упаковки и хранения продуктов 30м",
        "price": 72.99,
        "image": "https://catalog-images.x5static.net/product/1173338-main/320x320.jpeg"
    },
    {
        "title": "Колбаса Casademont Фуэт Экстра с трюфелем сыровяленая 110г",
        "price": 429.99,
        "image": "https://catalog-images.x5static.net/product/1613336-main/320x320.jpeg?updated_at=2025-08-11T06:53:16.323Z"
    },
    {
        "title": "Говядина Снов тушеная 338г",
        "price": 364.99,
        "image": "https://catalog-images.x5static.net/product/1176144-main/320x320.jpeg?updated_at=2025-02-17T19:47:19.242Z"
    },
    {
        "title": "Спрей Likato Professional для идеальных волос 17в1 250мл",
        "price": 269.99,
        "image": "https://catalog-images.x5static.net/product/1468898-main/320x320.jpeg?updated_at=2024-10-31T19:23:49.738Z"
    },
    {
        "title": "Ветчина Империя вкуса из индейки 400г",
        "price": 259.99,
        "image": "https://catalog-images.x5static.net/product/1160213-main/320x320.jpeg?updated_at=2025-07-07T13:21:27.986Z"
    },
    {
        "title": "Сосиски Вязанка Сливушки 330г",
        "price": 229.99,
        "image": "https://catalog-images.x5static.net/product/1207617-main/320x320.jpeg?updated_at=2025-07-18T10:16:08.879Z"
    },
    {
        "title": "Станок бритвенный Endeavor со сменной кассетой с тремя лезвиями SL-7006 1шт.",
        "price": 349.99,
        "image": "https://catalog-images.x5static.net/product/1621925-main/320x320.jpeg?updated_at=2025-06-03T19:43:53.765Z"
    },
    {
        "title": "Чипсы Русская Картошка Краб 190г",
        "price": 129.99,
        "image": "https://catalog-images.x5static.net/product/1602397-main/320x320.jpeg?updated_at=2025-03-10T18:25:25.027Z"
    },
    {
        "title": "Сосиски Черкизово Премиум Венские вареные 450г",
        "price": 367.99,
        "image": "https://catalog-images.x5static.net/product/1203424-main/320x320.jpeg?updated_at=2024-12-23T11:10:23.001Z"
    },
    {
        "title": "Чай зеленый Зеленая панда Молочный туман китайский молочный оолонг 100г",
        "price": 176.99,
        "image": "https://catalog-images.x5static.net/product/1193595-main/320x320.jpeg?updated_at=2024-12-16T16:31:56.441Z"
    },
    {
        "title": "Кофе в капсулах Venetto Cappuccino 144г",
        "price": 478.99,
        "image": "https://catalog-images.x5static.net/product/1560267-main/320x320.jpeg?updated_at=2025-02-17T15:07:01.921Z"
    },
    {
        "title": "Икра лососевая ж/б 95г",
        "price": 779.99,
        "image": "https://catalog-images.x5static.net/product/1174138-main/320x320.jpeg?updated_at=2025-03-12T07:07:10.195Z"
    },
    {
        "title": "Масло Тысяча Озер сливочное безлактозное 82.5% БЗМЖ 150г",
        "price": 269.99,
        "image": "https://catalog-images.x5static.net/product/1474660-main/320x320.jpeg?updated_at=2025-03-11T20:34:29.620Z"
    },
    {
        "title": "Набор конфет Красный Октябрь Третьяковская галерея ассорти в ассортименте 240г",
        "price": 499.99,
        "image": "https://catalog-images.x5static.net/product/1162702-main/320x320.jpeg?updated_at=2025-03-10T18:25:27.897Z"
    },
    {
        "title": "Пельмени Цезарь Гордость Сибири 800г",
        "price": 299.99,
        "image": "https://catalog-images.x5static.net/product/1188357-main/320x320.jpeg?updated_at=2025-01-20T13:12:57.377Z"
    },
    {
        "title": "Макароны Barilla Campanelle из твердых сортов пшеницы 450г",
        "price": 139.99,
        "image": "https://catalog-images.x5static.net/product/1625875-main/320x320.jpeg?updated_at=2024-10-31T19:33:50.981Z"
    },
    {
        "title": "Колбаса Рублевский Краковская полукопченая 350г",
        "price": 469.99,
        "image": "https://catalog-images.x5static.net/product/1182910-main/320x320.jpeg?updated_at=2025-03-18T13:42:12.859Z"
    },
    {
        "title": "Чебупицца Пепперони Горячая Штучка 250г",
        "price": 189.99,
        "image": "https://catalog-images.x5static.net/product/1169875-main/320x320.jpeg?updated_at=2025-04-28T18:14:48.117Z"
    },
    {
        "title": "Корм сухой Dingo Pro с говядиной для собак крупных пород 2.2кг",
        "price": 409.99,
        "image": "https://catalog-images.x5static.net/product/1625325-main/320x320.jpeg?updated_at=2025-08-08T12:50:45.910Z"
    },
    {
        "title": "Кофе растворимый Нескафе Голд Альта Рика сублимированный 170г",
        "price": 679.99,
        "image": "https://catalog-images.x5static.net/product/1618543-main/320x320.jpeg?updated_at=2025-06-03T19:42:16.654Z"
    },
    {
        "title": "Наггетсы Вязанка с индейкой замороженные 250г",
        "price": 239.99,
        "image": "https://catalog-images.x5static.net/product/1205363-main/320x320.jpeg?updated_at=2025-07-16T12:41:44.372Z"
    },
    {
        "title": "Чебурек Богатырь с мясом Жаренки 180г",
        "price": 99.99,
        "image": "https://catalog-images.x5static.net/product/1190398-main/320x320.jpeg?updated_at=2024-10-31T19:30:14.419Z"
    },
    {
        "title": "Конфеты Красный октябрь Цитрон 250г",
        "price": 164.99,
        "image": "https://catalog-images.x5static.net/product/1159946-main/320x320.jpeg?updated_at=2025-03-10T18:26:20.293Z"
    },
    {
        "title": "Пюре фруктовое Агуша яблоко-клубника-земляника-клюква с 6 мес. 80г",
        "price": 57.99,
        "image": "https://catalog-images.x5static.net/product/1576434-main/320x320.jpeg?updated_at=2025-09-04T16:26:02.702Z"
    },
    {
        "title": "Мидии Fish House с пряностями в масле 150г",
        "price": 154.99,
        "image": "https://catalog-images.x5static.net/product/1165256-main/320x320.jpeg?updated_at=2025-01-10T10:04:29.636Z"
    },
    {
        "title": "Гель для стирки Ласка Эффект восстановления цветного 1л",
        "price": 349.99,
        "image": "https://catalog-images.x5static.net/product/1197198-main/320x320.jpeg?updated_at=2025-03-10T18:26:28.391Z"
    },
    {
        "title": "Вафли Cuisine royale сливочные рифленые 120г",
        "price": 80.99,
        "image": "https://catalog-images.x5static.net/product/1482013-main/320x320.jpeg?updated_at=2025-03-10T16:04:43.374Z"
    },
    {
        "title": "Свинина ОМКК Премиум тушеная 325г",
        "price": 279.99,
        "image": "https://catalog-images.x5static.net/product/1501382-main/320x320.jpeg?updated_at=2025-03-11T20:19:24.008Z"
    },
    {
        "title": "Колбаса Останкино Салями Итальянская сырокопченая полусухая нарезка 150г",
        "price": 239.99,
        "image": "https://catalog-images.x5static.net/product/1162577-main/320x320.jpeg?updated_at=2025-05-15T15:15:07.022Z"
    },
    {
        "title": "Кофе Venetto натуральный растворимый 95г",
        "price": 289.99,
        "image": "https://catalog-images.x5static.net/product/1206718-main/320x320.jpeg?updated_at=2025-03-03T17:00:07.160Z"
    },
    {
        "title": "Смесь овощная Бондюэль Вок овощи по-азиатски замороженная 400г",
        "price": 299.99,
        "image": "https://catalog-images.x5static.net/product/1208167-main/320x320.jpeg?updated_at=2025-03-10T15:43:46.323Z"
    },
    {
        "title": "Хек Fish House тушка замороженная 800г",
        "price": 419.99,
        "image": "https://catalog-images.x5static.net/product/1184182-main/320x320.jpeg?updated_at=2025-03-12T07:07:07.972Z"
    },
    {
        "title": "Колбаски Черкизово Снек из индейки классические сырокопченые 70г",
        "price": 203.99,
        "image": "https://catalog-images.x5static.net/product/1486003-main/320x320.jpeg?updated_at=2025-02-25T14:27:32.656Z"
    },
    {
        "title": "Пирожные Фили-Бейкер Кольца заварные 300г",
        "price": 259.99,
        "image": "https://catalog-images.x5static.net/product/1164957-main/320x320.jpeg?updated_at=2025-03-06T10:43:07.159Z"
    },
    {
        "title": "Готовый завтрак Хрутка Подушечки с молочной начинкой 250г",
        "price": 219.99,
        "image": "https://catalog-images.x5static.net/product/1365997-main/320x320.jpeg?updated_at=2025-03-11T20:36:39.470Z"
    },
    {
        "title": "Мороженое Сарафаново Малина-гранат сливочное 8% БЗМЖ 180г",
        "price": 229.99,
        "image": "https://catalog-images.x5static.net/product/1821970-main/320x320.jpeg?updated_at=2025-06-03T19:51:23.513Z"
    },
    {
        "title": "Шампиньоны Global Village 400г",
        "price": 179.99,
        "image": "https://catalog-images.x5static.net/product/1186740-main/320x320.jpeg?updated_at=2025-03-10T18:32:06.272Z"
    },
    {
        "title": "Конфеты вафельные Славянка Обыкновенное чудо сливочные 55г",
        "price": 36.99,
        "image": "https://catalog-images.x5static.net/product/1172657-main/320x320.jpeg?updated_at=2025-03-10T18:54:08.265Z"
    },
    {
        "title": "Гель Honey Kid для подмывания малыша 400мл",
        "price": 199.99,
        "image": "https://catalog-images.x5static.net/product/1194815-main/320x320.jpeg?updated_at=2025-02-25T19:34:46.739Z"
    },
    {
        "title": "Сыр Dorblu Classic с голубой плесенью 50% БЗМЖ 100г",
        "price": 306.99,
        "image": "https://catalog-images.x5static.net/product/1180252-main/320x320.jpeg?updated_at=2025-02-25T14:24:33.164Z"
    },
    {
        "title": "Сухиничи Мираторг из куриного филе сушеные 40г",
        "price": 149.99,
        "image": "https://catalog-images.x5static.net/product/1601444-main/320x320.jpeg?updated_at=2025-02-25T14:27:42.077Z"
    },
    {
        "title": "Колбаса Останкино Пресижн сырокопченая 250г",
        "price": 329.99,
        "image": "https://catalog-images.x5static.net/product/1172333-main/320x320.jpeg?updated_at=2025-08-25T09:56:03.858Z"
    },
    {
        "title": "Конфеты Россия - Щедрая Душа Родные просторы арахис и вафельная крошка 180г",
        "price": 399.99,
        "image": "https://catalog-images.x5static.net/product/1519091-main/320x320.jpeg?updated_at=2025-03-10T18:25:27.981Z"
    },
    {
        "title": "Слойка с сосиской 75г",
        "price": 45.99,
        "image": "https://catalog-images.x5static.net/product/1212742-main/320x320.jpeg?updated_at=2025-07-16T09:40:52.537Z"
    },
    {
        "title": "Напиток безалкогольный Santo Stefano Rosso газированный 750мл",
        "price": 429.99,
        "image": "https://catalog-images.x5static.net/product/1619545-main/320x320.jpeg?updated_at=2024-10-31T19:33:50.981Z"
    },
    {
        "title": "Мешки для мусора Liberhaus сверхпрочные 160л 10шт",
        "price": 199.99,
        "image": "https://catalog-images.x5static.net/product/1197478-main/320x320.jpeg?updated_at=2025-02-17T13:23:22.899Z"
    },
    {
        "title": "Колбаса Клинский Докторская вареная 400г",
        "price": 369.99,
        "image": "https://catalog-images.x5static.net/product/1451277-main/320x320.jpeg?updated_at=2025-02-25T14:26:57.861Z"
    },
    {
        "title": "Сыр Galbani Моцарелла мини 45% БЗМЖ 150г",
        "price": 279.99,
        "image": "https://catalog-images.x5static.net/product/1171705-main/320x320.jpeg?updated_at=2025-01-28T17:57:08.207Z"
    },
    {
        "title": "Картофель Сад и огород для жарки фасованный 3кг",
        "price": 279.99,
        "image": "https://catalog-images.x5static.net/product/1163406-main/320x320.jpeg?updated_at=2025-03-05T10:57:45.402Z"
    },
    {
        "title": "Филе сельди Fish House с приправами в масле 250 г",
        "price": 179.99,
        "image": "https://catalog-images.x5static.net/product/1166888-main/320x320.jpeg?updated_at=2025-03-03T17:00:07.343Z"
    },
    {
        "title": "Колбаса Рублевский Рублевская сырокопченая полусухая 270г",
        "price": 479.99,
        "image": "https://catalog-images.x5static.net/product/1436625-main/320x320.jpeg?updated_at=2025-02-25T14:27:57.463Z"
    },
    {
        "title": "Смесь овощная Global Village 8 Овощей быстрозамороженная 400г",
        "price": 159.99,
        "image": "https://catalog-images.x5static.net/product/1475672-main/320x320.jpeg?updated_at=2025-04-16T10:07:41.289Z"
    },
    {
        "title": "Сосиски ИндиЛайт Грандос вареные из мяса индейки 440г",
        "price": 329.99,
        "image": "https://catalog-images.x5static.net/product/1402058-main/320x320.jpeg?updated_at=2025-03-10T15:43:53.981Z"
    },
    {
        "title": "Перчик Meggle сладкий стручковый со сливочным сыром, 210г",
        "price": 599.99,
        "image": "https://catalog-images.x5static.net/product/1193499-main/320x320.jpeg?updated_at=2025-01-28T08:43:40.876Z"
    },
    {
        "title": "Горбуша Курильский Берег натуральная 250г",
        "price": 239.99,
        "image": "https://catalog-images.x5static.net/product/1193368-main/320x320.jpeg?updated_at=2025-02-25T14:32:29.370Z"
    },
    {
        "title": "Колбаса Папа может Салями полукопченая 280г",
        "price": 249.99,
        "image": "https://catalog-images.x5static.net/product/1610721-main/320x320.jpeg?updated_at=2025-01-29T10:48:25.646Z"
    },
    {
        "title": "Пельмени Сибирская Коллекция классические 700г",
        "price": 699.99,
        "image": "https://catalog-images.x5static.net/product/1192475-main/320x320.jpeg?updated_at=2025-01-20T13:12:57.442Z"
    },
    {
        "title": "Пангасиус ВкусАрт филе без кожи замороженное 600г",
        "price": 464.99,
        "image": "https://catalog-images.x5static.net/product/1801678-main/320x320.jpeg?updated_at=2025-06-03T19:47:54.274Z"
    },
    {
        "title": "Нектар J7 вишневый 0.97л",
        "price": 229.9,
        "image": "https://catalog-images.x5static.net/product/1163347-main/320x320.jpeg?updated_at=2025-03-10T18:26:07.327Z"
    },
    {
        "title": "Паштет Добринское Фермерское Хозяйство Фермерский натуральный из говяжьей печени 100г",
        "price": 164.99,
        "image": "https://catalog-images.x5static.net/product/1613285-main/320x320.jpeg"
    },
    {
        "title": "Шоколад Alpen Gold Два шоколада 80г",
        "price": 107.99,
        "image": "https://catalog-images.x5static.net/product/1602087-main/320x320.jpeg?updated_at=2025-03-10T13:44:47.020Z"
    },
    {
        "title": "Горбуша Fish House натуральная 245г",
        "price": 249.99,
        "image": "https://catalog-images.x5static.net/product/1170413-main/320x320.jpeg?updated_at=2025-03-10T18:25:41.337Z"
    },
    {
        "title": "Прокладки Linmin Ночные гигиенические 290мм 7шт.",
        "price": 103.99,
        "image": "https://catalog-images.x5static.net/product/1558108-main/320x320.jpeg?updated_at=2025-02-17T15:06:59.920Z"
    },
    {
        "title": "Шашлык свиной Мираторг Деликатесный охлажденный",
        "price": 299.99,
        "image": "https://catalog-images.x5static.net/product/1165835-main/320x320.jpeg?updated_at=2025-01-10T10:04:39.697Z"
    },
    {
        "title": "Колбаса Черкизово Прошутто полусухая сырокопченая нарезка 100г",
        "price": 239.99,
        "image": "https://catalog-images.x5static.net/product/1199512-main/320x320.jpeg?updated_at=2025-02-25T14:27:23.555Z"
    },
    {
        "title": "Конфеты КФ Крупской Мишка на севере 200г",
        "price": 259.99,
        "image": "https://catalog-images.x5static.net/product/1159307-main/320x320.jpeg?updated_at=2025-03-10T18:26:17.716Z"
    },
    {
        "title": "Конфеты КФ Крупской Особый шоколад темный 200г",
        "price": 363.99,
        "image": "https://catalog-images.x5static.net/product/1166020-main/320x320.jpeg?updated_at=2025-01-31T14:16:41.010Z"
    },
    {
        "title": "Корм сухой Katty Pro с курицей полнорационный для взрослых кошек 800г",
        "price": 242.99,
        "image": "https://catalog-images.x5static.net/product/1625388-main/320x320.jpeg?updated_at=2025-06-03T19:46:05.101Z"
    },
    {
        "title": "Пирожное Mirel профитроли с пломбирным кремом 180г",
        "price": 224.99,
        "image": "https://catalog-images.x5static.net/product/1175641-main/320x320.jpeg?updated_at=2025-03-06T10:43:06.088Z"
    },
    {
        "title": "Пельмени Мираторг С натуральными сливками 700г",
        "price": 324.99,
        "image": "https://catalog-images.x5static.net/product/1832811-main/320x320.jpeg?updated_at=2025-06-30T10:40:25.514Z"
    },
    {
        "title": "Печенье Шарлиз Кокосанка сдобное 270г",
        "price": 169.99,
        "image": "https://catalog-images.x5static.net/product/1167434-main/320x320.jpeg?updated_at=2025-03-10T18:26:20.283Z"
    },
    {
        "title": "Филе рыбное Vici Приорити Дальневосточное в панировке 300г",
        "price": 269.99,
        "image": "https://catalog-images.x5static.net/product/1176338-main/320x320.jpeg?updated_at=2025-01-10T10:06:15.363Z"
    },
    {
        "title": "Пена для бритья Endeavor sensitive для чувствительной кожи 200мл",
        "price": 149.99,
        "image": "https://catalog-images.x5static.net/product/1395816-main/320x320.jpeg?updated_at=2025-03-03T14:08:31.950Z"
    },
    {
        "title": "Жироудалитель Liberhaus 500мл",
        "price": 169.99,
        "image": "https://catalog-images.x5static.net/product/1202227-main/320x320.jpeg?updated_at=2025-02-12T14:07:25.501Z"
    },
    {
        "title": "Смесь овощная Мираторг Итальянская замороженная 400г",
        "price": 199.99,
        "image": "https://catalog-images.x5static.net/product/1169854-main/320x320.jpeg?updated_at=2025-03-10T15:43:43.698Z"
    },
    {
        "title": "Мыло жидкое Bodyart для интимной гигиены 500мл",
        "price": 159.99,
        "image": "https://catalog-images.x5static.net/product/1468182-main/320x320.jpeg?updated_at=2025-02-12T14:07:52.294Z"
    },
    {
        "title": "Лапша Доширак быстрого приготовления со вкусом говядины, 90г",
        "price": 59.99,
        "image": "https://catalog-images.x5static.net/product/1158440-main/320x320.jpeg?updated_at=2025-03-04T05:34:34.441Z"
    },
    {
        "title": "Кофе в зернах Живой кофе Арабика жареный 200г",
        "price": 363.99,
        "image": "https://catalog-images.x5static.net/product/1580495-main/320x320.jpeg?updated_at=2025-02-11T13:29:35.110Z"
    },
    {
        "title": "Освежитель воздуха Liberhaus Солнечное настроение сменный аэрозольный баллон 250мл",
        "price": 179.99,
        "image": "https://catalog-images.x5static.net/product/1194526-main/320x320.jpeg?updated_at=2025-02-12T14:08:29.732Z"
    },
    {
        "title": "Фарш говяжий Рестория 400г",
        "price": 232.99,
        "image": "https://catalog-images.x5static.net/product/1168769-main/320x320.jpeg?updated_at=2025-02-25T12:30:37.145Z"
    },
    {
        "title": "Карпаччо Черкизово из индейки сырокопченое 85г",
        "price": 239.99,
        "image": "https://catalog-images.x5static.net/product/1437729-main/320x320.jpeg?updated_at=2025-02-25T14:27:34.869Z"
    },
    {
        "title": "Сыр Liebendorf Маасдам полутвердый 45% БЗМЖ",
        "price": 119.9,
        "image": "https://catalog-images.x5static.net/product/1212654-main/320x320.jpeg?updated_at=2025-03-10T15:34:42.879Z"
    },
    {
        "title": "Колбаски МясоТакМясо Кнуты классические сырокопченые полусухие 60г",
        "price": 79.98,
        "image": "https://catalog-images.x5static.net/product/1589358-main/320x320.jpeg?updated_at=2025-02-21T22:01:45.106Z"
    },
    {
        "title": "Гель для стирки Ласка для шерсти и шелка 1л",
        "price": 349.99,
        "image": "https://catalog-images.x5static.net/product/1197197-main/320x320.jpeg?updated_at=2025-03-10T18:26:28.499Z"
    },
    {
        "title": "Чипсы Bruto из натурального картофеля с морской солью и черным перцем 120г",
        "price": 145.99,
        "image": "https://catalog-images.x5static.net/product/1577505-main/320x320.jpeg?updated_at=2025-02-13T14:11:12.178Z"
    },
    {
        "title": "Напиток Добрый Апельсин-мандарин для детского питания сокосодержащий 1.45л",
        "price": 189.99,
        "image": "https://catalog-images.x5static.net/product/1833134-main/320x320.jpeg?updated_at=2025-06-03T19:54:07.149Z"
    },
    {
        "title": "Батончик Bombbar фундук мюсли 45г",
        "price": 44.99,
        "image": "https://catalog-images.x5static.net/product/1444748-main/320x320.jpeg?updated_at=2025-03-10T18:54:02.503Z"
    },
    {
        "title": "Скраб для тела Organic Shop Бразильский кофе 250мл",
        "price": 309.99,
        "image": "https://catalog-images.x5static.net/product/1166460-main/320x320.jpeg?updated_at=2025-03-03T11:04:24.604Z"
    },
    {
        "title": "Конфеты Аленка 250г",
        "price": 384.99,
        "image": "https://catalog-images.x5static.net/product/1159940-main/320x320.jpeg?updated_at=2025-03-10T18:26:12.559Z"
    },
    {
        "title": "Сыр Galbani Моцарелла мягкий 45% БЗМЖ 125г",
        "price": 199.99,
        "image": "https://catalog-images.x5static.net/product/1157455-main/320x320.jpeg?updated_at=2025-03-06T10:37:51.754Z"
    },
    {
        "title": "Пеленки Deliqua Одноразовые впитывающие 60х90 5шт.",
        "price": 187.99,
        "image": "https://catalog-images.x5static.net/product/1408690-main/320x320.jpeg?updated_at=2025-02-17T15:00:41.236Z"
    },
    {
        "title": "Сыр Natura Selection Matured Havarti выдержанный 45% БЗМЖ 200г",
        "price": 389.99,
        "image": "https://catalog-images.x5static.net/product/1520544-main/320x320.jpeg?updated_at=2025-02-25T14:24:50.361Z"
    },
    {
        "title": "Колбаса Черкизово Брауншвейгская сырокопчёная полусухая 200г",
        "price": 409.99,
        "image": "https://catalog-images.x5static.net/product/1369772-main/320x320.jpeg?updated_at=2025-02-25T14:28:11.336Z"
    },
    {
        "title": "Мороженое Свитлогорье Пломбир с арахисом и карамелью 15% БЗМЖ 80г",
        "price": 129.99,
        "image": "https://catalog-images.x5static.net/product/1499304-main/320x320.jpeg?updated_at=2025-02-14T15:27:10.562Z"
    },
    {
        "title": "Какао-напиток Хрутка быстрорастворимый 480г",
        "price": 399.99,
        "image": "https://catalog-images.x5static.net/product/1497959-main/320x320.jpeg?updated_at=2025-06-03T20:19:19.650Z"
    },
    {
        "title": "Подгузники Honey Kid Maxi размер 4 7-18кг 12шт.",
        "price": 219.99,
        "image": "https://catalog-images.x5static.net/product/1491643-main/320x320.jpeg?updated_at=2025-02-17T15:05:21.588Z"
    },
    {
        "title": "Сыр Свежий Ряд Чечил спагетти копченый БЗМЖ 100г",
        "price": 169.99,
        "image": "https://catalog-images.x5static.net/product/1199036-main/320x320.jpeg?updated_at=2025-02-21T12:31:06.781Z"
    },
    {
        "title": "Мыло жидкое Красная цена антибактериальное с экстрактом ромашки 1л",
        "price": 129.99,
        "image": "https://catalog-images.x5static.net/product/1408689-main/320x320.jpeg?updated_at=2025-04-23T12:30:59.534Z"
    },
    {
        "title": "Сосиски Папа может Филейные из мяса птицы вареные 330г",
        "price": 219.99,
        "image": "https://catalog-images.x5static.net/product/1595589-main/320x320.jpeg?updated_at=2025-09-04T06:56:06.299Z"
    },
    {
        "title": "Молоко Алексеевское сгущенное цельное с сахаром 8.5% БЗМЖ 500г",
        "price": 269.99,
        "image": "https://catalog-images.x5static.net/product/1821969-main/320x320.jpeg?updated_at=2025-06-03T19:51:22.350Z"
    },
    {
        "title": "Мармелад MixBar Злючки Змеючки Кислый вкус жевательный 140г",
        "price": 69.99,
        "image": "https://catalog-images.x5static.net/product/1211993-main/320x320.jpeg?updated_at=2025-03-10T18:48:02.947Z"
    },
    {
        "title": "Напиток Фрутмотив Зеленый чай малина негазированный 1.5л",
        "price": 183.99,
        "image": "https://catalog-images.x5static.net/product/1560190-main/320x320.jpeg?updated_at=2025-06-23T07:07:27.561Z"
    },
    {
        "title": "Пенка для умывания Dolce Milk Bubble Milk 150мл",
        "price": 302.99,
        "image": "https://catalog-images.x5static.net/product/1217036-main/320x320.jpeg?updated_at=2025-03-10T18:16:06.775Z"
    },
    {
        "title": "Кета Fish House филе-ломтики 100г",
        "price": 219.99,
        "image": "https://catalog-images.x5static.net/product/1182630-main/320x320.jpeg?updated_at=2025-03-12T07:07:09.213Z"
    },
    {
        "title": "Картофельное пюре Бизнес Меню с куриным филе и овощами 110г",
        "price": 149.99,
        "image": "https://catalog-images.x5static.net/product/1160739-main/320x320.jpeg?updated_at=2025-01-31T14:13:23.577Z"
    },
    {
        "title": "Сыр Liebendorf Гауда полутвердый 45% БЗМЖ",
        "price": 119.99,
        "image": "https://catalog-images.x5static.net/product/1194479-main/320x320.jpeg?updated_at=2025-02-03T07:59:52.575Z"
    },
    {
        "title": "Антиперспирант Nivea Men Невидимый для чёрного и белого роликовый 50мл",
        "price": 379.99,
        "image": "https://catalog-images.x5static.net/product/1165855-main/320x320.jpeg?updated_at=2025-03-10T18:25:59.501Z"
    },
    {
        "title": "Набор зубных щеток Koreain средняя жесткость 1шт.",
        "price": 103.99,
        "image": "https://catalog-images.x5static.net/product/1499671-main/320x320.jpeg?updated_at=2025-02-17T15:05:45.695Z"
    },
    {
        "title": "Рис Националь для плова 900г",
        "price": 159.99,
        "image": "https://catalog-images.x5static.net/product/1169601-main/320x320.jpeg?updated_at=2025-03-10T18:25:43.402Z"
    },
    {
        "title": "Конфеты Красный Октябрь Сливочная помадка с цукатом 250г",
        "price": 209.99,
        "image": "https://catalog-images.x5static.net/product/1157505-main/320x320.jpeg?updated_at=2025-03-10T18:26:12.599Z"
    },
    {
        "title": "Напиток сокосодержащий Любимый Вишневая черешня 1.93л",
        "price": 229.9,
        "image": "https://catalog-images.x5static.net/product/1174317-main/320x320.jpeg?updated_at=2025-03-10T18:26:07.259Z"
    },
    {
        "title": "Колбаса Черкизово Сальчичон с розовым перцем с/к п/с 85г",
        "price": 199.99,
        "image": "https://catalog-images.x5static.net/product/1422986-main/320x320.jpeg?updated_at=2025-02-25T14:27:30.412Z"
    },
    {
        "title": "Туалетная бумага Tolli Classic влажная 80шт.",
        "price": 166.99,
        "image": "https://catalog-images.x5static.net/product/1201837-main/320x320.jpeg?updated_at=2025-02-17T13:24:26.692Z"
    },
    {
        "title": "Сыр мягкий Supreme L'original с белой плесенью 60% БЗМЖ 125г",
        "price": 343.99,
        "image": "https://catalog-images.x5static.net/product/1200789-main/320x320.jpeg?updated_at=2025-09-11T16:54:05.282Z"
    },
    {
        "title": "Конфеты Коровка вафельные шоколадные 250г",
        "price": 265.99,
        "image": "https://catalog-images.x5static.net/product/1163550-main/320x320.jpeg?updated_at=2025-03-10T18:26:15.113Z"
    },
    {
        "title": "Напиток сокосодержащий Любимый Малиновая нежность 0.95л",
        "price": 129.9,
        "image": "https://catalog-images.x5static.net/product/1409184-main/320x320.jpeg?updated_at=2025-03-26T14:30:06.531Z"
    },
    {
        "title": "Сыр Natura Сливочный легкий нарезка 16% БЗМЖ 150г",
        "price": 279.99,
        "image": "https://catalog-images.x5static.net/product/1499570-main/320x320.jpeg"
    },
    {
        "title": "Лапша Nongshim Кимчи Рамен 70г",
        "price": 194.99,
        "image": "https://catalog-images.x5static.net/product/1835104-main/320x320.jpeg?updated_at=2024-09-11T22:00:10.125Z"
    },
    {
        "title": "Напиток Любимый Тропический микс сокосодержащий 1.93л",
        "price": 229.9,
        "image": "https://catalog-images.x5static.net/product/1187329-main/320x320.jpeg?updated_at=2025-03-11T17:36:16.249Z"
    },
    {
        "title": "Гель  для душа и шампунь Old Spice Captain мужской 2в1 400мл",
        "price": 419.99,
        "image": "https://catalog-images.x5static.net/product/1194872-main/320x320.jpeg?updated_at=2025-02-24T18:57:33.224Z"
    },
    {
        "title": "Напиток сокосодержащий Любимый из яблок осветленный 1.93л",
        "price": 229.9,
        "image": "https://catalog-images.x5static.net/product/1472753-main/320x320.jpeg?updated_at=2025-03-10T18:26:07.314Z"
    },
    {
        "title": "Колбаса Папа может Чесночная полукопченая 350г",
        "price": 269.99,
        "image": "https://catalog-images.x5static.net/product/1445999-main/320x320.jpeg?updated_at=2025-08-25T09:59:43.046Z"
    },
    {
        "title": "Напиток Любимый Земляничное лето сокосодержащий 1.93л",
        "price": 229.9,
        "image": "https://catalog-images.x5static.net/product/1170591-main/320x320.jpeg?updated_at=2025-03-10T18:26:10.154Z"
    },
    {
        "title": "Сыр Свежий Ряд Косичка копченый 40% БЗМЖ 100г",
        "price": 184.99,
        "image": "https://catalog-images.x5static.net/product/1448949-main/320x320.jpeg?updated_at=2025-04-30T11:09:44.573Z"
    },
    {
        "title": "Огурцы Global Village целые маринованные 680г",
        "price": 169.99,
        "image": "https://catalog-images.x5static.net/product/1165721-main/320x320.jpeg"
    }
];

const displayRandomProduct = (currentProduct) => {
    const productsContainer = document.getElementById("products_container");
    const guessInput = document.getElementById("guess_input");
    const messageEl = document.getElementById("message");

    // Очищаем контейнер
    productsContainer.innerHTML = "";

    // Выбираем случайный продукт
    const randomIndex = Math.floor(Math.random() * products.length);
    currentProduct = products[randomIndex];

    // Создаем и добавляем элемент продукта
    const productElem = getProductElem(currentProduct.title, currentProduct.price, currentProduct.image);
    productsContainer.appendChild(productElem);

    // Очищаем поле ввода и сообщение
    guessInput.value = "";
    messageEl.textContent = "";
    messageEl.className = "message";

    return currentProduct;
};

// Функция для создания элемента продукта
const getProductElem = (name, cost, image) => {
    const elem = document.createElement("div");
    elem.className = "product-card";
    elem.innerHTML = `
    <div class="product-image">
      <img src="${image}" alt="${name}" />
    </div>
    <div class="product-name">${name}</div>
    <div class="product-cost">??? ₽</div>
  `;
    return elem;
};
