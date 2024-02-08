import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CardCol from "./CardCol";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


const SliderBox = () => {
  const SlideRef = useRef();
  const sliderRef = useRef<any>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollBy = (direction) => {
    const cardWidth = sliderRef.current.firstChild.clientWidth;
    const containerWidth = sliderRef.current.clientWidth;
    const maxScroll = sliderRef.current.scrollWidth - containerWidth;

    let newPosition;

    if (direction === "right") {
      newPosition = Math.min(scrollPosition + containerWidth, maxScroll);
    } else {
      newPosition = Math.max(scrollPosition - containerWidth, 0);
    }

    setScrollPosition(newPosition);
    sliderRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
  };

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  }

  return (
    <div className="slider-container">
      <div className="greeting-fiter-container flex justify-between">
        <div className="greet-bx">
          <h6>
            <b>Customer Review</b>
          </h6>
          <div className="txt-grt">Here are some reviews about your service</div>
        </div>

        <div className="contoller flex">

          <div className="each-ctrl" onClick={handlePrev}>
            <FaChevronLeft />
          </div>
          <div className="each-ctrl" onClick={handleNext}>

            <div className="each-ctrl" onClick={() => scrollBy("left")}>
              <FaChevronLeft />
            </div>
            <div className="each-ctrl" onClick={() => scrollBy("right")}>

              <FaChevronRight />
            </div>
          </div>
        </div>

        <div className="slider-contar">
          <div className="card-row-box-slide flex justify-center">
            <Swiper
              spaceBetween={50}
              slidesPerView={2.5}
              ref={SlideRef}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                390: {
                  slidesPerView: 1,
                },
                502: {
                  slidesPerView: 1,
                },
                802: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <CardCol />
              </SwiperSlide>
              <SwiperSlide>
                <CardCol />
              </SwiperSlide>
              <SwiperSlide>
                <CardCol />
              </SwiperSlide>
            </Swiper>
            {/* <CardCol data={1} />

      <div
        className="slider-contar"
        ref={sliderRef}
        style={{ overflowX: "auto", scrollBehavior: "smooth", whiteSpace: "nowrap" }}
      >
        <div className="card-row-box-slide flex" style={{ transform: `translateX(-${scrollPosition}px)` }}>
          {/* Add more CardCol components here */}
            <CardCol data={1} />
            <CardCol />

            <CardCol />
            <CardCol />
            <CardCol />
            <CardCol />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderBox;
