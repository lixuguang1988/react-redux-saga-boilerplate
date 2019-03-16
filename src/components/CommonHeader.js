import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

function ComomnHeader(){
  return (
    <div className="common-header">
      <Menu mode="horizontal" theme="dark">
        <Menu.Item>
          <NavLink to="/">首页</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/news">新闻</NavLink>
        </Menu.Item>        
      </Menu>
    </div>
  )
}

export default ComomnHeader;