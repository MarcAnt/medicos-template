import React from "react";

import { IoHomeOutline } from "react-icons/io5";
import {
  AiOutlineTeam,
  AiOutlineSubnode,
  AiOutlineMedicineBox,
  AiOutlineSchedule,
  AiOutlineRead,
  AiOutlineSolution,
} from "react-icons/ai";

import { Button } from "@chakra-ui/button";
import { Box, Stack } from "@chakra-ui/layout";

const PrincipalPanel = () => {
  return (
    <Stack
      bgColor="brand.900"
      borderTopRightRadius="10"
      position="fixed"
      width="18%"
      h="100vh"
    >
      <Box as="header" bgColor="white" p="10" borderTopRightRadius="10"></Box>
      <Box pt="5">
        <Button w="95%" p="6" variant="buttonPanel" mb="3">
          <IoHomeOutline />
          <Box as="span" pl="5" fontWeight="light">
            Inicio
          </Box>
        </Button>
        <Button w="95%" p="6" variant="buttonPanel" mb="3">
          <AiOutlineTeam />
          <Box as="span" pl="5" fontWeight="light">
            Pacientes
          </Box>
        </Button>
        <Button w="95%" p="6" variant="buttonPanel" mb="3">
          <AiOutlineMedicineBox />
          <Box as="span" pl="5" fontWeight="light">
            Médicos
          </Box>
        </Button>
        <Button w="95%" p="6" variant="buttonPanel" mb="3">
          <AiOutlineSubnode />
          <Box as="span" pl="5" fontWeight="light">
            Consultorios
          </Box>
        </Button>
        <Button w="95%" p="6" variant="buttonPanel" mb="3">
          <AiOutlineSchedule />
          <Box as="span" pl="5" fontWeight="light">
            Agenda
          </Box>
        </Button>
        <Button w="95%" p="6" variant="buttonPanel" mb="3">
          <AiOutlineRead />
          <Box as="span" pl="5" fontWeight="light">
            Mi Agenda
          </Box>
        </Button>
        <Button w="95%" p="6" variant="buttonPanel" mb="3">
          <AiOutlineSolution />
          <Box as="span" pl="5" fontWeight="light">
            Reportes
          </Box>
        </Button>
      </Box>
    </Stack>
  );
};

export default PrincipalPanel;
