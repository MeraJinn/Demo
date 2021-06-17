import React from "react";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={icon} />
          <ServicesH2>Service 1</ServicesH2>
          <SerivicesP>A desscription for above service</SerivicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2>Service 2</ServicesH2>
          <SerivicesP>A desscription for above service</SerivicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon2} />
          <ServicesH2>Service 3</ServicesH2>
          <SerivicesP>A desscription for above service</SerivicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
