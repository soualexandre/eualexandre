import { scroller } from 'react-scroll';

export const scrollTo = (elementId: any) => {
  scroller.scrollTo(elementId, {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  });
};

