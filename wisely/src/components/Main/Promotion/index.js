import React, {useEffect, useState} from "react";
import {
  Image,
  PromotionWrapper,
  UpperContent,
  MainImageWrapper,
  TitleContainer,
  Title,
  TitleContent,
  ArrowRight,
  Explanation,
  ItemContainer,
  Item,
  ItemImageWrapper,
  ItemContent,
  ItemName,
  ItemPrice,
} from "./PromotionComponents";

import ImageFile1 from "../../../assets/images/1.jpg";
import ImageFile2 from "../../../assets/images/2.jpg";
import ImageFile3 from "../../../assets/images/3.jpg";
import ImageFile4 from "../../../assets/images/4.jpg";
import ImageFile5 from "../../../assets/images/5.jpg";
import ImageFile6 from "../../../assets/images/6.jpg";
import ImageFile7 from "../../../assets/images/7.jpg";
import ImageFile8 from "../../../assets/images/8.jpg";

const Promotion = () => {
  const itemList = [
    {
      image: ImageFile2,
      name: "리필면도날 4개입",
      price: "5,900",
    },
    {
      image: ImageFile3,
      name: "면도기 스타터세트",
      price: "4,900",
    },
    {
      image: ImageFile4,
      name: "쉐이빙젤 150mL",
      price: "2,900",
    },
    {
      image: ImageFile5,
      name: "애프터쉐이브 60mL",
      price: "3,900",
    },
    {
      image: ImageFile6,
      name: "면도기 핸들+트래블 커버",
      price: "3,500",
    },
    {
      image: ImageFile7,
      name: "면도기 트래블 커버",
      price: "700",
    },
    {
      image: ImageFile8,
      name: "리필면도날 4개입",
      price: "5,900",
    },
  ];

  const [leftValue, setLeftValue] = useState(0);
  const [step, setStep] = useState(-200);

  const moveSlide = () => {
    setLeftValue( (prev) => { return (prev - step); } )
  }

  useEffect( () => {
    if (leftValue >= 0 || leftValue < -500) {
      setStep( prev => -prev );
    }
  }, [leftValue])

  return (
    <PromotionWrapper>
      <UpperContent>
        <TitleContainer>
          <Title>
            <TitleContent>
              WISELY
              <ArrowRight />
            </TitleContent>
          </Title>
          <Explanation>
            독일/미국산 5중 면도날과
            <br />
            프리미엄 면도 용품
          </Explanation>
        </TitleContainer>
        <MainImageWrapper>
          <Image src={ImageFile1} />
        </MainImageWrapper>
      </UpperContent>
      <ItemContainer onClick={moveSlide} leftValue={leftValue}>
        {itemList.map((item, index) => (
          <Item key={index}>
            <ItemImageWrapper>
              <Image src={item.image} />
            </ItemImageWrapper>
            <ItemContent>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>{item.price}원</ItemPrice>
            </ItemContent>
          </Item>
        ))}
      </ItemContainer>
      <hr />
    </PromotionWrapper>
  );
};

export default Promotion;
