import React from "react";
import { HeroContainer, HeroBg, VideoBg } from "./HeroElements";
import video from "../../video/video.mp4";

const HeroElements = () => {
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
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroElements;
