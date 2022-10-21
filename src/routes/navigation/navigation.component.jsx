import { async } from "@firebase/util";
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {ReactComponent as CrwnLogo} from '../../assets/wolf.svg';
import Carticon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import {selectCurrentUser} from '../../store/user/user.selector'

import { signOutUser } from "../../utils/firebase/firebase.utils";
import {NavigationContainer, NavLink, NavLinks, LogoContainer} from './navigation.styles.jsx';


const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const {isCartOpen} = useContext(CartContext);

    return(
      <Fragment>
        <NavigationContainer>
          <LogoContainer to='/'>
            <CrwnLogo width='3.75em' className='Logo'/>
          </LogoContainer>          
          <NavLinks>
            <NavLink to='/shop'>
                SHOP
            </NavLink>
            {currentUser ? 
              (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink> ): (<NavLink to='/auth'>
              SIGN IN
              </NavLink>)
            }
            <Carticon/>
          </NavLinks>
          { isCartOpen && <CartDropDown/>}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation;