import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { FaChevronRight } from "react-icons/fa";

const BreadCrumbs = () => {
  return (
    <Breadcrumb
      pl="4"
      spacing="8px"
      separator={<FaChevronRight color="brand.900" />}
      fontSize="xs"
      my="5"
    >
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Inicio</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">Médicos</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink fontWeight="bold" href="#">
          Manteniento de Horarios
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BreadCrumbs;
