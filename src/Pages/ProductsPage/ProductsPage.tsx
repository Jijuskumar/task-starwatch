import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ReactComponent as ForeWard } from "../../Assets/Images/Front.svg";
import BannerImage from "../../Assets/Images/Image.png";
import { ReactComponent as BackWard } from "../../Assets/Images/backward.svg";
import FrameComponent from "../../Components/SideNav/FrameComponent";
import { Grid } from "@mui/material";
import { CaroselItemBO } from "../../BOs/CaroselItemBO";
import { ProductBO } from "../../BOs/ProductBO";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { CaroselData } from "../../Helpers/Constants";
import { getProducts } from "../../Services/ApiServices";

const ProductsPage = () => {
  const [products, setProducts] = useState<ProductBO[]>([]);
  const [carosel, setCarosel] = useState<CaroselItemBO[]>([]);

  useEffect(() => {
    init();
    setCarosel(CaroselData);
  }, []);

  const init = async () => {
    const response = await getProducts();

    if (products !== undefined) {
      setProducts(response!);
    }
  };

  return (
    <FrameComponent active="Products">
      <div
        style={{
          display: "flex",
          flex: 1,
          padding: 30,
          flexDirection: "column",
          alignItems: "flex-start",
          overflow: "auto",
        }}
      >
        <h3 style={{ fontSize: 32, color: "#202224" }}>Products</h3>
        <div
          style={{
            height: 346,
            width: "100%",
            marginTop: 29,
            borderRadius: 20,
          }}
        >
          <Carousel
            showStatus={false}
            showThumbs={false}
            transitionTime={1000}
            renderThumbs={() => [<></>, <></>]}
            // showArrows={false}
            renderIndicator={() => <></>}
            renderArrowPrev={(clickHandler, hasNext, label) => (
              <div
                className="hover"
                style={{
                  height: 46,
                  width: 46,
                  backgroundColor: "#F4F4F4",
                  position: "absolute",
                  left: 20,
                  top: 150,
                  zIndex: 10,
                  borderRadius: 23,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={clickHandler}
              >
                <BackWard style={{ height: 12 }} />
              </div>
            )}
            renderArrowNext={(clickHandler, hasNext, label) => (
              <div
                className="hover"
                style={{
                  height: 46,
                  width: 46,
                  backgroundColor: "#F4F4F4",
                  position: "absolute",
                  right: 20,
                  top: 150,
                  zIndex: 10,
                  borderRadius: 23,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={clickHandler}
              >
                <ForeWard style={{ height: 12 }} />
              </div>
            )}
          >
            {carosel.map((item: CaroselItemBO) => {
              return (
                <div
                  key={item.id}
                  style={{
                    width: "100%",
                    height: 346,
                    borderRadius: 20,
                    overflow: "hidden",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#4880FF",
                  }}
                >
                  <img
                    src={BannerImage}
                    style={{
                      width: "120%",
                      height: "140%",
                      top: 0,
                      left: 0,
                      marginTop: "-5%",
                      marginLeft: "-10%",
                      position: "absolute",
                    }}
                  />
                  <div
                    style={{
                      height: 346,
                      width: "70%",
                      zIndex: 55,
                      display: "flex",
                      flexDirection: "column",
                      paddingTop: 50,
                      alignItems: "flex-start",
                    }}
                  >
                    <p style={{ fontSize: 16, color: "#fff" }}>{item.date}</p>
                    <p
                      style={{
                        fontSize: 37,
                        color: "#fff",
                        fontWeight: "800",
                        maxWidth: 450,
                        textAlign: "left",
                        marginTop: 8,
                      }}
                    >
                      {item.description}
                    </p>
                    <p style={{ fontSize: 16, color: "#fff", marginTop: 8 }}>
                      {item.label}
                    </p>
                    <div
                      className="hover"
                      style={{
                        marginTop: 30,
                        height: 44,
                        width: 156,
                        backgroundColor: "#FF8743",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 12,
                      }}
                    >
                      <p
                        style={{
                          fontSize: 14,
                          color: "#fff",
                          fontWeight: "600",
                        }}
                      >
                        Get Started
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div
          style={{
            marginTop: 30,
            width: "100%",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 8, lg: 12, xl: 12 }}
          >
            {products.map((item) => {
              return (
                <Grid item xs={2} sm={8} md={4} lg={3} xl={3}>
                  <ProductCard item={item} key={item.id} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </FrameComponent>
  );
};

export default ProductsPage;
