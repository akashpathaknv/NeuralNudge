import React from 'react';
import { Box, Heading, Text, SimpleGrid, Icon, VStack, useColorModeValue } from '@chakra-ui/react';
import { FaRobot, FaChartLine, FaUsers, FaComments, FaMoneyBillWave } from 'react-icons/fa';

const AISmartSocialMedia = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const headingColor = useColorModeValue('gray.800', 'white');

  const features = [
    { icon: FaRobot, title: 'AI-Powered Content', description: 'Leverage AI to create engaging, personalized content for your audience.' },
    { icon: FaChartLine, title: 'Increased Reach', description: 'Use AI algorithms to optimize post timing and content distribution.' },
    { icon: FaUsers, title: 'Grow Followers', description: 'AI-driven strategies to attract and retain more followers.' },
    { icon: FaComments, title: 'Improved Engagement', description: 'Utilize AI chatbots and sentiment analysis to boost user interaction.' },
    { icon: FaMoneyBillWave, title: 'Revenue Growth', description: 'AI-optimized campaigns and targeted ads to increase your ROI.' },
  ];

  return (
    <Box bg={bgColor} p={8} borderRadius="lg" boxShadow="xl" maxWidth="1200px" margin="auto">
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center" color={headingColor}>
          Revolutionize Your Social Media with Neural Nudge
        </Heading>
        <Text fontSize="xl" textAlign="center" color={textColor}>
          Harness the power of Artificial Intelligence and Large Language Models to supercharge your social media presence.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {features.map((feature, index) => (
            <Box key={index} textAlign="center" p={5} borderRadius="md" boxShadow="md">
              <Icon as={feature.icon} w={10} h={10} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2} color={headingColor}>
                {feature.title}
              </Heading>
              <Text color={textColor}>{feature.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
        <Text fontSize="lg" textAlign="center" color={textColor}>
          Stay ahead of the curve by embracing AI-driven social media strategies. Boost your online presence, engage your audience more effectively, and drive tangible results for your brand or business.
        </Text>
      </VStack>
    </Box>
  );
};

export default AISmartSocialMedia;
