import { Rating } from "@mui/material";
import { FC, useState } from "react";
import { ReactComponent as ForeWard } from "../../Assets/Images/Front.svg";
import { ReactComponent as BackWard } from "../../Assets/Images/backward.svg";
import { ProductBO } from "../../BOs/ProductBO";

interface ProductCardProps {
  item: ProductBO;
}

const ProductCard: FC<ProductCardProps> = ({ item }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const nextImage = () => {
    if (activeIndex < item.images.length - 1) {
      const index = activeIndex + 1;
      setActiveIndex(index);
    } else {
      setActiveIndex(0);
    }
  };

  const previousImage = () => {
    if (activeIndex > 0) {
      const index = activeIndex - 1;
      setActiveIndex(index);
    } else {
      setActiveIndex(item.images.length - 1);
    }
  };

  return (
    <div
      style={{
        height: 497,
        backgroundColor: "#fff",
        alignItems: "center",
        borderRadius: 15,
        display: "flex",
        position: "relative",
        flexDirection: "column",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 24,
          top: 150,
          height: 41,
          width: 41,
          borderRadius: 22,
          display: "flex",
          backgroundColor: "#F0F4FB",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={nextImage}
      >
        <ForeWard />
      </div>
      <div
        onClick={previousImage}
        style={{
          position: "absolute",
          left: 24,
          top: 150,
          height: 41,
          width: 41,
          borderRadius: 22,
          display: "flex",
          backgroundColor: "#F0F4FB",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <BackWard />
      </div>
      <div
        style={{
          height: 328,
          width: "100%",
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <img
          src={item.images[activeIndex]}
          style={{ width: "80%", paddingLeft: "10%" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            paddingLeft: 24,
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <p style={{ color: "#202224", fontSize: 18, fontWeight: "700" }}>
            {item.name}
          </p>
          <p
            style={{
              color: "#4880FF",
              fontSize: 16,
              fontWeight: "700",
              marginTop: 8,
              marginBottom: 8,
            }}
          >
            ${item.price}
          </p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Rating name="read-only" value={item.rating} readOnly />
            <p
              style={{
                color: "#999999",
                fontSize: 18,
                fontWeight: "700",
                marginLeft: 5,
              }}
            >
              ({item.totalRating})
            </p>
          </div>
          <div
            style={{
              width: 126,
              height: 38,
              backgroundColor: "#E2EAF8",
              marginTop: 20,
              borderRadius: 8,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <p
              style={{
                color: "#202224",
                fontSize: 14,
                fontWeight: "700",
              }}
            >
              Edit Product
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
