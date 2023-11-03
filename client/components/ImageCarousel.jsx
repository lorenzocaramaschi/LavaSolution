import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ images }) => {
  return (
    <Carousel className="mt-2 w-[50%] m-auto">
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image.image}
            width="100px"
            height="100px"
            alt={`Image ${index}`}
          />
          <p className="legend">{image.name}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
