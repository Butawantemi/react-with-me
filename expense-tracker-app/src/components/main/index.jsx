import { Button, Flex, Heading } from "@chakra-ui/react";
import ExpenseView from "../expense-view";
import Summary from "../summary";
import { useState } from "react";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <Flex textAlign="center" flexDir="column" px={5}>
      <Flex align="center" justify="space-between" mt={12}>
        <Heading color="blue.400" display={["none", "block"]}>
          Expense Tracker
        </Heading>
        <Button bg="blue.300" color="black" ml={4} onClick={openDrawer}>
          Add New Transaction
        </Button>
      </Flex>

      <Summary isOpen={isOpen} onClose={closeDrawer} />

      <Flex
        w="full"
        align="flex-start"
        justify="space-evenly"
        flexDir={["column", "row"]}
        mt={8}
      >
        <ExpenseView />
        <ExpenseView />
      </Flex>
    </Flex>
  );
};

export default Main;
