/* eslint-disable */
// Chakra Imports
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import AdminNavbarLinks from 'components/navbar/NavbarLinksAdmin';

export default function AdminNavbar(props: {
	secondary: boolean;
	message: string|boolean;
	brandText: string;
	logoText: string;
	fixed: boolean;
	onOpen: (...args: any[]) => any;
}) {
	const [ scrolled, setScrolled ] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', changeNavbar);

		return () => {
			window.removeEventListener('scroll', changeNavbar);
		};
	});

	const { secondary,  brandText } = props;

	// Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
	let mainText = useColorModeValue('navy.700', 'white');
	let secondaryText = useColorModeValue('gray.700', 'white');
	let navbarPosition = 'fixed' as const;
	let navbarFilter = 'none';
	let navbarBackdrop = 'blur(20px)';
	let navbarShadow = 'none';
	let navbarBg = useColorModeValue('rgba(244, 247, 254, 0.2)', 'rgba(11,20,55,0.5)');
	let navbarBorder = 'transparent';
	let secondaryMargin = '0px';
	let paddingX = '15px';
	let gap = '0px';
	const changeNavbar = () => {
		if (window.scrollY > 1) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};
	return (<></>
	);
}
