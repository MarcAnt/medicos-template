import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import { RiEdit2Line } from "react-icons/ri";

const ButtonEdit = () => {
  return (
    <Box>
      <Button
        w="100%"
        size="md"
        variant="outline"
        borderRadius="50"
        bgColor="white"
        mt="5"
      >
        <Icon as={RiEdit2Line} color="#4D4D4F" w="3" h="3" />
        <Text
          as="span"
          color="#4D4D4F"
          pl="1"
          fontSize="sm"
          fontWeight="bolder"
        >
          Editar horarios del médico
        </Text>
      </Button>
    </Box>
  );
};

export default ButtonEdit;
