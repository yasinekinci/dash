import { useSelector } from 'react-redux';
import { createTheme, StyledEngineProvider, ThemeProvider, CssBaseline } from '@mui/material';
import componentsOverride from './overrides';

export default function ThemeConfig({ children }) {

  const { mode } = useSelector(state => state.theme);

  const theme = createTheme({
    palette: {
      mode: mode
    }
  });
  
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
