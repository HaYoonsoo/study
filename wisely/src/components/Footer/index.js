import React from "react";
import {
  FooterWrapper,
  FooterContainer,
  FooterUpper,
  UpperContainer,
  UpperItem,
  FooterLower,
  LowerContainer,
  LowerItem,
} from './FooterComponents'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterUpper>
          <UpperContainer>
            <UpperItem>로그인</UpperItem>
            <UpperItem>고객센터</UpperItem>
            <UpperItem>인재채용</UpperItem>
          </UpperContainer>
        </FooterUpper>
        <FooterLower>
          <LowerContainer>
            <LowerItem>회사 소개</LowerItem>
            <LowerItem>회사 소개</LowerItem>
          </LowerContainer>
        </FooterLower>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
