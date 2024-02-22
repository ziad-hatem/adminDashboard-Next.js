"use client";
import LineChart from "@/app/components/LineChart";
import Header from "@/app/components/Header";
import { Box } from "@mui/material";
const page = () => {
  return (
    <Box m={"20px"}>
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height={"75vh"}>
        <LineChart />
      </Box>
    </Box>
  );
};

export default page;
