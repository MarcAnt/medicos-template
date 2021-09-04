import { Box, Stack, Text } from "@chakra-ui/layout";
import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { MdExpandMore } from "react-icons/md";

const HeaderTop = () => {
  return (
    <Box
      as="header"
      bg="white"
      p="4"
      borderBottomRadius="10"
      mx="4"
      boxShadow="sm"
    >
      <Flex justify="flex-end" alignItems="center">
        <Stack justifyContent="center" alignItems="center" direction="row">
          {/* Avartar User*/}
          <Stack
            bgColor="#F5F5F5"
            width="50px"
            height="50px"
            borderRadius="50%"
            justifyContent="center"
          >
            <Text color="brand.900" fontWeight="light" textAlign="center">
              MD
            </Text>
          </Stack>

          <Stack>
            <Text m="0">
              Hola, <br />
              <Box as="span" fontWeight="bold">
                Miguel Dávila
              </Box>
            </Text>
          </Stack>
        </Stack>
        <Icon as={MdExpandMore} w={6} h={6} />
      </Flex>
    </Box>
  );
};

export default HeaderTop;
