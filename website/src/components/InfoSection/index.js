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
import { AboutSvg } from "../../images/svg-1.js";
import { Button } from "@material-ui/core";
import { Link as LinkS } from "react-scroll";
const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkTest,
  description,
  buttonLabel,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkTest={darkTest}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    component={LinkS}
                    to="home"
                    variant="contained"
                    color="primary"
                    smooth={true}
                    duration={1000}
                    exact="true"
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={<AboutSvg />} alt="svg" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
