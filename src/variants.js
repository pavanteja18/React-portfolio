export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? -120 : direction === "down" ? 120 : 0,
      x: direction === "left" ? -120 : direction === "right" ? 120 : 0,
      opacity: 0,
      filter: "blur(5px)",
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
