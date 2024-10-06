import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Input,
  Button,
  useColorModeValue,
  Avatar,
  Flex,
  Spacer,
} from '@chakra-ui/react';

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

const AIChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      // Here you would typically call your AI service
      // For now, we'll just simulate a response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "I'm an AI assistant. How can I help you?",
          sender: 'ai'
        }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <Box
      bg={bgColor}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={borderColor}
      p={4}
      height="calc(100vh - 80px)"  // Adjust this value as needed to account for any headers or footers
      display="flex"
      flexDirection="column"
      width="100%"  // Make the box full width
      maxWidth="100%"  // Ensure it doesn't exceed the screen width
    >
      <VStack flex={1} overflowY="auto" spacing={4} align="stretch" mb={4}>
        {messages.length === 0 ? (
          <Flex justify="center" align="center" height="100%">
            <Box textAlign="center" maxWidth="80%">
              <Text fontSize="4xl" fontWeight="bold" mb={3}>
                Welcome to <Text as="span" color="brown">Chat by Neural Nudge</Text>
              </Text>
              <Text mb={4}>
                Get started by writing a task and Chat can do the rest. Not sure where to start? Check out the Prompt Library for inspiration.
              </Text>
              <VStack align="start" spacing={2}>
                <Text fontWeight="bold">🔍 Real-time search</Text>
                <Text fontSize="sm" color="gray.500" ml={6}>
                  Get instant answers from the web as you type. Our AI scans millions of sources in real-time, 
                  providing you with up-to-date information on any topic. Perfect for quick fact-checking or 
                  diving deep into complex subjects.
                </Text>
                <Text fontWeight="bold">📝 Long-form Content</Text>
                <Text fontSize="sm" color="gray.500" ml={6}>
                  Generate articles, reports, and essays with ease. Whether you need a 500-word blog post or a 
                  comprehensive 5000-word whitepaper, our AI can help craft well-structured, engaging content 
                  tailored to your specific needs and audience.
                </Text>
                <Text fontWeight="bold">💡 Brainstorm Ideas</Text>
                <Text fontSize="sm" color="gray.500" ml={6}>
                  Spark creativity and generate innovative concepts. Stuck on a project? Our AI can help you 
                  break through creative blocks, offering unique perspectives and out-of-the-box ideas for any 
                  challenge you're facing, from marketing campaigns to product development.
                </Text>
              </VStack>
            </Box>
          </Flex>
        ) : (
          messages.map((message, index) => (
            <Flex key={index} justify={message.sender === 'user' ? 'flex-end' : 'flex-start'}>
              <HStack spacing={2} maxW="70%">
                {message.sender === 'ai' && <Avatar size="sm" name="AI Assistant" bg="blue.500" />}
                <Box
                  bg={message.sender === 'user' ? 'blue.500' : 'gray.100'}
                  color={message.sender === 'user' ? 'white' : 'black'}
                  borderRadius="lg"
                  px={3}
                  py={2}
                >
                  <Text>{message.text}</Text>
                </Box>
                {message.sender === 'user' && <Avatar size="sm" name="User" bg="green.500" />}
              </HStack>
            </Flex>
          ))
        )}
      </VStack>
      <HStack as="form" onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          borderRadius="full"
        />
        <Button colorScheme="blue" borderRadius="full" onClick={handleSend}>
          Send
        </Button>
      </HStack>
    </Box>
  );
};

export default AIChatBot;
