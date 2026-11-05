export const translations = (scaleHeavySide?: string, scaleWeight?: number) => {
  // scaleWeight is the weightdifference of what is on the scale (in ones)
  // scaleHeavySide is the side of the scale that is heavier (left or right or equal)
  return {
    sv: {
      alt: {
        scaleFoot: "Vågfot som håller upp vågen",
        scaleCup: "Vågskål som håller upp det som vägs",
        scaleArm:
          scaleHeavySide === "equal"
            ? "Vågbräda som är stadig i mitten"
            : `Vågbräda som är ${scaleWeight} mynt tyngre på ${scaleHeavySide} sida`,
        bag: "Påse med X på sig",
        coin: "Mynt med värde 1",
      },
    },
  };
};
