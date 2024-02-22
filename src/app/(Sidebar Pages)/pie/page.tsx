"use client";
import PieChart from "@/app/components/PieChart";
import Header from "@/app/components/Header";
import { Box } from "@mui/material";
const page = () => {
  return (
    <Box m={"20px"}>
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height={"75vh"}>
        <PieChart />
      </Box>
    </Box>
  );
};

export default page;
