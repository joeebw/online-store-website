
import { useDispatch, useSelector } from 'react-redux';

import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.js';
import { setIsCartOpen } from '../../store/cart/cart.action.js';

import {ShoppingIcon, CartIconContainer, ItemCount} from './cart-icon.styles.jsx';

const Carticon = () => {
    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);
    
    const isCartOpen = useSelector(selectIsCartOpen); 

    const toggleisCartOpen = () => dispatch(setIsCartOpen(!isCartOpen)); 

    return(
        <CartIconContainer onClick={toggleisCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default Carticon;