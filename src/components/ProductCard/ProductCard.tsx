import css from './ProductCard.module.scss';

import { formatCurrency } from '../../utils/formatPrice';
import type { ProductCardProps } from '../../types/ProductCardTypes';

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  origin,
  price,
  currency,
  imageUrl,
}) => {

  const formatPrice = (price: number, currency: string) =>
    formatCurrency(price, currency);

  return (
    <div className={css.product_card}>
      <div className={css.product_card__image}>
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className={css.product_card__img}
        />
      </div>
      <div className={css.product_card__details}>
        <h3 className={css.product_card__title}>{title}</h3>
        <p className={css.product_card__origin}>Страна: {origin}</p>
        <p className={css.product_card__price}>{formatPrice(price, currency)}</p>
      </div>
    </div>
  );
};

export default ProductCard;