import { createTheme, StyledEngineProvider, ThemeProvider, CssBaseline } from '@mui/material';
import { useMemo, useState } from 'react';
import componentsOverride from './overrides';

export default function ThemeConfig({ children }) {

  const [mode, setMode] = useState("dark");

  const themeOptions = useMemo(
    () => ({
      palette: {
        mode: mode
      }    
    }),
    []
  );

  const theme = createTheme(themeOptions);
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
