import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import TransactionForm from "../add-transaction";

const Summary = ({ isOpen, onClose }) => {
  return (
    <Box
      p={6}
      border="1px solid"
      borderColor="gray.100"
      borderRadius="10"
      bg="white"
      overflow="hidden"
      display="flex"
    >
      <Flex
        w="full"
        justify="center"
        align="center"
        flexDir={{ base: "column", lg: "row" }}
      >
        <Flex
          flex={1}
          w="full"
          flexDir="column"
          align="center"
          justify="space-evenly"
          ml="-20"
          mr="2"
        >
          <Heading size="md" mb={4} color="gray.600">
            Balance is $100
          </Heading>

          <Flex
            justify="space-evenly"
            align="center"
            bg="gray.50"
            w="full"
            h="100px"
            border="1px solid"
            borderColor="gray.100"
          >
            <Flex flexDir="column">
              <Heading color="gray.700">$100</Heading>
              <Text color="gray.600">Total Income</Text>
            </Flex>
          </Flex>

          <Flex
            justify="space-evenly"
            align="center"
            bg="gray.50"
            w="full"
            h="100px"
            border="1px solid"
            borderColor="gray.100"
          >
            <Flex flexDir="column">
              <Heading color="gray.700">$100</Heading>
              <Text color="gray.600">Total Expense</Text>
            </Flex>
          </Flex>
        </Flex>

        <Box
          flex={1}
          mt="10"
          ml="-90px"
          mr="5"
          w="300px"
          h="300px"
          display="flex"
          align="center"
          justify="center"
        >
          <Heading>Chart</Heading>
        </Box>
      </Flex>

      <TransactionForm isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Summary;
