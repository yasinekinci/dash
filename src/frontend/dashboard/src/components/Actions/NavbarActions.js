import { useState } from 'react'
import { SearchOutlined, AppstoreFilled, UserOutlined } from '@ant-design/icons';
import { Tooltip, Button } from 'antd';
import Search from 'components/Search';
import NotificationButton from 'components/Actions/NotificationButton';

const NavbarActions = ({ searchOnSelect, routes }) => {
    const [searchIsVisible, setSearchIsVisible] = useState(false);

    const onSelect = (data) => {
        setSearchIsVisible(false);
        searchOnSelect && searchOnSelect(data);
    }

    return (
        <>
            <Button type="link" icon={<SearchOutlined title="Search" />} onClick={() => { setSearchIsVisible(!searchIsVisible) }} />
            <Search isVisible={searchIsVisible} onSelect={onSelect} routes={routes} />
            <NotificationButton />
            <Tooltip title="More">
                <Button type="link" icon={<AppstoreFilled />} />
            </Tooltip>
            <Tooltip title="User">
                <Button type="primary" icon={<UserOutlined />} />
            </Tooltip>
        </>
    );
}

export default NavbarActions
