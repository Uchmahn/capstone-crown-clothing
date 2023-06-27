import { useSelector, useDispatch } from 'react-redux';
import { FC } from 'react';

import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';

import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';

import { CategoryItem } from '../../store/categories/category.types';

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name className="name">{name}</Name>
        <Price className="price">{price}</Price>
      </Footer>
      <Button
        isLoading={false}
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProductToCart}
      >
        ADD TO CART
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
