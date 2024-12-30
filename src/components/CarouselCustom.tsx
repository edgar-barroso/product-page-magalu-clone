import { Carousel } from "@material-tailwind/react";

export function CarouselCustom() {
  return (
    <Carousel
      autoplay
      autoplayDelay={5000}
      loop
      
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-[12px] w-[12px] cursor-pointer rounded-full transition-all ${
                activeIndex === i
                  ? "h-2 w-2 bg-gray-700"
                  : "w-2 h-2 bg-gray-200"
              }`}
            onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      className="md:w-[40%]"
    >

      <img
        src="imagem2.webp"
        alt="image 2"
        className="h-full w-full object-cover object-center md:object-contain"
      />
      <img
        src="imagem3.webp"
        alt="image 3"
        className="h-full w-fullobject-cover object-center md:object-contain"
      />
      <img
        src="imagem4.webp"
        alt="image 4"
        className="h-full w-fullobject-cover object-center md:object-contain"
      />
      <img
        src="imagem5.webp"
        alt="image 5"
        className="h-full w-fullobject-cover object-center md:object-contain"
      />
      <img
        src="imagem6.webp"
        alt="image 6"
        className="h-full w-fullobject-cover object-center md:object-contain"
      />
            <img
        src="imagem1.webp"
        alt="image 1"
        className="h-fullw-object-cover object-center md:object-contain"
      />
    </Carousel>
  );
}
