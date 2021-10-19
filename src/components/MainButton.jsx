import React from "react";
import styled from "styled-components";
const MainButton = ({ borderColor, background, text, textColor }) => {
  return (
    <>
      <MainButtonWrapper
        borderColor={borderColor}
        textColor={textColor}
        background={background}
      >
        {text}
      </MainButtonWrapper>
    </>
  );
};

export default MainButton;

const MainButtonWrapper = styled.button`
  width: 100%;
  height: 100%;
  border: 2px solid ${(props) => props.borderColor};
  background: ${(props) =>
    props.background ? props.background : "transparent"};
  color: ${(props) => props.textColor};
  cursor: pointer;
  font-size: 17px;
  font-family: AvenirMedium;
  box-shadow: 0px 10px 20px #0000004a;
  border-radius: 26px 0px 24px 0px;
  padding-left: 30px;
  padding-right: 30px;
`;
