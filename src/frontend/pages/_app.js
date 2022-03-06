import 'antd/dist/antd.variable.min.css';
import { ConfigProvider } from 'antd';

export default function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider componentSize="small">
      <Component {...pageProps} />
    </ConfigProvider >
  );
}
