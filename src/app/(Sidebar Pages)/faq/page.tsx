"use client";
import { Box, useTheme, Typography } from "@mui/material";
import Header from "@/app/components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcom from "@mui/icons-material/ExpandMore";
import { tokens } from "@/app/theme";

const page = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Accordion sx={{ marginBottom: "10px" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcom />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Imprtant Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            adipisci ipsam. Earum dolorem animi possimus officia! Sed provident
            nulla, ratione illum velit tempore explicabo porro, hic nostrum
            voluptatum labore quia!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ marginBottom: "10px" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcom />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Imprtant Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            adipisci ipsam. Earum dolorem animi possimus officia! Sed provident
            nulla, ratione illum velit tempore explicabo porro, hic nostrum
            voluptatum labore quia!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ marginBottom: "10px" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcom />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favourite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            adipisci ipsam. Earum dolorem animi possimus officia! Sed provident
            nulla, ratione illum velit tempore explicabo porro, hic nostrum
            voluptatum labore quia!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ marginBottom: "10px" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcom />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            adipisci ipsam. Earum dolorem animi possimus officia! Sed provident
            nulla, ratione illum velit tempore explicabo porro, hic nostrum
            voluptatum labore quia!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ marginBottom: "10px" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcom />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            adipisci ipsam. Earum dolorem animi possimus officia! Sed provident
            nulla, ratione illum velit tempore explicabo porro, hic nostrum
            voluptatum labore quia!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default page;
