import { Row, Form, Input, Button, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUser } from 'redux/slices/user';

const Register = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const onFinish = (variables) => {
        dispatch(createUser(variables));
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Typography.Title className="mP0">Sign Up</Typography.Title>
            <Typography.Text type="secondary" className="welcome">Hi, Welcome</Typography.Text>
            <Form
                className="loginForm"
                initialValues={{ policyAgreement: true }}
                // onValuesChange={(changedValue, values) =>
                //     console.log(changedValue, values)
                // }
                // onFieldsChange={(changedFields, allFields) =>
                //     console.log(changedFields, allFields)
                // }
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                form={form}
                autoComplete="off">
                <Form.Item name="name" rules={[{ required: true, message: 'Please input your First Name and Last Name!', type: "string" }]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name *" type="text" />
                </Form.Item>
                <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email Address!', type: "email" }]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email Address *" type="email" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password *" />
                </Form.Item>
                <Form.Item name="confirmPassword" dependencies={['password']}
                    rules={
                        [{ required: true, message: 'Please again input your password!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        })]
                    }>
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Confirm Password *" />
                </Form.Item>
                <Form.Item name="policyAgreement" valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                    ]}>
                    <Row justify="space-between">
                        <Checkbox>I accept the terms of use and privacy policy</Checkbox>
                    </Row>
                </Form.Item>
                <Form.Item shouldUpdate>
                    {() => (
                        <Button
                            block
                            type="primary"
                            htmlType="submit"
                            disabled={(!form.isFieldsTouched(true)) || (!!form.getFieldsError().filter(({ errors }) => errors.length).length)}>
                            Register
                        </Button>
                    )}
                </Form.Item>
                <>
                    <Typography.Text>Already have an account?  </Typography.Text>
                    <Link to={"/auth/login"}>
                        <Typography.Link href="#" target="_blank">
                            Log in!
                        </Typography.Link>
                    </Link>
                </>
                <br />
                <>
                    <Link to={"/auth/forgot"}>
                        <Typography.Link href="#" target="_blank">
                            Forgot password?
                        </Typography.Link>
                    </Link>
                </>

            </Form>
        </>
    )
}

export default Register
