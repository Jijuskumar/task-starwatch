import React from "react";
import { ProductList } from "../Helpers/Constants";
import { ProductListBO } from "../BOs/ProductListBO";
import WatchImage from "../Assets/Images/Watch.png";

const ProductsTable = () => {
  return (
    <div style={{ display: "flex", padding: 24 }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead
          style={{
            borderRadius: 10,
            backgroundColor: "#F1F4F9",
            height: 48,
          }}
        >
          <tr>
            <th style={{ padding: 12, textAlign: "left", fontSize: 14 }}>
              Product Name
            </th>
            <th style={{ padding: 12, textAlign: "left", fontSize: 14 }}>
              Location
            </th>
            <th style={{ padding: 12, textAlign: "left", fontSize: 14 }}>
              Date - Time
            </th>
            <th style={{ padding: 12, textAlign: "left", fontSize: 14 }}>
              Piece
            </th>
            <th style={{ padding: 12, textAlign: "left", fontSize: 14 }}>
              Amount
            </th>
            <th style={{ padding: 12, textAlign: "center", fontSize: 14 }}>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {ProductList.map((product: ProductListBO, index: number) => {
            return (
              <tr
                key={product.id}
                style={{
                  height: 81,
                  borderBottom:
                    index == ProductList.length - 1
                      ? "none"
                      : "1px solid #D5D5D5",
                  backgroundColor: index % 2 == 0 ? "#fff" : "#F1F4F9",
                }}
              >
                <td
                  style={{
                    padding: 12,
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={WatchImage}
                    alt="Apple Watch"
                    style={{ height: 36, width: 36, marginRight: 8 }}
                  />
                  <p
                    style={{
                      color: "#202224",
                      fontSize: 14,
                      marginTop: 8
                    }}
                  >
                    {product.productName}
                  </p>
                </td>
                <td style={{ padding: 12, textAlign: "left", fontSize: 14 }}>
                  <p
                    style={{
                      color: "#202224",
                      fontSize: 14,
                    }}
                  >
                    {product.location}
                  </p>
                </td>
                <td style={{ padding: 12, textAlign: "left", fontSize: 14 }}>
                  <p
                    style={{
                      color: "#202224",
                      fontSize: 14,
                    }}
                  >
                    {product.dateTime}
                  </p>
                </td>
                <td style={{ padding: 12, textAlign: "left", fontSize: 14 }}>
                  <p
                    style={{
                      color: "#202224",
                      fontSize: 14,
                    }}
                  >
                    {product.piece}
                  </p>
                </td>
                <td style={{ padding: 12, textAlign: "left", fontSize: 14 }}>
                  <p
                    style={{
                      color: "#202224",
                      fontSize: 14,
                    }}
                  >
                    {product.amount}
                  </p>
                </td>
                <td
                  style={{
                    padding: 12,
                    fontSize: 14,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "center",
                      height: 27,
                      width: 93,
                      display: "flex",
                      borderRadius: 14,
                      backgroundColor: "#00B69B",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "#fff",
                        fontSize: 14,
                      }}
                    >
                      {product.status}
                    </span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
