import { Grid } from "@mui/material";
import { ReactComponent as DownArrow } from "../../Assets/Images/DownArrow.svg";
import { DashBoardCardBO } from "../../BOs/DashBoardCardBO";
import DashBoardCard from "../../Components/DashBoardCard";
import FrameComponent from "../../Components/SideNav/FrameComponent";
import { DashBoardCardData } from "../../Helpers/Constants";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ProductsTable from "../../Components/ProductsTable";

const HomePage = () => {
  const GraphData = [
    { name: "5k", sales: 20, profit: 20 },
    { name: "10k", sales: 70, profit: 32 },
    { name: "15k", sales: 40, profit: 27 },
    { name: "20k", sales: 30, profit: 29 },
    { name: "25k", sales: 70, profit: 55 },
    { name: "30k", sales: 43, profit: 43 },
    { name: "35k", sales: 32, profit: 70 },
    { name: "40k", sales: 58, profit: 40 },
    { name: "45k", sales: 30, profit: 67 },
    { name: "50k", sales: 60, profit: 38 },
    { name: "55k", sales: 70, profit: 57 },
    { name: "60k", sales: 18, profit: 18 },
  ];

  const LineChartData = [
    { name: "5k", value: 20 },
    { name: "10k", value: 30 },
    { name: "15k", value: 40 },
    { name: "20k", value: 64.36 },
    { name: "25k", value: 50 },
    { name: "30k", value: 40 },
    { name: "35k", value: 30 },
    { name: "40k", value: 60 },
    { name: "45k", value: 50 },
    { name: "50k", value: 40 },
    { name: "55k", value: 50 },
    { name: "60k", value: 60 },
  ];

  const data = {
    productName: "Apple Watch",
    location: "6096 Marjolaine Landing",
    dateTime: "12.09.2019 - 12:53 PM",
    piece: 423,
    amount: "$34,295",
    status: "Delivered",
  };

  return (
    <FrameComponent active="DashBoard">
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
        <h3 style={{ fontSize: 32, color: "#202224" }}>DashBoard</h3>
        <div style={{ marginTop: 20, width: "100%" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12, lg: 12, xl: 12 }}
          >
            {DashBoardCardData.map((item: DashBoardCardBO) => {
              return (
                <Grid item xs={2} sm={4} md={6} lg={3} xl={3} key={item.label}>
                  <DashBoardCard item={item} />
                </Grid>
              );
            })}
          </Grid>
        </div>

        <div
          style={{
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: 15,
            marginTop: 25,
            paddingTop: 30,
            marginBottom: 10,
            paddingBottom: 25,
            boxShadow: "0px 1px 10px 0px #d3d3d3",
          }}
        >
          <div
            style={{
              marginBottom: 31,
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: 24,
                textAlign: "left",
                marginLeft: 32,
                marginBottom: 20,
                fontWeight: "700",
              }}
            >
              Sales Details
            </p>
            <div
              style={{
                width: 108,
                height: 28,
                border: "1px solid #D5D5D5",
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginRight: 24,
              }}
            >
              <p style={{ color: "#A8A8AD", fontSize: 12 }}>October</p>
              <DownArrow />
            </div>
          </div>

          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              width={500}
              height={300}
              data={LineChartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[20, 100]} />
              <Line
                dataKey="value"
                stroke="#8884d8"
                color="red"
                dot={{ r: 6, color: "red" }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div
          style={{
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: 15,
            marginTop: 20,
            paddingTop: 30,
            boxShadow: "0px 1px 10px 0px #d3d3d3",
          }}
        >
          <div
            style={{
              marginBottom: 31,
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: 24,
                textAlign: "left",
                marginLeft: 32,
                marginBottom: 20,
                fontWeight: "700",
              }}
            >
              Revenue
            </p>
            <div
              style={{
                width: 108,
                height: 28,
                border: "1px solid #D5D5D5",
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginRight: 24,
              }}
            >
              <p style={{ color: "#A8A8AD", fontSize: 12 }}>October</p>
              <DownArrow />
            </div>
          </div>
          <ProductsTable />
        </div>

        <div
          style={{
            height: 415,
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: 15,
            marginTop: 20,
            paddingTop: 30,
            boxShadow: "0px 1px 10px 0px #d3d3d3",
          }}
        >
          <div
            style={{
              marginBottom: 31,
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: 24,
                textAlign: "left",
                marginLeft: 32,
                marginBottom: 20,
                fontWeight: "700",
              }}
            >
              Revenue
            </p>
            <div
              style={{
                width: 108,
                height: 28,
                border: "1px solid #D5D5D5",
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginRight: 24,
              }}
            >
              <p style={{ color: "#A8A8AD", fontSize: 12 }}>October</p>
              <DownArrow />
            </div>
          </div>

          <ResponsiveContainer width="100%" height={280}>
            <AreaChart
              data={GraphData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              barGap={120}
            >
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#DBA5FF" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#DBA5FF" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF8F6D" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FF8F6D" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis domain={[20, 100]} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="sales"
                stroke="none"
                fillOpacity={6}
                fill="url(#colorSales)"
              />
              <Area
                type="monotone"
                dataKey="profit"
                stroke="none"
                fillOpacity={6}
                gradientTransform="auto"
                fill="url(#colorProfit)"
              />
            </AreaChart>
          </ResponsiveContainer>

          <div style={style.revenuInfoContainer}>
            <div
              style={{
                ...style.dotIndicator,
                ...{
                  backgroundColor: "#E3B9FF",
                },
              }}
            ></div>
            <p style={style.text}>Sales</p>
            <div style={style.dotIndicator}></div>
            <p style={style.text}>Profit</p>
          </div>
        </div>
      </div>
    </FrameComponent>
  );
};

const style = {
  text: {
    color: "#282D32",
    fontSize: 16,
    marginLeft: 16,
    fontWeight: "600",
  },
  dotIndicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#FFA58A",
    marginLeft: 59,
  },
  revenuInfoContainer: {
    marginTop: 32,
    marginBottom: 31,
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default HomePage;
