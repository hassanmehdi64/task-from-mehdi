import React, { useEffect } from "react";
import "./style.css";
import Text from "../../components/Text/Text";
import Flex from "../../components/Flex/Flex";
import { useSelector, useDispatch } from "react-redux";
import { BsArrowRight } from "react-icons/bs";
import { getProducts } from "../../store/actions/productActions";
import PageLoader from "../../components/PageLoader/PageLoader";
import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts(3));
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <>
          <div className="home-main-container">
            <Flex
              direction="column"
              justify="center"
              align="flex-start"
              className="home-inner-container"
            >
              <Text color="#fff" font={20} className="mb-10">
                Fashion Lookbook 2015
              </Text>
              <Text color="#fff" font={40} weight={500} className="mb-50">
                HAPSTER FASHION
                <br />
                TREND 2015
              </Text>
              <button>Shop Now</button>
            </Flex>
            <img src="/man.png" alt="" className="top-beard-image"/>
          </div>

          <div className="home-lower-grid">
            <div className="lower-grid-background ciggerate-container">
              <div className="content-with-bg-inner"></div>
            </div>
            <Flex
              className="lower-grid-content"
              align="center"
              justify="center"
            >
              <div className="centered-maxwidth">
                <Text
                  className="cigerrate-text mb-40"
                  color="#000"
                  font={40}
                  weight={700}
                >
                  MEN WITH <br /> CIGARETTE PIPE
                </Text>
                <Text
                  className="cigarette-text-desc mb-40"
                  align="justify"
                  color="#757575"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  nesciunt inventore, ullam corporis, eum sapiente eveniet hic
                  dolorum ipsa
                </Text>
                <button>
                  <Flex align="center" gap={10}>
                    <span>View Collection</span>
                    <BsArrowRight />
                  </Flex>
                </button>
              </div>
            </Flex>

            <div className="lower-grid-content">
              {products ? (
                <Flex
                  justify="space-between"
                  className="home-product-section"
                  align="center"
                  marginBottom="52px"
                >
                  {products.map((product, index) => (
                    <Product product={product} key={index} />
                  ))}
                </Flex>
              ) : (
                <Text>{error}</Text>
              )}
            </div>
            <div className="lower-grid-background content-with-bg">
              <Flex
                className="content-with-bg-inner"
                direction="column"
                align="center"
                justify="center"
              >
                <Text font={20} weight={700} color="#fff" className="mb-10">
                  MEN'S CLOTHING
                </Text>
                <Text
                  font={40}
                  weight={700}
                  color="#fff"
                  align="center"
                  className="mb-20"
                >
                  HOT TREND IN <br /> THIS WEEK
                </Text>
                <button>SHOP NOW</button>
              </Flex>
            </div>
            <div className="lower-grid-background content-with-bg">
              <Flex
                className="content-with-bg-inner"
                direction="column"
                align="center"
                justify="center"
              >
                <Text font={20} weight={700} color="#fff" className="mb-10">
                  MEN'S CLOTHING
                </Text>
                <Text
                  font={40}
                  weight={700}
                  color="#fff"
                  align="center"
                  className="mb-20"
                >
                  HOT TREND IN <br /> THIS WEEK
                </Text>
                <button>SHOP NOW</button>
              </Flex>
            </div>
            <div className="lower-grid-content">
              <Flex align='center' justify='center' className='single-prod-flex'>
              {products ? (
                <Flex
                  justify="space-between"
                  className="home-product-section"
                  align="center"
                >
                    <Product product={products[0]}/>
                </Flex>
              ) : (
                <Text>{error}</Text>
              )}
              </Flex>
            </div>
          </div>
        </>
      )}

      <Footer/>
    </>
  );
};

export default Home;
