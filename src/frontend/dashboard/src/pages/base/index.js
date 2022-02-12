import React from 'react'
import PageHeader from 'components/PageHeader';
import { Form, Layout } from 'antd';

const Base = ({ children, ...props }) => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onValuesChange = (changedValue, values) => {
        props.onValuesChange(props.page.uniqueId, values)
    }

    // const onFieldsChange = (changedFields, allFields) => {
    //     console.log(changedFields, allFields)
    // }

    let Page = children;
    return (
        <Form
            initialValues={props.page.initialValues}
            onValuesChange={onValuesChange}
            // onFieldsChange={onFieldsChange}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
            <PageHeader {...props.page} />
            <Layout.Content style={{ padding: '16px' }} >
                <Page {...props} />
            </Layout.Content>
        </Form>
    )
}

export default Base
