import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import { Home, Article, Group, Storefront, Person, Settings, AccountBox, ModeNight } from '@mui/icons-material';
import { Box } from '@mui/system'
import { useSelector, useDispatch } from 'react-redux';
import { setMode } from 'redux/slices/theme';
import { Scrollbar } from 'components';

const DashboardSidebar = () => {

  const { mode } = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setMode(event.target.checked ? "dark" : "light"));
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
      <Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home Page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#pages">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#groups">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#MarketPlace">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Market Place" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#Friends">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#Settings">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#Profile">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#Profile">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch checked={mode === "dark"} onChange={handleChange} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Scrollbar>
  )
}

export default DashboardSidebar