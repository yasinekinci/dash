import React from 'react'
import { Row, Form, Input, Button, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Login = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Typography.Title className="mP0">Login</Typography.Title>
            <Typography.Text type="secondary" className="welcome">Hi, Welcome</Typography.Text>
            <Form
                className="loginForm"
                initialValues={{ remember: true }}
                onValuesChange={(changedValue, values) =>
                    console.log(changedValue, values)
                }
                onFieldsChange={(changedFields, allFields) =>
                    console.log(changedFields, allFields)
                }
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                form={form}
                autoComplete="off">
                <Form.Item name="emailAddress" rules={[{ required: true, message: 'Please input your Email Address!', type: "email" }]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email Address" type="email" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                </Form.Item>
                <Form.Item name="remember" >
                    <Row justify="space-between">
                        <Checkbox>Remember me</Checkbox>
                        <Link to={"/auth/forgot"}>
                            <Typography.Link href="#" target="_blank">
                                Forgot password?
                            </Typography.Link>
                        </Link>
                    </Row>
                </Form.Item>
                <Form.Item shouldUpdate>
                    {() => (
                        <Button
                            block
                            type="primary"
                            htmlType="submit"
                            disabled={(!form.isFieldsTouched(["emailAddress", "password"], true)) || (!!form.getFieldsError().filter(({ errors }) => errors.length).length)}>
                            Continue
                        </Button>
                    )}
                </Form.Item>

                <>
                    <Typography.Text>Don't have an account?  </Typography.Text>
                    <Link to={"/auth/register"}>
                        <Typography.Link href="#" target="_blank">
                            Sign up!
                        </Typography.Link>
                    </Link>
                </>

            </Form>
        </>
    )
}

export default Login
