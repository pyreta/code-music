import React from "react";
import styled from "styled-components";
import arrow from "./images/arrow1.png";
import { MOBILE_SIZE } from "../../constants";

const Arrow = styled.img`
  position: absolute;
  width: 266px;
  transform: rotate(346deg);
  right: -134px;
  bottom: -87px;
  @media (max-width: ${MOBILE_SIZE}px) {
    display: none;
  }
  @media (max-width: 1137px) {
    right: -57px;
  }
`;

const Text1 = styled.div`
  font-size: 61px;
  font-weight: 700;
  color: #fff;
  line-height: 70px;
  margin: 0px;
  font-family: "Raleway", sans-serif;
  @media (max-width: ${MOBILE_SIZE}px) {
    line-height: 44px;
    font-size: 41px;
  }
`;

const Text2 = styled(Text1)`
  box-sizing: border-box;
  font-size: 118px;
  color: orange;
  font-weight: 900;
  @media (max-width: ${MOBILE_SIZE}px) {
    font-size: 79px;
  }
`;

const Text3 = styled(Text1)`
  font-size: 39.7px;
  line-height: 52px;
  @media (max-width: ${MOBILE_SIZE}px) {
    font-size: 26px;
    line-height: 36px;
  }
`;

const Text4 = styled(Text1)`
  font-size: 15px;
  line-height: 52px;
  font-size: 18px;
  line-height: 23px;
  max-width: 462px;
  text-align: left;
  font-weight: 200;
  @media (max-width: ${MOBILE_SIZE}px) {
    font-size: 15px;
    line-height: 16px;
    text-align: center;
    margin-top: 15px;
  }
`;

const TextWrapper = styled.div`
  text-align: center;
  padding: 40px;
  border-radius: 6px;
  box-sizing: border-box;
  position: relative;
  margin-top: -40px;
  @media (max-width: ${MOBILE_SIZE}px) {
    padding: 20px;
    margin: 0 10px;
  }
`;

const Red = styled.span`
  color: #ff5722;
  font-weight: 800;
`;

const Orange = styled.span`
  color: orange;
  font-weight: 800;
`;

const Text = props => {
  return (
    <TextWrapper>
      <Text1>SEE IF YOU LIKE</Text1>
      <Text2>CODING</Text2>
      <Text3>
        YOU MAY BE <Red>SURPRISED</Red>
      </Text3>
      <Text4>
        Understanding Code through music is the most fun and inuitive way to
        learn it. Get your free course now and discover that you actually{" "}
        <Orange>LOVE to CODE!</Orange>
      </Text4>
      <Arrow src={arrow} />
    </TextWrapper>
  );
};

export default Text;
