import React, { useState } from 'react';
import { Form, Input, Button, Radio, Select, Cascader, DatePicker, InputNumber, TreeSelect, Switch, Card } from 'antd';

const PageTwo = () => {

    return (
        <Card title="Form" bordered={false}>
            <Form.Item name="size">
                <Radio.Group>
                    <Radio value="small">Small</Radio>
                    <Radio value="default">Default</Radio>
                    <Radio value="large">Large</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item name="input">
                <Input />
            </Form.Item>
            <Form.Item name="select">
                <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item name="tree">
                <TreeSelect
                    treeData={[
                        { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
                    ]}
                />
            </Form.Item>
            <Form.Item name="cascade">
                <Cascader
                    options={[
                        {
                            value: 'zhejiang',
                            label: 'Zhejiang',
                            children: [
                                {
                                    value: 'hangzhou',
                                    label: 'Hangzhou',
                                },
                            ],
                        },
                    ]}
                />
            </Form.Item>
            <Form.Item name="datePicker">
                <DatePicker />
            </Form.Item>
            <Form.Item name="inputNumber">
                <InputNumber />
            </Form.Item>
            <Form.Item valuePropName="checked" name="switch">
                <Switch />
            </Form.Item>
        </Card>
    )

}

export default PageTwo
