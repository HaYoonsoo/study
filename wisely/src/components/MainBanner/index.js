import React, { useEffect, useState } from "react";
import {
  BannerWrapper,
  BannerContainer,
  BannerItem,
  Banner,
  ButtonContainer,
  Button,
  ButtonLeft,
  ButtonRight,
  ImageSequence,
} from "./MainBannerComponents";

import ImageFile1 from "../../assets/images/1.jpg";
import ImageFile2 from "../../assets/images/2.jpg";
import ImageFile3 from "../../assets/images/3.jpg";

const MainBanner = () => {
  const interval = 4000; //다음 이미지로 자동으로 넘어가는 시간
  const [hover, setHover] = useState(false);
  const [image, setImage] = useState(0);

  useEffect(() => {
    setInterval(() => showNextImage(), interval);
  }, []);

  function showNextImage() {
    setImage((prev) => (prev + 1 > 2 ? 0 : prev + 1));
  }

  function showPreviousImage() {
    setImage((prev) => (prev - 1 < 0 ? 2 : prev - 1));
  }

  return (
    <BannerWrapper>
      <BannerContainer>
        <BannerItem image={image} bannerId="0">
          <Banner src={ImageFile1} />
        </BannerItem>
        <BannerItem image={image} bannerId="1">
          <Banner src={ImageFile2} />
        </BannerItem>
        <BannerItem image={image} bannerId="2">
          <Banner src={ImageFile3} />
        </BannerItem>
      </BannerContainer>
      <ButtonContainer>
        <Button onClick={showPreviousImage}>
          <ButtonLeft />
        </Button>
        <Button onClick={showNextImage}>
          <ButtonRight />
        </Button>
      </ButtonContainer>
      <ImageSequence>{image + 1} / 3</ImageSequence>
    </BannerWrapper>
  );
};

export default MainBanner;
