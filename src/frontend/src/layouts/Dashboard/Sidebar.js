import { Avatar, IconButton, styled, Typography, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/system'

import { Logo, Scrollbar } from 'components';
import NavSection from './NavSection';
import { useDispatch, useSelector } from 'react-redux';
import { setSideBarSmallSize } from 'redux/slices/theme';
import Iconify from 'components/Iconify';

const AccountStyle = styled('div')(({ theme, sideBarSmallSize }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: !sideBarSmallSize ? theme.spacing(2, 2.5) : null,
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: !sideBarSmallSize ? "rgba(145, 158, 171, 0.12)" : null
}));

const DashboardSidebar = () => {

  const { sideBarSmallSize } = useSelector(x => x.theme);
  const dispatch = useDispatch();

  const handlerSideBarSize = () => {
    dispatch(setSideBarSmallSize(!sideBarSmallSize));
  }

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
      <Box sx={{ px: 2.5, py: 3, minHeight: 88, display: 'inline-flex', alignItems: "center", justifyContent: "space-between" }}>
        {!sideBarSmallSize && <Logo />}
        <IconButton onClick={handlerSideBarSize}>
          <Iconify icon={sideBarSmallSize ? "bi:chevron-double-right" : "bi:chevron-double-left"} sx={{ ml: 0 }} />
        </IconButton>
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="#">
          <AccountStyle sideBarSmallSize={sideBarSmallSize}>
            <Avatar src={"https://media-exp1.licdn.com/dms/image/C4E03AQEoBTw_oOJqRA/profile-displayphoto-shrink_800_800/0/1614165387198?e=1655942400&v=beta&t=6wgMA7gMFa35pFrOf4Y-cQ3NFl8NvM8Ei_pRxCgKDAY"} alt="photoURL" />
            {!sideBarSmallSize && <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                Yasin Ekinci
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Admin
              </Typography>
            </Box>}
          </AccountStyle>
        </Link>
      </Box>

      <NavSection />
    </Scrollbar >
  )
}

export default DashboardSidebar