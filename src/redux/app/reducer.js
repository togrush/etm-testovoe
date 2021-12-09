const GET_DB = 'GET_DB'

export const getDB = (payload) => ({
        type: GET_DB,
        payload
    });

const initialState = {
  rows: [
    {
    id: "00001",
    title: "Автоматический выключатель 10A",
    vendor: "ABB",
    pack: 100,
    price: 1500,
    imageUrl: 'https://stroymat.msk.ru/sites/default/files/styles/254x245r/public/feeds/0000024126.jpg?itok=GGfpW4m4'
    },
    {
    id: "00002",
    title: "Автоматический выключатель 20A",
    vendor: "ABB",
    pack: 100,
    price: 1500,
    imageUrl: 'https://emilink.ru/uploads/Goods1489067895.jpg'
    },
    {
    id: "00003",
    title: "Корпус металлический",
    vendor: "ABB",
    pack: 1,
    price: 6800,
    imageUrl: 'https://cdn.vseinstrumenti.ru/images/goods/electrika-i-svet/shkaf-schit-bok/1185700/560x504/51177497.jpg'
    },
    {
    id: "00004",
    title: "Корпус пластиковый",
    vendor: "IEK",
    pack: 1,
    price: 1200,
    imageUrl: 'https://cdn.vseinstrumenti.ru/images/goods/electrika-i-svet/shkaf-schit-bok/1731797/560x504/53252802.jpg'
    },
    {
    id: "00005",
    title: "Шина медная МТ 60х8",
    vendor: "DKC",
    pack: 1,
    price: 1200,
    imageUrl: 'https://st33.stpulscen.ru/images/product/347/521/434_big.jpg'
    },
    {
    id: "00006",
    
    title: "DLP Кабель-канал 105x50",
    vendor: "DKC",
    pack: 1,
    price: 350,
    imageUrl: 'https://img.layta.ru/ekoplast-576002-0.resize1.jpeg'
    },
    {
    id: "00007",
    title: "DLP Кабель-канал 80x50",
    vendor: "DKC",
    pack: 1,
    price: 300,
    imageUrl: 'https://img.layta.ru/ekoplast-576002-0.resize1.jpeg'
    },
    {
    id: "00008",
    title: "ЭТЮД Выключатель одноклавишный",
    vendor: "Schneider Electric",
    pack: 1,
    price: 85,
    imageUrl: 'https://static.vellmart.net/images/items/0022860-1.jpg'
    },
    {
    id: "00009",
    title: "Контактор E 12А катушка управления 220В",
    vendor: "Schneider Electric",
    pack: 1,
    price: 3800,
    imageUrl: 'https://cdn.vseinstrumenti.ru/images/goods/electrika-i-svet/kommutatsionnoe-oborudovanie/1237452/560x504/51464891.jpg'
    },
    {
    id: "00010",
    title: "Лоток для систем освещения",
    vendor: "Schneider Electric",
    pack: 1,
    price: 1859,
    imageUrl: 'https://schneider-24.ru/upload/iblock/81c/ric03qbmr9krdik3hmq77kc5vyitdnp0.jpeg'
    }
    ]
}

export const dataBaseReducer = (
    state = initialState,
    action,
  ) => {
    switch (action.type) {
      case GET_DB:
        return { ...state, rows: action.payload };
  
      default:
        return state;
    }
  };
  