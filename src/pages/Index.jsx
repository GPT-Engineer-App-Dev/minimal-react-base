import { Container, Text, VStack, Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box as="nav" width="100%" p={4} bg="brand.700" color="white">
        <Flex justify="space-between">
          <Text fontSize="xl" fontWeight="bold">MyApp</Text>
          <Flex>
            <Link as={RouterLink} to="/" p={2} color="white">Home</Link>
            <Link as={RouterLink} to="/about" p={2} color="white">About</Link>
          </Flex>
        </Flex>
      </Box>
      <VStack spacing={4} mt={8}>
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
      </VStack>
    </Container>
  );
};

export default Index;