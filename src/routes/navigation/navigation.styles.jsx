import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom:20px;
  }
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 95px;
  padding: 0px 22px ;

  @media screen and (max-width: 800px) {
    width: 40px;
    padding: 0;  
  }

`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.2rem;

  @media screen and (max-width: 800px) {
    width: 80%;
  }

`

export const NavLink = styled(Link)`
  padding: 10px 30px;
  cursor: pointer;
`

