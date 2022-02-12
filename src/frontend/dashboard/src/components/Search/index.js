import { useState, useEffect } from 'react'
import { AutoComplete } from 'antd';
import cloneDeep from 'lodash.clonedeep';

const Search = ({ routes, onSelect: pOnSelect, isVisible }) => {
    const [searchWidth, setSearchWidth] = useState(window.innerWidth / 3);

    const onSelect = (value, data) => {
        pOnSelect && pOnSelect(cloneDeep(data));
    };

    const routeFilter = () => {
        const list = routes.filter(x => !x.hide && x.title != "Dashboard").map((route) => {
            return { value: route.title, ...route }
        });
        return list;
    }

    const changeWidth = () => {
        setSearchWidth(window.innerWidth / 3);
    }

    useEffect(() => {
        window.addEventListener('resize', changeWidth);
    }, [])

    if (!isVisible) {
        return <></>;
    }
    return (
        <AutoComplete
            allowClear
            autoFocus={true}
            defaultOpen={true}
            options={routeFilter()}
            style={{ width: searchWidth }}
            onSelect={onSelect}
            placeholder="Search"
            notFoundContent="no result matches"
            filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
        />
    )
}

export default Search
