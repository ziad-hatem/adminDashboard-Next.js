"use client";
import BarChart from "@/app/components/BarChart";
import Header from "@/app/components/Header";
import { Box } from "@mui/material";
const page = () => {
  return (
    <Box m={"20px"}>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height={"75vh"}>
        <BarChart />
      </Box>
    </Box>
  );
};

export default page;
