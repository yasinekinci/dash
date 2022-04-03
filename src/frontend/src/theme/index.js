import { createTheme, StyledEngineProvider, ThemeProvider, CssBaseline } from '@mui/material';
import { useMemo } from 'react';
import componentsOverride from './overrides';

export default function ThemeConfig({ children }) {
  const themeOptions = useMemo(
    () => ({
      shape: { borderRadius: 8 }
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
