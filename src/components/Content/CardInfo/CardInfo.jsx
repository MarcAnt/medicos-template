import { Badge, Box, Heading, Text } from "@chakra-ui/layout";
import { Stack, Button } from "@chakra-ui/react";
import React from "react";

const CardInfo = () => {
  return (
    <Box
      as="section"
      boxShadow="sm"
      bgColor="white"
      borderRadius="10"
      p="4"
      mx="4"
      my="5"
    >
      <Stack flexDir="row" justify="space-between" alignItems="center" my="2">
        <Box flex="20">
          <Heading as="h6" color="brand.900" size="xs" fontWeight="normal">
            Médico
          </Heading>
          <Text color="#4D4D4F" fontWeight="bold" fontSize="small">
            Maria Maria Maria Maria
          </Text>
        </Box>
        <Box flex="20">
          <Heading as="h6" color="brand.900" size="xs" fontWeight="normal">
            Sede
          </Heading>
          <Text color="#4D4D4F" fontWeight="bold">
            Torre 1
          </Text>
        </Box>
        <Box flex="20">
          <Heading as="h6" color="brand.900" size="xs" fontWeight="normal">
            Especialidad
          </Heading>
          <Text color="#4D4D4F" fontWeight="bold">
            Gariatria
          </Text>
        </Box>
        <Box flex="20">
          <Heading as="h6" color="brand.900" size="xs" fontWeight="normal">
            Teléfono
          </Heading>
          <Text color="#4D4D4F" fontWeight="bold">
            988 888 888
          </Text>
        </Box>
        <Box flex="20">
          <Heading as="h6" color="brand.900" size="xs" fontWeight="normal">
            Correo
          </Heading>
          <Text color="#4D4D4F" fontWeight="bold">
            maria_maria@gmail.com
          </Text>
        </Box>
      </Stack>
      <Stack
        flexDir="row"
        justify="space-between"
        alignItems="flex-start"
        my="2"
      >
        <Box alignSelf="center" flex="20">
          <Heading as="h6" color="brand.900" size="xs" fontWeight="normal">
            Tipo de paciente
          </Heading>
          <Badge
            variant="subtle"
            bgColor="#FDF6EC"
            color="#7E521E"
            fontSize="7px"
            px="3"
            py="0.5"
            textTransform="capitalize"
            borderRadius="10px"
          >
            Mixto
          </Badge>
        </Box>
        <Stack alignSelf="center" flex="52">
          <Heading as="h6" color="brand.900" size="xs" fontWeight="normal">
            Observaciones
          </Heading>
          <Text
            color="#4D4D4F"
            fontWeight="bold"
            style={{ marginTop: "0.2rem" }}
          >
            Atención para personas mayores de 50 años
          </Text>
        </Stack>
        <Box alignSelf="center" flex="30">
          <Button
            bgColor="transparent"
            border="1px"
            borderColor="gray.300"
            borderRadius="20"
            color="#4D4D4F"
          >
            Editar
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default CardInfo;
