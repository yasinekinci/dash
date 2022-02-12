import React from 'react'
import { Card, Col, Row, Checkbox, Space, DatePicker } from 'antd';
const PageOne = () => {
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }
    return (
        <Row gutter={24}>
            <Col span={12}>
                <Card title="Card title" bordered={false}>
                    <div>
                        <Checkbox onChange={onChange}>Checkbox</Checkbox>
                    </div>
                    <Space direction="horizontal" size={12}>
                        <DatePicker
                            dateRender={current => {
                                const style = {};
                                if (current.date() === 1) {
                                    style.border = '1px solid #1890ff';
                                    style.borderRadius = '50%';
                                }
                                return (
                                    <div className="ant-picker-cell-inner" style={style}>
                                        {current.date()}
                                    </div>
                                );
                            }}
                        />
                        <DatePicker.RangePicker
                            dateRender={current => {
                                const style = {};
                                if (current.date() === 1) {
                                    style.border = '1px solid #1890ff';
                                    style.borderRadius = '50%';
                                }
                                return (
                                    <div className="ant-picker-cell-inner" style={style}>
                                        {current.date()}
                                    </div>
                                );
                            }}
                        />
                    </Space>
                </Card>
            </Col>
            <Col span={12}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col>
        </Row>
    )
}

export default PageOne
