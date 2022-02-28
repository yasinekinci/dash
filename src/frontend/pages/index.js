import 'antd/dist/antd.css';
import { Button } from "antd";

export const getStaticProps = async (context) => {

  return {
    props: {
      myNum: 55
    }
  }
}

export default function Home(props) {
  return <Button>Hi {props.myNum}</Button>;
}
