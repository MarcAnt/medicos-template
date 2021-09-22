import { Box, Stack } from "@chakra-ui/layout";
import React from "react";
import BreadCrumbs from "./BreadCrumb/BreadCrumbs";
import CardInfo from "./CardInfo/CardInfo";
import HeaderTop from "./HeaderTop/HeaderTop";
import DescriptionTable from "./MainTable/DescriptionTable";
import ContentTable from "./MainTable/ContentTable";
import TitleComponent from "./TitleHeader/TitleComponent";
import Footer from "./Footer/Footer";

const ContentBody = () => {
  return (
    //Main content
    <Stack
      flex="75%"
      bgImage="url('./isotipo.png')"
      bgPos="98% 90px"
      bgRepeat="no-repeat"
      bgSize="350px 350px"
    >
      <Box as="main">
        <HeaderTop />
        <BreadCrumbs />
        <TitleComponent />
        <CardInfo />
        {/* Main Table */}
        <DescriptionTable />
        <ContentTable />
      </Box>
      <Box as="footer">
        <Footer />
      </Box>
    </Stack>
  );
};

export default ContentBody;
