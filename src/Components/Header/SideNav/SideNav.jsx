import { Drawer, Divider, IconButton } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';
import ReorderIcon from '@material-ui/icons/Reorder';
import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/CloseRounded';
import './SideNav.css';

const SideNav = ({open,setOpen}) => {
    const [isDrawerOpened, setIsDrawerOpened] = useState(false);
    const [icon, setIcon] = useState(<ReorderIcon />);

    const toggleDrawerStatus = () => {
        setIsDrawerOpened(true);
        setOpen(true);
        setIcon(<CloseIcon />);
    }
    const closeDrawer = () => {
        setIsDrawerOpened(false);
        setOpen(false);
        setIcon(<ReorderIcon />);
    }

    return (
        <div>
            <div>
                <IconButton onClick={toggleDrawerStatus}>
                    {icon}
                </IconButton>
            </div>
            <Divider />
            <Drawer
                variant="temporary"
                open={isDrawerOpened}
                onClose={closeDrawer}
                anchor="right"
            >
                <a href="About" >
                    <List>
                        <ListItem button key='About' className="Item">
                            <ListItemText primary='About' />
                        </ListItem>
                    </List>

                </a>
                <a href="Careers">
                    <List>
                        <ListItem button key='Careers' className="Item">
                            <ListItemText primary='Careers' />
                        </ListItem>
                    </List>
                </a>
                <a href="Events">
                    <List>
                        <ListItem button key='Events' className="Item">
                            <ListItemText primary='Events' />
                        </ListItem>
                    </List>
                </a>
                <a href="Products">
                    <List>
                        <ListItem button key='Products' className="Item">
                            <ListItemText primary='Products' />
                        </ListItem>
                    </List>
                </a>
                <a href="Support">
                    <List>
                        <ListItem button key='Support' className="Item">
                            <ListItemText primary='Support' />
                        </ListItem>
                    </List>
                </a>
            </Drawer>
        </div>

    );
}

export default SideNav;