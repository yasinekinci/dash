import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { Add, Feed, Navbar, Rightbar, Sidebar } from 'components';
import ThemeConfig from './theme/index';

export default function App() {
  return (
    <ThemeConfig>
      <Box>
        <Add />
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeConfig>
  );
}
