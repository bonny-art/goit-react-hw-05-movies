import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { ScrollToTopBtnStyled } from './ScrollToTopBtn.styled';

export const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisibility);

  return (
    <>
      {isVisible && (
        <ScrollToTopBtnStyled className="scroll-to-top">
          <div onClick={scrollToTop}>
            <FaArrowUp />
          </div>
        </ScrollToTopBtnStyled>
      )}
    </>
  );
};
