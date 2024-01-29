import { scrollType,scrollElementType } from "../Types/types";

export const scroll: scrollType = (direction, ref) => {
  const scrollEle: scrollElementType = ref.current;
  if (scrollEle) {
    const scrollDirection = direction === 'left' ? -310 : 310;
    scrollEle.scrollTo({
      left: scrollEle.scrollLeft + scrollDirection,
      behavior: 'smooth',
    });
  }
};
