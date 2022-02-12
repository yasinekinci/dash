import React, { useState, useEffect } from 'react'
import proxyExecute from '../../proxy';
import './notificationButton.css'
import { NotificationOutlined, DeleteOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Button, Badge, Popover, Card, Tooltip, List, Avatar, Typography } from 'antd';

const NotificationButton = () => {
    const [notifications, setNotifications] = useState([]);
    const [news, setNews] = useState([]);
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState([]);
    const [loading, setLoading] = useState(false);
    const [popoverIsVisible, setPopoverIsVisible] = useState(false);
    const tabList = [
        {
            key: 'notifications',
            tab: <Badge size="small" count={count.notifications}>Notifications</Badge>,
        },
        {
            key: 'news',
            tab: <Badge size="small" count={count.news}>News</Badge>,
        }, {
            key: 'todos',
            tab: <Badge size="small" count={count.todos}>Todos</Badge>,
        }
    ];
    const [activeKey, setActiveKey] = useState(tabList[0].key);

    const getContent = (key) => {
        let data;
        switch (key) {
            case "notifications":
                data = notifications;
                break;
            case "news":
                data = news;
                break;
            case "todos":
                data = todos;
                break;
        }


        if (data && data.length == 0) {
            return;
        }
        return <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<Typography.Link>{item?.title}</Typography.Link>}
                        description="Ant Design, a design language for background applications"
                    />
                </List.Item>
            )}
        />
    }

    const onTabChange = (key) => {
        setActiveKey(key);
    }

    const getTotalCount = () => {
        proxyExecute({ method: "totalCount" }).then(result => {
            setCount(result.data);
        })
    }

    useEffect(() => {
        getTotalCount();
        setLoading(true);
    }, [])

    useEffect(() => {
        if (!popoverIsVisible) {
            return;
        }
        setLoading(true);

        proxyExecute({ method: activeKey }).then(result => {
            switch (activeKey) {
                case 'notifications':
                    setNotifications(result.data);
                    break;
                case 'news':
                    setNews(result.data);
                    break;
                case 'todos':
                    setTodos(result.data);
                    break;
            }
            setLoading(false);
        })
    }, [activeKey, popoverIsVisible])

    const content = (
        <Card
            style={{ width: '100%' }}
            loading={loading}
            bordered={false}
            activeTabKey={activeKey}
            onTabChange={onTabChange}
            tabList={tabList}
            actions={[
                <Tooltip title="Clear"><DeleteOutlined /></Tooltip>,
                <Tooltip title="More"><EllipsisOutlined /></Tooltip>,
            ]}>
            {
                getContent(activeKey)
            }
        </Card>
    );

    return (
        <Badge count={count.total} size="small">
            <Popover placement="bottomRight" id="notificationPopover" content={content} trigger="click" onVisibleChange={(va) => {
                va && setPopoverIsVisible(va);
            }} >
                <Button type="link" icon={<NotificationOutlined />} />
            </Popover>
        </Badge>
    )
}

export default NotificationButton
