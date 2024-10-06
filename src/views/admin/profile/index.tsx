/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import { Box, Grid } from '@chakra-ui/react';

// Custom components
import Banner from 'views/admin/profile/components/Banner';
import General from 'views/admin/profile/components/General';
import Notifications from 'views/admin/profile/components/Notifications';
import Projects from 'views/admin/profile/components/Projects';
import Storage from 'views/admin/profile/components/Storage';
import Upload from 'views/admin/profile/components/Upload';

// Assets
import banner from 'assets/img/auth/banner.png';
import avatar from 'assets/img/avatars/avatar4.png';

export default function Overview() {
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			{/* Main Fields */}
			<Grid
				templateColumns={{
					base: '1fr',
					lg: '1fr'
				}}
				templateRows={{
					base: '1fr',
					lg: '1fr'
				}}
				gap={{ base: '20px', xl: '20px' }}>
				<Banner
					gridArea='1 / 1 / 2 / -1'
					banner={banner}
					avatar={avatar}
					name='Adela Parkson'
					job='Social Media Manager'
					posts='17'
					followers='9.7k'
					following='274'
				/>
			</Grid>
			<Grid
				mb='20px'
				templateColumns={{
					base: '1fr',
					lg: '1fr',
					'2xl': '1fr'
				}}
				templateRows={{
					base: '1fr',
					lg: '1fr',
					'2xl': '1fr'
				}}
				gap={{ base: '20px', xl: '20px' }}>
				<Projects
					banner={banner}
					avatar={avatar}
					name='Adela Parkson'
					job='Social Media Manager'
					posts='17'
					followers='9.7k'
					following='274'
					gridArea="1 / 1 / 2 / -1"
				/>
				<Notifications
					used={25.6}
					total={50}
					gridArea={{
						base: '2 / 1 / 3 / -1',
						lg: '2 / 1 / 3 / -1',
						'2xl': '2 / 1 / 3 / -1'
					}}
				/>
			</Grid>
		</Box>
	);
}
