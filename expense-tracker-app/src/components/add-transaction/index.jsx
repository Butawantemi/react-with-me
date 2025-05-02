import {
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    Stack,
    Radio,
    RadioGroup,
  } from "@chakra-ui/react";
  
  export default function TransactionForm({ isOpen, onClose }) {
    return (
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add New Transaction</DrawerHeader>
          <form>
            <DrawerBody>
              <Stack spacing={4}>
                <Input
                  placeholder="Enter transaction description"
                  name="description"
                  type="text"
                />
                <Input
                  placeholder="Enter transaction amount"
                  name="amount"
                  type="number"
                />
                <RadioGroup name="type">
                  <Stack direction="row">
                    <Radio value="income" colorScheme="blue">Income</Radio>
                    <Radio value="expense" colorScheme="red">Expense</Radio>
                  </Stack>
                </RadioGroup>
              </Stack>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Add</Button>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    );
  }
  