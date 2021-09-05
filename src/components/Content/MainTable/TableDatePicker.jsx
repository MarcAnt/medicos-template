import React from "react";
import Icon from "@chakra-ui/icon";
import { Box, Grid, GridItem, Stack, Text } from "@chakra-ui/layout";
import { BiChevronDown, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { RiEdit2Line } from "react-icons/ri";
import { Button } from "@chakra-ui/button";

const TableDatePicker = () => {
  return (
    <Stack flex="20%" direction="column">
      {/* Datepicker */}
      <Box bgColor="#FFFFFF" borderRadius="5" boxShadow="sm">
        <Stack direction="row" justify="space-between">
          <Box pl="1" m={1} textAlign="center">
            <Icon as={BiChevronLeft} />
            <Icon as={BiChevronRight} />
          </Box>
          <Stack direction="row" alignItems="center" px="1">
            <Text fontWeight="bold" fontSize="sm">
              Julio 2021
            </Text>
            <Icon as={BiChevronDown} />
          </Stack>
        </Stack>
        <Grid
          templateColumns="repeat(7, 1fr)"
          templateRows="repeat(6, 1fr)"
          mx="3.5"
          my="3"
        >
          {/* HeadRow Datepicker */}
          <Text color="#ADB6BC" fontSize="xs">
            Lun
          </Text>
          <Text color="#ADB6BC" fontSize="xs">
            Mar
          </Text>
          <Text color="#ADB6BC" fontSize="xs">
            Mie
          </Text>
          <Text color="#ADB6BC" fontSize="xs">
            Jue
          </Text>
          <Text color="#ADB6BC" fontSize="xs">
            Vie
          </Text>
          <Text color="#ADB6BC" fontSize="xs">
            Sab
          </Text>
          <Text color="#ADB6BC" fontSize="xs">
            Dom
          </Text>
          {/* HeadRow Datepicker */}

          <GridItem colSpan="3"></GridItem>

          {Array.from({ length: 30 }, (v, i) => {
            if (i + 1 === 12) {
              return (
                <GridItem
                  key={i + 1}
                  fontSize="xs"
                  textAlign="center"
                  color="white"
                  p="1.5"
                >
                  <Box bgColor="gray.500" borderRadius="50%" w={5} h={5}>
                    {i + 1}
                  </Box>
                </GridItem>
              );
            }
            if (i + 1 === 17) {
              return (
                <GridItem
                  key={i + 1}
                  fontSize="xs"
                  textAlign="center"
                  position="relative"
                  p="1.5"
                >
                  <Box
                    position="absolute"
                    right="0"
                    top="0"
                    bgColor="#5082EE"
                    borderRadius="50%"
                    w={1}
                    h={1}
                    p="0"
                  ></Box>
                  {i + 1}
                </GridItem>
              );
            }

            return (
              <GridItem key={i + 1} p="1.5" fontSize="xs" textAlign="center">
                {i + 1}
              </GridItem>
            );
          })}
        </Grid>
      </Box>

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
    </Stack>
  );
};

export default TableDatePicker;
