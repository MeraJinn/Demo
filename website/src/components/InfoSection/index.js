import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  Img,
  ImgWrap,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
} from "./InfoElements";
import { Button } from "react-scroll";

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>topline</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>subtitle</Subtitle>
                <BtnWrap>
                  <Button to="home" />
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
