import React from "react";

const Flex = ({
  children,
  className,
  align,
  justify,
  gap,
  direction = "row",
}) => {
  let styles = { display: "flex", flexDirection: direction };
  if (align) {
    styles.alignItems = align;
  }
  if (justify) {
    styles.justifyContent = justify;
  }
  if (gap) {
    styles.gap = `${gap}px`;
  }
  return (
    <div style={styles} className={className}>
      {children}
    </div>
  );
};

export default Flex;
