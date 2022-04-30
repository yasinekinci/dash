import styled from '@emotion/styled';
import { alpha, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Switch, useTheme } from '@mui/material'
import Iconify from 'components/Iconify';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setMode } from 'redux/slices/theme';

const ListItemIconStyled = styled(ListItemIcon)(({ theme }) => ({
    minWidth: 0,
    paddingRight: "10px"
}));

const ListItemTextStyled = styled(ListItemText)(({ theme }) => ({
    "& span": {
        fontSize: "0.875rem"
    }
}));

const ListItemStyled = styled(ListItem)(({ theme }) => ({
    "& a": {
        borderRadius: "5px",
        margin: "2px 15px"
    },
    "& a:hover": {
        backgroundColor: "rgba(145, 158, 171, 0.12)",
        borderRadius: "5px",
        margin: "2px 15px"
    }
}));



const NavSection = () => {
    const { mode } = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setMode(event.target.checked ? "dark" : "light"));
    }

    const activeRootStyle = {
        "& a": {
            backgroundColor: "rgba(145, 158, 171, 0.12)",
            borderRadius: "5px",
            margin: "2px 15px"
        }
    };

    const navConfig = [
        {
            href: "/dashboard/app",
            title: "Home Page",
            icon: "ic:baseline-speed"
        },
        {
            href: "/dashboard/pages",
            title: "Pages",
            icon: "ic:baseline-article"
        },
        {
            href: "/dashboard/groups",
            title: "Groups",
            icon: "ic:baseline-groups"
        },
        {
            href: "/dashboard/storefront",
            title: "Market Place",
            icon: "ic:baseline-storefront"
        },
        {
            href: "/dashboard/person",
            title: "Friends",
            icon: "ic:baseline-person"
        },
        {
            href: "/dashboard/account-box",
            title: "Settings",
            icon: "ic:baseline-account-box"
        }
    ]

    return (
        <Box>
            <List subheader={<ListSubheader>General</ListSubheader>}>
                {navConfig.map(nav => {
                    return <ListItemStyled disablePadding sx={nav.title == "Home Page" ? activeRootStyle : null}>
                        <ListItemButton component={Link} to={nav.href} key={nav.title} >
                            <ListItemIconStyled >
                                <Iconify icon={nav.icon} />
                            </ListItemIconStyled>
                            <ListItemTextStyled component="span" primary={nav.title} />
                        </ListItemButton>
                    </ListItemStyled>
                })}
                <ListItem disablePadding>
                    <ListItemButton >
                        <ListItemIconStyled>
                            <Iconify icon="ic:baseline-mode-night" />
                        </ListItemIconStyled>
                        <Switch checked={mode === "dark"} onChange={handleChange} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box >
    )
}

export default NavSection