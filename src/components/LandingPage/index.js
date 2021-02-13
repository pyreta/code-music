import React from "react";
import styled from "styled-components";
import background_image from "./images/code_laptop.jpg";
import SignupForm from "./SignupForm";
import Text from "./Text";
import { MOBILE_SIZE } from "../../constants";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  overflow: hidden;
  @media (max-width: ${MOBILE_SIZE}px) {
    display: block;
  }
`;

const BackgroundImage = styled.div`
  background-image: url(${background_image});
  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: absolute;
  opacity: 0.2;
  z-index: -1;
  top: 0;
  overflow: hidden;
`;

const Left = styled.div`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  display: flex;
  margin-bottom: 200px;
  padding-right: 100px;
  @media (max-width: ${MOBILE_SIZE}px) {
    display: none;
  }
  @media (max-width: 1137px) {
    padding-right: 0px;
  }
`;

const Right = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  margin-bottom: 200px;
  padding-right: 100px;
  justify-content: flex-start;
  padding-left: 100px;
  @media (max-width: ${MOBILE_SIZE}px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  display: none;
  @media (max-width: ${MOBILE_SIZE}px) {
    display: flex;
    justify-content: center;
  }
`;

const InputForm = props => {
  return (
    <Wrapper>
      <Left>
        <Text />
      </Left>
      <Right>
        <SignupForm {...props} />
      </Right>
      <MobileWrapper>
        <Text />
      </MobileWrapper>
      <MobileWrapper>
        <SignupForm {...props} />
      </MobileWrapper>
      <BackgroundImage />
    </Wrapper>
  );
};

export default InputForm;
