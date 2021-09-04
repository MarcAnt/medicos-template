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
    <Stack bgColor="brand.900" flex="20%" h="100vh" borderTopRightRadius="10">
      <Box as="header" bgColor="white" p="10" borderTopRightRadius="10"></Box>
      <Button w="95%" variant="buttonPanel" mb="3">
        <IoHomeOutline />
        <Box as="span" pl="5" fontWeight="light">
          Inicio
        </Box>
      </Button>
      <Button w="95%" variant="buttonPanel" mb="3">
        <AiOutlineTeam />
        <Box as="span" pl="5" fontWeight="light">
          Pacientes
        </Box>
      </Button>
      <Button w="95%" variant="buttonPanel" mb="3">
        <AiOutlineMedicineBox />
        <Box as="span" pl="5" fontWeight="light">
          Médicos
        </Box>
      </Button>
      <Button w="95%" variant="buttonPanel" mb="3">
        <AiOutlineSubnode />
        <Box as="span" pl="5" fontWeight="light">
          Consultorios
        </Box>
      </Button>
      <Button w="95%" variant="buttonPanel" mb="3">
        <AiOutlineSchedule />
        <Box as="span" pl="5" fontWeight="light">
          Agenda
        </Box>
      </Button>
      <Button w="95%" variant="buttonPanel" mb="3">
        <AiOutlineRead />
        <Box as="span" pl="5" fontWeight="light">
          Mi Agenda
        </Box>
      </Button>
      <Button w="95%" variant="buttonPanel" mb="3">
        <AiOutlineSolution />
        <Box as="span" pl="5" fontWeight="light">
          Reportes
        </Box>
      </Button>
    </Stack>
  );
};

export default PrincipalPanel;
