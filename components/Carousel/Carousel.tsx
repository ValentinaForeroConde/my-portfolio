import React, { useState, useEffect } from "react";
import Image from "next/image";

import styles from "./Carousel.module.scss";

interface CarouselProps {
  images: string[];
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!isMounted) {
    return (
      <div className={styles.carousel}>
        <Image src={images[0]} alt="Initial slide" layout="fill" />
      </div>
    );
  }

  return (
    <div className={styles.carousel}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.carouselImage} ${
            index === currentIndex ? styles.active : ""
          }`}
        >
          <Image
            src={image}
            alt={`Carousel Image ${index + 1}`}
            layout="fill"
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
