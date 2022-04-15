import React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// const NavBarMenu = (toggle, ...props) => {
// 	return (
// 		<Box
// 			sx={{ width: 'auto' }}
// 			role='presentation'
// 			onClick={toggleDrawer(false)}
// 			onKeyDown={toggleDrawer(false)}>
// 			<List>
// 				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
// 					<ListItem button key={text}>
// 						<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
// 						<ListItemText primary={text} />
// 					</ListItem>
// 				))}
// 			</List>
// 			<Divider />
// 			<List>
// 				{['All mail', 'Trash', 'Spam'].map((text, index) => (
// 					<ListItem button key={text}>
// 						<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
// 						<ListItemText primary={text} />
// 					</ListItem>
// 				))}
// 			</List>
// 		</Box>
// 	);
// };

const SideMenu = ({ isOpenSideMenu, toggleSideMenu, ...props }) => {
	return (
		<React.Fragment>
			<SwipeableDrawer
				anchor={'left'}
				open={isOpenSideMenu}
				onClose={toggleSideMenu(false)}
				onOpen={toggleSideMenu(true)}>
				<Box
					sx={{ width: 'auto' }}
					role='presentation'
					onClick={toggleSideMenu(false)}
					onKeyDown={toggleSideMenu(false)}>
					<List>
						{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
							<ListItem button key={text}>
								<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
					<Divider />
					<List>
						{['All mail', 'Trash', 'Spam'].map((text, index) => (
							<ListItem button key={text}>
								<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
				</Box>
			</SwipeableDrawer>
		</React.Fragment>
	);
};

export default SideMenu;
