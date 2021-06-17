import React from "react";
import {
  ServicesH2,
  ServicesCard,
  ServicesContainer,
  ServicesIcon,
  ServicesH1,
  ServicesWrapper,
  ServicesP,
} from "./servicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>Service 1</ServicesH2>
          <ServicesP>A desscription for above service</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>Service 2</ServicesH2>
          <ServicesP>A desscription for above service</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>Service 3</ServicesH2>
          <ServicesP>A desscription for above service</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
