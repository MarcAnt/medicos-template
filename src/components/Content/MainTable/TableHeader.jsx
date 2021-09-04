import { Box, Stack, Text } from "@chakra-ui/layout";
import React from "react";

const TableHeader = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      bgColor="#E0E6EE"
      mx="4"
      mt="10"
      borderTopRadius="10"
    >
      <Box
        bgColor="brand.900"
        flex="20"
        borderTopLeftRadius="10"
        px="10"
        py="3"
        textAlign="center"
      >
        <Text
          color="white"
          textTransform="uppercase"
          fontSize="small"
          fontWeight="bolder"
        >
          Sede Camacho
        </Text>
      </Box>
      <Box px="5" py="3" flex="20" textAlign="center">
        <Text
          textTransform="uppercase"
          color="#4D4D4F"
          fontSize="small"
          fontWeight="bolder"
        >
          Sede Jesus Maria Torre I
        </Text>
      </Box>
      <Box px="5" py="3" flex="20" textAlign="center">
        <Text
          textTransform="uppercase"
          color="#4D4D4F"
          fontSize="small"
          fontWeight="bolder"
        >
          Sede Jesus Maria Torre II
        </Text>
      </Box>
      <Box px="5" py="3" flex="20" textAlign="center">
        <Text
          textTransform="uppercase"
          color="#4D4D4F"
          fontSize="small"
          fontWeight="bolder"
        >
          Virtual
        </Text>
      </Box>
    </Stack>
  );
};

export default TableHeader;
