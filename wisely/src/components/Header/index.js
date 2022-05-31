import React, { useEffect, useState } from "react";
import {
  HeaderWrapper,
  HeaderContainer,
  CompanyName,
  ItemContainer,
  Item,
  MenuContainer,
  Login,
  CartWrapper,
  Cart,
} from "./HeaderComponents";

const Header = (props) => {
  const [oldScroll, setOldScroll] = useState(window.scrollY);
  const [isHidden, setIsHidden] = useState(false);

  useEffect( () => {
    const func = (e) => {
      setOldScroll( (prev) => {
        const now = window.scrollY
        if ( prev > now && now > 0) { //올라갔다. 튕겨서 내려오는 경우 제외
          setIsHidden(false);
        } else if ( prev < now && now > 0) { //내려갔다
          setIsHidden(true);
        }
        return now;
      } );
    }
    window.addEventListener('scroll', func );

    return () => { window.removeEventListener('scroll', func) };
  }, []);

  return (
    <HeaderWrapper hide={isHidden}>
      <HeaderContainer>
        <CompanyName>WISELY</CompanyName>
        <ItemContainer>
          <Item to="#">제품보기</Item>
          <Item to="#">브랜드 스토리</Item>
          <Item to="#">블로그</Item>
          <Item to="#">고객센터</Item>
        </ItemContainer>
        <MenuContainer>
          <Login to="#">로그인</Login>
          <CartWrapper>
            <Cart />
          </CartWrapper>
        </MenuContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
