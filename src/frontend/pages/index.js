import { Button } from "antd";

export const getStaticProps = async (context) => {
  return {
    props: {
      myNum: 55
    }
  }
}

export default function Home(props) {
  return <Button type="primary">Hi {props.myNum} asdasd asd asd</Button>;
}
