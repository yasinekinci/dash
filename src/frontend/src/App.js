import { ScrollToTop } from 'components';
import Router from 'routes';
import ThemeConfig from './theme/index';

export default function App() {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <Router />
    </ThemeConfig>
  );
}
