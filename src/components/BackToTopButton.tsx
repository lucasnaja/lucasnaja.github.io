import { useEffect, useState } from 'react';
import styled from 'styled-components';

const BackToTop = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  right: 25px;
  bottom: 50px;
  cursor: pointer;
`;

const BackToTopButton: React.FC = () => {
  const [show, setShow] = useState(false);
  const [scrollTop, setScrollTop] = useState(
    window.pageYOffset || document.documentElement.scrollTop
  );

  useEffect(() => {
    setShow(scrollTop >= 30);
  }, [scrollTop]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const newScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      setScrollTop(newScrollTop);
    });
  }, []);

  const handleClick = () => {
    const introductionElement: any = document.querySelector('#introduction');

    window.scroll({
      top: introductionElement?.offsetParent?.offsetTop,
      behavior: 'smooth',
    });
  };

  return show ? (
    <BackToTop onClick={handleClick}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 16 16"
        className="bi bi-arrow-up-circle-fill text-danger border-0"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-10.646.354a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354z"
        />
      </svg>
    </BackToTop>
  ) : null;
};

export default BackToTopButton;
