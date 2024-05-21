import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, Box, Image, HStack, IconButton, Spinner } from "@chakra-ui/react";
import { FaSearch, FaYoutube } from "react-icons/fa";

const Index = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResults([
        {
          title: "Sample Video 1",
          description: "This is a description for sample video 1.",
          thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx5b3V0dWJlJTIwdGh1bWJuYWlsfGVufDB8fHx8MTcxNjI3NjI4NXww&ixlib=rb-4.0.3&q=80&w=1080",
          url: "https://www.youtube.com/watch?v=sample1",
        },
        {
          title: "Sample Video 2",
          description: "This is a description for sample video 2.",
          thumbnail: "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx5b3V0dWJlJTIwdGh1bWJuYWlsfGVufDB8fHx8MTcxNjI3NjI4NXww&ixlib=rb-4.0.3&q=80&w=1080",
          url: "https://www.youtube.com/watch?v=sample2",
        },
      ]);
      setLoading(false);
    }, 2000);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Input placeholder="Enter topic of interest..." value={query} onChange={(e) => setQuery(e.target.value)} flex="1" />
          <IconButton aria-label="Search" icon={<FaSearch />} onClick={handleSearch} />
        </HStack>
        {loading ? (
          <Spinner size="xl" />
        ) : (
          results.map((result, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%">
              <HStack>
                <Image src={result.thumbnail} alt={result.title} boxSize="100px" />
                <VStack align="start" spacing={1} padding={2}>
                  <Text fontWeight="bold">{result.title}</Text>
                  <Text>{result.description}</Text>
                  <Button as="a" href={result.url} target="_blank" leftIcon={<FaYoutube />} colorScheme="red" size="sm">
                    Watch on YouTube
                  </Button>
                </VStack>
              </HStack>
            </Box>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default Index;
