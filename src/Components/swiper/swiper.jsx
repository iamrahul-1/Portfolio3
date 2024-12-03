// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

import img1 from "../../assets/gradient.png";
import img2 from "../../assets/sb.png";
import img3 from "../../assets/robo.png";
import img4 from "../../assets/shopping.png";
import img5 from "../../assets/startup.png";
// import required modules
import { EffectCoverflow } from "swiper/modules";
import { Link } from "react-router";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
        className="mySwiper md:my-11 my-1"
      >
        <SwiperSlide>
          <Link to={"https://iamrahul-1.github.io/backgroundGenerator/"}>
            <img src={img1} className="mx-auto" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} className="mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} className="mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} className="mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} className="mx-auto" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
