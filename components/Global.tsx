export const MAX_NAV_HEIGHT = 90;
export const MIN_NAV_HEIGHT = 50;
export const Colors = {
  black: "#000",
  teal: "#1fc8a9",
  white: "#fff",
  _333: "#333",
  _111: "#111",
  _555: "#555",
};
export const getScrolls = () => {
  const viewHeight = window.innerHeight;
  const viewWidth = window.innerWidth;
  const totalHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const percent = winScroll / totalHeight;
  return { viewWidth, viewHeight, totalHeight, winScroll, percent };
};
export const scrollToNext = () => {
  window.scrollTo({
    top:
      window.innerHeight -
      (window.innerWidth < 600 ? MIN_NAV_HEIGHT : MAX_NAV_HEIGHT),
    behavior: "smooth",
  });
};
