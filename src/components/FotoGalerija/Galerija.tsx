import { useState } from "react";
import { PhCaretLeft } from "../icons/PhCaretLeft";
import { PhCaretRight } from "../icons/PhCaretRight";
import "./Galerija.css";

const imagesArr = [
  {
    src: "/foto-galerija/image1.jpeg",
    alt: "image1",
  },
  {
    src: "/foto-galerija/image2.jpeg",
    alt: "image2",
  },
  {
    src: "/foto-galerija/image3.jpeg",
    alt: "image3",
  },
  {
    src: "/foto-galerija/image4.jpeg",
    alt: "image4",
  },
  {
    src: "/foto-galerija/image5.jpeg",
    alt: "image5",
  },
];

const Galerija = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [slidingRight, setSlidingRight] = useState<boolean>(false);
  const [slidingLeft, setSlidingLeft] = useState<boolean>(false);
  const [sliding, setSliding] = useState<boolean>(false);

  const slideLeftHandler = () => {
    setSlidingRight(true);
    setSliding(true);

    setTimeout(() => {
      if (currentImageIndex === 0) {
        setCurrentImageIndex(imagesArr.length - 1);
      } else {
        setCurrentImageIndex((prevValue) => prevValue - 1);
      }

      setSlidingRight(false);
      setSliding(false);
    }, 500);
  };

  const slideRightHandler = () => {
    setSlidingLeft(true);
    setSliding(true);

    setTimeout(() => {
      if (currentImageIndex === imagesArr.length - 1) {
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex((prevValue) => prevValue + 1);
      }

      setSlidingLeft(false);
      setSliding(false);
    }, 500);
  };

  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-[#C7C7C7]">
      <div className="container flex flex-col gap-6 justify-center items-center my-12">
        <div className="relative w-[628px] h-[803px] overflow-hidden">
          <div
            className={`flex gap-2 justify-center w-[628px] ${
              slidingRight ? "slide-right" : ""
            } ${slidingLeft ? "slide-left" : ""}`}
          >
            <img
              src={
                imagesArr[
                  currentImageIndex - 1 < 0
                    ? imagesArr.length - 1
                    : currentImageIndex - 1
                ].src
              }
              alt={
                imagesArr[
                  currentImageIndex - 1 < 0
                    ? imagesArr.length - 1
                    : currentImageIndex - 1
                ].alt
              }
              className="w-[628px] h-[803px] object-cover rounded-lg shrink-0"
            />
            <img
              src={imagesArr[currentImageIndex].src}
              alt={imagesArr[currentImageIndex].alt}
              className="w-[628px] h-[803px] object-cover rounded-lg shrink-0"
            />
            <img
              src={
                imagesArr[
                  currentImageIndex + 1 > imagesArr.length - 1
                    ? 0
                    : currentImageIndex + 1
                ].src
              }
              alt={
                imagesArr[
                  currentImageIndex + 1 > imagesArr.length - 1
                    ? 0
                    : currentImageIndex + 1
                ].alt
              }
              className="w-[628px] h-[803px] object-cover rounded-lg shrink-0"
            />
          </div>
          <button
            onClick={slideLeftHandler}
            disabled={sliding}
            className="absolute h-[40px] w-[40px] flex justify-center items-center bg-[#F4BF03] z-10 top-1/2 left-[35px] -translate-y-1/2 rounded-full hover:scale-105 transition duration-300"
          >
            <PhCaretLeft className="h-5 w-5" />
          </button>
          <button
            onClick={slideRightHandler}
            disabled={sliding}
            className="absolute h-[40px] w-[40px] flex justify-center items-center bg-[#F4BF03] z-10 top-1/2 right-[35px] -translate-y-1/2 rounded-full hover:scale-105 transition duration-300"
          >
            <PhCaretRight className="h-5 w-5" />
          </button>
        </div>
        <div className="grid grid-cols-5 gap-[17px] w-[628px]">
          {imagesArr.map((image, i) => (
            <button
              key={i}
              className={`w-full h-[130px] overflow-hidden rounded-[4px] outline-[5px] outline hover:scale-105 transition duration-300 ${
                currentImageIndex === i
                  ? "outline-[#F4BF03]"
                  : "outline-transparent"
              }`}
              onClick={() => handleImageChange(i)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galerija;
