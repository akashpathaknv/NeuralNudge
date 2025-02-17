/* eslint-disable */

import { Flex, Link, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react';

export default function Footer() {
	let textColor = useColorModeValue('gray.400', 'white');
	let linkColor = useColorModeValue({ base: 'gray.400', lg: 'white' }, 'white');
	return (
		<Flex
			zIndex='3'
			flexDirection={{
				base: 'column',
				lg: 'row'
			}}
			alignItems={{
				base: 'center',
				xl: 'start'
			}}
			justifyContent='space-between'
			px={{ base: '30px', md: '0px' }}
			pb='30px'>
			<Text
				color={textColor}
				textAlign={{
					base: 'center',
					xl: 'start'
				}}
				mb={{ base: '20px', lg: '0px' }}>
				{' '}
				&copy; {new Date().getFullYear()}
				<Text as='span' fontWeight='500' ms='4px'>
					All Rights Reserved. Made with love by
					<Link mx='3px' color={textColor} fontWeight='700'>
						Neural Nudge!
					</Link>
				</Text>
			</Text>
			<List display='flex'>
				<ListItem
					me={{
						base: '20px',
						md: '44px'
					}}>
					<Link fontWeight='500' color={linkColor}>
						Support
					</Link>
				</ListItem>
				<ListItem
					me={{
						base: '20px',
						md: '44px'
					}}>
					<Link fontWeight='500' color={linkColor}>
						License
					</Link>
				</ListItem>
				<ListItem
					me={{
						base: '20px',
						md: '44px'
					}}>
					<Link fontWeight='500' color={linkColor}>
						Terms of Use
					</Link>
				</ListItem>
				<ListItem>
					<Link fontWeight='500' color={linkColor}>
						Blog
					</Link>
				</ListItem>
			</List>
		</Flex>
	);
}
