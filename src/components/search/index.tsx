import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { AutoComplete, Input } from 'antd'
import styles from './index.module.less'
import classNames from 'classnames/bind'

const Search: React.FC = () => {
  const cx = classNames.bind(styles)
  const className = cx({
    'ant-input-affix-wrapper': true,
    'anticon-search': true
  })
  return (
    <AutoComplete
      popupClassName="certain-category-search-dropdown"
      dropdownMatchSelectWidth={500}
      style={{ width: 158, height:50 }}
    >
      <Input
        className={className}
        prefix={<SearchOutlined />}
        allowClear={false}
        size="middle"
        placeholder="音乐/视频/电台"
      />
    </AutoComplete>
  )
}

export default Search
