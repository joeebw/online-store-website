import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {ShoppingIcon, CartIconContainer, ItemCount} from './cart-icon.styles.jsx';

const Carticon = () => {
    const {isCartOpen ,setIsCartOpen, cartCount} = useContext(CartContext);
    
    const toggleisCartOpen = () => setIsCartOpen(!isCartOpen)

    return(
        <CartIconContainer onClick={toggleisCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default Carticon;