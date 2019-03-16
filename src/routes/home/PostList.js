import React from 'react';
import { Link } from 'react-router-dom';
import { List, Avatar } from 'antd';


export default function PostList({data, loading}){
  return (
    <List 
      itemLayout="horizontal"
      loading={loading}
      dataSource={data}
      renderItem = { item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.author.avatar_url} />}
            title={<Link to={`/archive/${item.id}`} >{item.title}</Link>}
            description={<div>{item.create_at}</div>}
          ></List.Item.Meta>
        </List.Item>
      )}
    />
  )
}
