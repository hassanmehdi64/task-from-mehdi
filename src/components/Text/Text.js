import React from "react";

const Text = ({ children, className, font, weight, color,align }) => {
  let styles = {};
  if (font) {
    styles.fontSize = `${font}px`;
  }
  if (weight) {
    styles.fontWeight = weight;
  }
  if (color) {
    styles.color = color;
  }
  if(align){
    styles.textAlign = align
  }
  return (
    <p className={className} style={styles}>
      {children}
    </p>
  );
};

export default Text;
