import { FC, memo } from 'react';
import { CartItemContainer } from './cart-item.styles';
import { CartItem as CartItemType } from '../../store/cart/cart.types';

type CartItemProps = {
  cartItem: CartItemType;
};

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />

      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} ✕ {`$${price}`}
        </span>
      </div>
    </CartItemContainer>
  );
});

export default CartItem;
