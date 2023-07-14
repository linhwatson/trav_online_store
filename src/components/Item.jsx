import { Link } from 'react-router-dom';

const Item = ( {unit_id, product_name, price, popularity, durability, daysuntilexpiration, barcode }) => {

  const imgList = {
    'beef': [
      'https://www.target.com/p/usda-choice-angus-beef-ribeye-steak-0-45-1-35-lbs-price-per-lb-good-38-gather-8482/-/A-54273119',
      'https://i5.walmartimages.com/asr/05d7fa9c-950a-455e-ae5a-9ab448962fac.03f67082ea0385c86b5a6c2fdf2e7f0e.jpeg',
      'https://grassrunfarms.com/wp-content/uploads/2021/06/P_ungraded-caseready-Top-Sirloin-Steak.jpg',
      'https://i0.wp.com/gladeroadgrowing.com/sampleblog/wp-content/uploads/2020/03/IMG_2254-scaled-e1585064870643.jpg?fit=2560%2C1912&ssl=1',
      'https://meatyourcheese.com/cdn/shop/products/JapaneseA5Ribeye.jpg?v=1652796631',
      'https://www.mariesriverwagyu.com/wp-content/uploads/2021/04/Depositphotos_304076792_s-2019.jpg'

    ],
    'pepsi': [
      'https://www.snackhistory.com/wp-content/uploads/2022/02/Pepsi-3.jpg',
      'https://www.iheartpublix.com/wp-content/uploads/2022/05/Pepsi-bottle.jpg',
      'https://www.meijer.com/content/dam/meijer/product/0012/00/0504/05/0012000504051_a1c1_1200.png',
      'https://www.iheartkroger.com/wp-content/uploads/2022/05/Pepsi-1.jpg'
    ],
    'fish': [
      'https://supersafeway.com/wp-content/uploads/2020/06/open_nature_Sockeye_Salmon-1024x657.png',
      'https://images.squarespace-cdn.com/content/v1/55ba5a7ee4b00dce923af914/1681260315707-1IHU12BY1NCDQTS5BF72/Kanaloa-Shop-2023-61.jpg?format=1500w',
      'https://alaskan-seafood.azureedge.net/img/copper-river-king-salmon-box.png',
      'https://cdn3.volusion.com/etwvu.tkhop/v/vspfiles/photos/649-2.jpg?v-cache=1606035119',
      'https://img.livestrong.com/-/photos.demandstudios.com/getty/article/181/116/538751799.jpg',
      'https://goodtastefoods.co.uk/wp-content/uploads/2023/03/Cod_loins_square_479571751-scaled-1.jpg',
      'https://justcook.butcherbox.com/wp-content/uploads/2021/03/frozen-cod-filet.jpg'
    ],
    'salad': [
      'https://www.eatingwell.com/thmb/tOraypX2Z2ZztcmM2EhoppQW0jE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1219x879:1221x881)/chopped-power-salad-with-chicken-0ad93f1931524a679c0f8854d74e6e57.jpg',
      'https://www.eatingwell.com/thmb/bGhAB_Vm1NUAtliDcrzixylY4SE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cucumber-vinegar-salad-bb9dbc2435374efb906353dfff2bfe7d.jpg',
      'https://cdn.loveandlemons.com/wp-content/uploads/2021/04/green-salad.jpg',
      'https://www.onceuponachef.com/images/2019/07/Big-Italian-Salad-1200x1553.jpg'
    ],
    'broccoli': [
      'https://images.immediate.co.uk/production/volatile/sites/30/2022/07/Broccoli-78ec54e.jpg',
      'https://www.acouplecooks.com/wp-content/uploads/2022/07/How-to-Blanch-Broccoli-003.jpg',
      'https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/broccoli.jpg?h=65b39431&itok=xglOu8vA'
    ],
    'strawberry': [
      'https://www.allrecipes.com/thmb/1c99SWam7_FM6vUzpDDzIKffMR4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-strawberry-fruit-or-vegetable-f6dd901427714e46af2d706a57b9016f.jpg',
      'https://www.southernliving.com/thmb/o28H3MU0iiwn6DS71XjAsKdYgSo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern_Living_Macerated_Strawberries_SEO49_47-3f7821eb6be34224a627da00224395be.jpg',
      'https://www.farmersalmanac.com/wp-content/uploads/2021/03/Strawberry-tops.jpeg',
      'https://media.cnn.com/api/v1/images/stellar/prod/220506091853-01-strawberries-may-recipe-stock.jpg?c=16x9&q=h_720,w_1280,c_fill',
      'https://hub.suttons.co.uk/wp-content/uploads/2022/05/20220512_suttons_malling_centenary.jpg'
    ],
    'yogurt': [
      'https://cdn11.bigcommerce.com/s-q1qpuo8ch5/images/stencil/2048x2048/products/1026/550/chobanistrberry__75742.1573829963.jpg?c=2',
      'https://res.cloudinary.com/general-mills/image/upload/products/00070470004396_C1R1_s107_8ab934d4-76a5-4c52-b034-2ac53f374782.jpg',
      'https://www.kroger.com/product/images/large/front/0068954408301',
      'https://www.simplysissom.com/wp-content/uploads/2017/01/horizontalparfaityogurt-copy.jpg',
      'https://thefoodiephysician.com/wp-content/uploads/2019/02/Greek-Yogurt-Berry-Parfaits-1-500x500.jpg'
    ],
    'cheese': [
      'https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthiest-cheese-1296x728-swiss.jpg',
      'https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-69712708/69712708.jpg',
      'https://wordpress-live.heygrillhey.com/wp-content/uploads/2018/12/Smoked-Cheese-Feature-500x500.png'
    ],
    'chicken': [
      'https://www.wellplated.com/wp-content/uploads/2021/08/Crispy-Air-Fryer-Chicken-Breast.jpg',
      'https://hips.hearstapps.com/hmg-prod/images/tomatobutterroastchicken-2-1669133641.jpeg',
      'https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe-500x375.jpg',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2022/10/Roast-Chicken-main.jpg'
    ]
  };

  let img = '';

  for (let key in imgList) {
    if (product_name === key) {
      img = imgList[key][(Math.floor(Math.random() * imgList[key].length))];
    }
  }

  return (
    <Link to={`/details/${unit_id}`} className='item'>
      <div className='image-container'>
        <img src={img} alt={name}/>
      </div>
      <div className='info'>
        <h1>{product_name}</h1>
        <h2>${price} - Popularity: {popularity}</h2>
      </div>
    </Link>
  )
};

export default Item;