import { async } from "@firebase/util";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {ReactComponent as CrwnLogo} from '../../assets/wolf.svg';
import Carticon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import {selectCurrentUser} from '../../store/user/user.selector'

import { signOutUser } from "../../utils/firebase/firebase.utils";
import {NavigationContainer, NavLink, NavLinks, LogoContainer} from './navigation.styles.jsx';
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const signOutUser = () => dispatch(signOutStart());

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