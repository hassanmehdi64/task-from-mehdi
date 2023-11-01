import React from "react";
import Text from "../Text/Text";
import Flex from "../Flex/Flex";
import { SlSocialLinkedin } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialSpotify } from "react-icons/sl";
import "./style.css";
const Footer = () => {
  return (
    <footer>
      <Flex
        align="center"
        justify="center"
        direction="column"
        className="footer-inner"
        gap={30}
      >
        <Text align="center" color='#fff' font={40} weight={700}>JAKIRO</Text>
        <Flex align="center" justify="center" gap={20}>
          <li>Site Map</li>
          <li>Search</li>
          <li>Terms</li>
          <li>Career</li>
          <li>Orders and Returns</li>
          <li>About</li>
          <li>Contact</li>
        </Flex>
        <Flex align="center" justify="center" gap={20}>
          <SlSocialLinkedin fill="#fff" />
          <TiSocialYoutube fill="#fff" />
          <TiSocialPinterestCircular fill="#fff" />
          <SlSocialFacebook fill="#fff" />
          <SlSocialSpotify fill="#fff" />
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
