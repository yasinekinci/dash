import React from 'react'
import { Link } from 'react-router-dom';
import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Forgot = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Typography.Title className="mP0">Sign in</Typography.Title>
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
                <Form.Item shouldUpdate>
                    {() => (
                        <Button
                            block
                            type="primary"
                            htmlType="submit"
                            disabled={(!form.isFieldsTouched(true)) || (!!form.getFieldsError().filter(({ errors }) => errors.length).length)}>
                            Reset Password
                        </Button>
                    )}
                </Form.Item>
                <>
                    <Typography.Text>Don't have an account?  </Typography.Text>
                    <Link to="/auth/register">
                        <Typography.Link href="#" target="_blank">
                            Sign up!
                        </Typography.Link>
                    </Link>
                </>

            </Form>
        </>
    )
}

export default Forgot
