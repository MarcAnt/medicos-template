import { Box, Stack } from "@chakra-ui/layout";
import React from "react";
import BreadCrumbs from "./BreadCrumb/BreadCrumbs";
import CardInfo from "./CardInfo/CardInfo";
import HeaderTop from "./HeaderTop/HeaderTop";
import DescriptionTable from "./MainTable/DescriptionTable";
import PrincipalTable from "./MainTable/PrincipalTable";
import TitleComponent from "./TitleHeader/TitleComponent";

const ContentBody = () => {
  return (
    //Main content
    <Stack flex="75%">
      <Box as="main">
        <HeaderTop />
        <BreadCrumbs />
        <TitleComponent />
        <CardInfo />
        {/* Main Table */}
        <DescriptionTable />
        <PrincipalTable />
      </Box>
    </Stack>
  );
};

export default ContentBody;
