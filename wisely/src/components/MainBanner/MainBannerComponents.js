import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const BannerWrapper = styled.div`
  margin-top: 60px;
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BannerContainer = styled.div`
  background-color: #efefef;
  width: 100%;
  height: 100%;
`;

export const BannerItem = styled.div`
  opacity: ${(props) => (String(props.image) === props.bannerId ? 1 : 0)};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen {
    transition: 1s all ease;
  }
`;

export const Banner = styled.img`
  max-width: 100%;
  max-height: 100%;
`

export const ButtonContainer = styled.div`
  position: absolute;
  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.div`
  margin: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: gray;
  opacity: 0.5;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ButtonLeft = styled(AiOutlineLeft)`
  width: 50%;
  height: 50%;
`;

export const ButtonRight = styled(AiOutlineRight)`
  width: 50%;
  height: 50%;
`;

export const ImageSequence = styled.div`
  position: absolute;
  border-radius: 10px;
  background-color: gray;
  height: 1.2rem;
  width: 2.5rem;
  color: white;
  right: 40px;
  bottom: 20px;
  font-size: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
