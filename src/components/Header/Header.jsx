import React from 'react';
import Navbar from './Navbar/Navbar';

import SideMenu from './SideMenu/SideMenu';

const Header = () => {
	const [isOpenSideMenu, setIsOpenSideMenu] = React.useState(false);

	const toggleSideMenu = open => event => {
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setIsOpenSideMenu(open);
	};

	return (
		<React.Fragment>
			<Navbar toggleSideMenu={toggleSideMenu} />
			<SideMenu isOpenSideMenu={isOpenSideMenu} toggleSideMenu={toggleSideMenu} />
		</React.Fragment>
	);
};

export default Header;
