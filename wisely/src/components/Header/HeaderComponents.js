import styled from 'styled-components';
import { IoCartOutline } from 'react-icons/io5'

export const HeaderWrapper = styled.div`
  background: rgb(255, 255, 255);
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: ${props => props.hide ? '-60px' : '0'};
  left: 0;
  z-index: 100;

  @media screen {
    transition: 0.8s all ease;
  }
`;

export const HeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const CompanyName = styled.h2`
  margin-left: 20px;
`;

export const ItemContainer = styled.div`
  margin-left: 40px;
  display: flex;
  justify-content: center;
`;

export const Item = styled.div`
  margin-right: 10px;
  color: gray;
`;

export const MenuContainer = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  justify-content: center;
  align-items: center;
`;

export const Login = styled.div`
  margin-right: 30px;
`;

export const CartWrapper = styled.div`
  width: 35px;
  height: 35px;
  margin-bottom: 5px;
`;

export const Cart = styled(IoCartOutline)`
  width: 100%;
  height: 100%;
`