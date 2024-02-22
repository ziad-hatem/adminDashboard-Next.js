"use client";
import GeographyCharts from "@/app/components/GeographyCharts";
import Header from "@/app/components/Header";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
const page = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m={"20px"}>
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box
        height={"75vh"}
        border={`1px solid ${colors.grey[100]}`}
        borderRadius={"4px"}
      >
        <GeographyCharts />
      </Box>
    </Box>
  );
};

export default page;
