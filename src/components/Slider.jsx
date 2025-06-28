import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function Slider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider rounded overflow-hidden">
      <div className="keen-slider__slide number-slide1">
        <img
          src="/src/assets/slider1.jpg"
          alt=""
          className="w-full h-[300px] object-cover"
        />
      </div>
      <div className="keen-slider__slide number-slide2">
        <img
          src="/src/assets/slider2.jpg"
          alt=""
          className="w-full h-[300px] object-cover"
        />
      </div>
      <div className="keen-slider__slide number-slide3">
        <img
          src="/src/assets/slider3.jpg"
          alt=""
          className="w-full h-[300px] object-cover"
        />
      </div>
    </div>
  );
}


