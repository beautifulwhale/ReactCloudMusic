import React from 'react';
import { SearchOutlined } from '@ant-design/icons'
import { AutoComplete, Input } from 'antd';

const Search: React.FC = () => (
  <AutoComplete
    popupClassName="certain-category-search-dropdown"
    dropdownMatchSelectWidth={500}
    style={{ width: 250 }}
  >
    <Input prefix={<SearchOutlined />} allowClear={false} size="middle" placeholder="音乐/视频/电台/用户" />
  </AutoComplete>
);

export default Search;
