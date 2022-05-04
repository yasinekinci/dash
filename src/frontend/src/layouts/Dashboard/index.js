import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Stack, Drawer, Box } from '@mui/material';
import DashboardSidebar from './Sidebar';
import DashboardNavbar from './Navbar';
import { setMobileOpen } from 'redux/slices/theme'

const drawerWidth = 280;
const smallDrawerWidth = 88;

const DashboardLayout = (props) => {
    const { window } = props;
    const { mobileOpen, sideBarSmallSize } = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const handleDrawerToggle = () => {
        dispatch(setMobileOpen(!mobileOpen));
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <Box component="nav"
                sx={{
                    width: { sm: sideBarSmallSize ? smallDrawerWidth : drawerWidth },
                    flexShrink: { sm: 0 }
                }}
                aria-label="mailbox folders">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: sideBarSmallSize ? smallDrawerWidth : drawerWidth
                        },
                    }}>
                    <DashboardSidebar />
                </Drawer>
                <Drawer
                    variant="persistent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: sideBarSmallSize ? smallDrawerWidth : drawerWidth,
                            borderRightStyle: 'dashed',
                            transition: "all 0.14s ease-in-out"
                        }
                    }}
                    open>
                    <DashboardSidebar />
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}>
                <Stack direction={"column"}>
                    <DashboardNavbar />
                    <Box>
                        <Outlet />
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}

DashboardLayout.propTypes = {
    window: PropTypes.func,
};

export default DashboardLayout;
