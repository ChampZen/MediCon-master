import { CarouselProvider, Slider } from "pure-react-carousel";
import React from "react";

import CustomCardSlide from "./CustomCardSlide";
import CustomDotGroup from "./CustomDotGroup";
import Hospital from "../../assets/img/hospital.png"
import Patient from "../../assets/img/patient.jpg"
import Pharma from "../../assets/img/pharma.jpg"
import Admin from "../../assets/img/admin.jpg"


const CardCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1.25}
    totalSlides={4}
    style={{ width: "300px" }}
  >
      <center> 
    <Slider>
      <CustomCardSlide
        image={Hospital}
        index={0}
        header="Hospitals"
        meta="Data Creators"
    />
      <CustomCardSlide
        image={Patient}
        index={1}
        header="Patients"
        meta="Data Owners"
      />
      <CustomCardSlide
        header="Pharma"
        image={Pharma}
        index={2}
        meta="Pharmaceutical Companies"
      />
      <CustomCardSlide
        header="Dev"
        image={Admin}
        index={3}
        meta="Administrators"
      />
    </Slider>
    </center>
    <CustomDotGroup slides={4} />
  </CarouselProvider>
);

export default CardCarousel;
