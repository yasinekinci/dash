import React from "react";

import Footer from "./";

export default {
  title: "Components/Footer",
  component: Footer,
  argTypes: {},
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "Demo Design ©2021 Created by Yasin Ekinci",
};
