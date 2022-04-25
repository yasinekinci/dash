import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Divider, IconButton, InputBase, ListItemIcon, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Logout, Mail, Notifications, PersonAdd, Settings } from '@mui/icons-material';
import React from 'react';
import { Box } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux';
import { setMobileOpen } from 'redux/slices/theme';
import { Logo } from 'components'

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const LogoStyled = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px"
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "50%"
}));

const Icons = styled("div")(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}));

const UserBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px"
}));

const DashboardNavbar = () => {

  const { mobileOpen } = useSelector(state => state.theme);
  const dispatch = useDispatch();

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <LogoStyled>
          {/* <DashboardIcon onClick={() => dispatch(setMobileOpen(!mobileOpen))} /> */}
          <Logo />
          <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>Dashboard</Typography>
        </LogoStyled>
        <Search>
          <InputBase placeholder="Search..." sx={{ width: "100%" }} />
        </Search>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={2} color="error">
              <Notifications />
            </Badge>
          </Icons>
          <NavbarAvatar />
        </Box>
      </StyledToolbar>
    </AppBar >
  )
}

const NavbarAvatar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = anchorEl;

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }
  return (
    <UserBox>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          sx={{ ml: 2 }}>
          <Avatar sx={{ width: 30, height: 30 }} alt="Yasin Ekinci" src="https://media-exp1.licdn.com/dms/image/C4E03AQEoBTw_oOJqRA/profile-displayphoto-shrink_800_800/0/1614165387198?e=1655942400&v=beta&t=6wgMA7gMFa35pFrOf4Y-cQ3NFl8NvM8Ei_pRxCgKDAY" />
        </IconButton>
      </Tooltip>
      <Typography variant="span">Yasin</Typography>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

    </UserBox>

  )
}

export default DashboardNavbar