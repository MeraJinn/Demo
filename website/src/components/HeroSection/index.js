import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  HeroContent,
} from "./HeroElements";
import video from "../../video/video.mp4";
import { Button } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

const HeroElements = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="Home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>MeraJinn.</HeroH1>
        <HeroP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          impedit maiores neque veritatis. Accusantium, asperiores labore. Esse
          iste facere saepe.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            variant="contained"
            onClick={onHover}
            endIcon={hover ? <ArrowBack /> : <ArrowForward />}
            color="primary"
          >
            Get Started
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroElements;
