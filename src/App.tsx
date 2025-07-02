import ProductCard from './components/ProductCard/ProductCard';
import { Currency } from './types/ProductCardTypes';


const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <ProductCard
        title="Смартфон Pro Max"
        origin="Россия"
        price={1000}
        currency={Currency.USD}
        imageUrl="https://avatars.mds.yandex.net/i?id=99bc59eb2018e09c9fd6646b188be51638dca579-12569877-images-thumbs&n=13"
      />
    </div>
  );
};

export default App;