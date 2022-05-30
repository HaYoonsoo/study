import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const PromotionWrapper = styled.div`
  width: 1200px;
  height: 850px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px auto;
  overflow: hidden;
  border-bottom: #cdcccc solid thin;
`;

export const UpperContent = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 420px;
  display: flex;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 1.8rem;
  font-weight: bold;
`;

export const ArrowRight = styled(AiOutlineRight)`
  margin-left: 50px;
  width: 80%;
  height: 1.5rem;
`;

export const MainImageWrapper = styled.div`
  margin-right: 20px;
  width: 420px;
  height: 420px;
`;

export const Explanation = styled.div`
  display: inline-block;
  margin-top: 20px;
  color: rgb(191, 191, 191);
`;

export const ItemContainer = styled.div`
  display: flex;
  position: relative;
  left: ${ (props) => props.leftValue }px;
  width: 1200px;
  height: 800px;
  overflow: hide;
  margin-top: 30px;

  @media screen {
    transition: 0.7s all ease;
  }
`;

export const Item = styled.div`
  height: 300px;
  width: 250px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-right: 30px;
`;

export const ItemImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 220px;
  width: 220px;
  background-color: #efefef;
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 0px;
`;

export const ItemName = styled.div`
  color: #7c7a7a;
  font-size: 1.2rem;
`;

export const ItemPrice = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
`;
