import React, { FC } from "react";
import { ReactComponent as Incresing } from "../Assets/Images/DashBoard/Increasing.svg";
import { ReactComponent as Decresing } from "../Assets/Images/DashBoard/Decreasing.svg";
import { DashBoardCardBO } from "../BOs/DashBoardCardBO";

interface DashBoardCardProps {
  item: DashBoardCardBO;
}

const DashBoardCard: FC<DashBoardCardProps> = ({ item }) => {
  return (
    <div
      style={{
        height: 170,
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0px 1px 10px 0px #d3d3d3",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <p
            style={{
              fontSize: 18,
              marginBottom: 16,
              textAlign: "left",
              color: "#6D6C6F",
            }}
          >
            {item.label}
          </p>
          <p
            style={{
              fontSize: 28,
              color: "#202224",
              fontWeight: "700",
              textAlign: "left",
            }}
          >
            {item.count}
          </p>
        </div>
        <div>
          <item.icon style={{ height: 60, width: 60 }} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginLeft: 24,
          marginBottom: 24,
        }}
      >
        {item.sensex ? <Incresing /> : <Decresing />}
        <p
          style={{
            fontSize: 16,
            marginLeft: 8,
            color: item.sensex === true ? "#00B69B" : "#F93C65",
          }}
        >
          {item.profit}{" "}
          <span style={{ fontSize: 16, color: "#6D6C6F" }}>
            {item.description}
          </span>
        </p>
      </div>
    </div>
  );
};

export default DashBoardCard;
