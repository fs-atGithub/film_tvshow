import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const PaginationComponent = ({ activePage, totalPages, setActivePage }) => {
  return (
    <Flex gap={2} alignItems={"center"}>
      <Flex gap={2} maxW={"250px"} my={10}>
        <Button
          onClick={() => setActivePage(activePage - 1)}
          isDisabled={activePage === 1}
        >
          Prethodna
        </Button>
        <Button
          onClick={() => setActivePage(activePage + 1)}
          isDisabled={activePage === totalPages}
        >
          Slijedeća
        </Button>
      </Flex>
      <Flex gap={1}>
        <Text>{activePage}</Text>
        <Text>od</Text>
        <Text>{totalPages}</Text>
      </Flex>
    </Flex>
  );
};

export default PaginationComponent;
