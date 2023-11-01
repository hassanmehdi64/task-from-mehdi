import React from "react";
import "./style.css";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import Flex from "../Flex/Flex";
const Navbar = () => {
  return (
    <div className="nav-main-container">
      <Container>
        <Flex align="center" justify="space-between">
          <div className="nav-left">
            <Flex align="center" gap={50}>
              <span className="logo">JARIKO</span>
              <div className="nav-left-navigation">
                <ul>
                  <Flex align="center" gap={15}>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Flex align="center">
                        <Link to="/">Shop</Link>
                        <BiChevronDown fill="#fff"/>
                      </Flex>
                    </li>
                    <li>
                      <Flex align="center">
                        <Link to="/">Portfolio</Link>
                        <BiChevronDown fill="#fff"/>
                      </Flex>
                    </li>
                    <li>
                      <Flex align="center">
                        <Link to="/">Blog</Link>
                        <BiChevronDown fill="#fff"/>
                      </Flex>
                    </li>
                    <li>
                      <Flex align="center">
                        <Link to="/">Features</Link>
                        <BiChevronDown fill="#fff"/>
                      </Flex>
                    </li>
                    <li>
                      <Flex align="center">
                        <Link to="/">Short Codes</Link>
                        <BiChevronDown fill="#fff"/>
                      </Flex>
                    </li>
                  </Flex>
                </ul>
              </div>
            </Flex>
          </div>

          <div className="nav-right">
            <Flex align="center" gap={20}>
              <div className="search">
                <AiOutlineSearch fill="#fff"/>
              </div>
              <div className="cart">
                <BsFillCartFill fill="#fff"/> <span className="cart-number">(3)</span>
              </div>
              <div className="user">
                <BiSolidUser fill="#fff"/>
              </div>
              <div className="language-bar">
                <Flex align="center" gap={10}>
                  <Flex align="center">
                    <span>ENG</span>
                    <BiChevronDown fill="#fff"/>
                  </Flex>
                  <Flex align="center">
                    <span>USD</span>
                    <BiChevronDown fill="#fff"/>
                  </Flex>
                </Flex>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Navbar;
