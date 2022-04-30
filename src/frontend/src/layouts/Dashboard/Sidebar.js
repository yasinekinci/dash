import { Avatar, IconButton, styled, Typography, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/system'

import { Logo, Scrollbar } from 'components';
import NavSection from './NavSection';

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: "rgba(145, 158, 171, 0.12)"
}));

const DashboardSidebar = () => {
  return (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column'
        }
      }}>
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex', alignItems: "center", justifyContent: "space-between" }}>
        <Logo />
        <IconButton>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><g fill="currentColor" fill-rule="nonzero"><path d="M14.3283 11.4343 18.5126 7.25c.4142-.4142.4142-1.0858 0-1.5-.4142-.4142-1.0858-.4142-1.5 0l-5.543 5.5429c-.3904.3905-.3904 1.0237 0 1.4142l5.543 5.5429c.4142.4142 1.0858.4142 1.5 0 .4142-.4142.4142-1.0858 0-1.5l-4.1843-4.1843a.8.8 0 0 1 0-1.1314Z" opacity=".48"></path><path d="M8.3283 11.4343 12.5126 7.25c.4142-.4142.4142-1.0858 0-1.5-.4142-.4142-1.0858-.4142-1.5 0l-5.543 5.5429c-.3904.3905-.3904 1.0237 0 1.4142l5.543 5.5429c.4142.4142 1.0858.4142 1.5 0 .4142-.4142.4142-1.0858 0-1.5l-4.1843-4.1843a.8.8 0 0 1 0-1.1314Z"></path></g></g></svg>
        </IconButton>
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="#">
          <AccountStyle>
            <Avatar src={"https://media-exp1.licdn.com/dms/image/C4E03AQEoBTw_oOJqRA/profile-displayphoto-shrink_800_800/0/1614165387198?e=1655942400&v=beta&t=6wgMA7gMFa35pFrOf4Y-cQ3NFl8NvM8Ei_pRxCgKDAY"} alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                Yasin Ekinci
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Admin
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection />
    </Scrollbar >
  )
}

export default DashboardSidebar