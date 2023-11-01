import React from "react";
import "./style.css";
import Flex from "../Flex/Flex";
import Text from "../Text/Text";
const Product = ({ product }) => {
  return (
    <Flex
      className="product-container"
      direction="column"
      align="center"
      justify="center"
      marginBottom="30px"
    >
      <img src={product.image} alt={product.title} className="mb-20" />
      <Text font={20} color="#000" className="product-title" align="center">
        {product.title}
      </Text>
      <Text
        font={20}
        weight={700}
        className="mb-20"
      >{`$ ${product.price}`}</Text>
      <button>ADD TO CART</button>
    </Flex>
  );
};

export default Product;
