import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'antd';
import PropTypes from 'prop-types';
import PostList from './home/PostList';
 
class Home extends Component {
  static propTypes = {
    banners: PropTypes.array,
  }

  componentDidMount(){
    this.props.dispatch({
      type: 'ROUTE_IN_HOME'
    })
  }

  render() {
    const { posts, profile, error, ajax } = this.props.home;
    console.log(this.props);
    if(error){
      return (
        <div>
          has error
          <pre>
            {error.toString()}
          </pre>
        </div>
      )
    }
    return (
      <div className="wrapper">
        <Row gutter={24} type="flex">

          <Col span={18}>
            <Card title="新闻通稿" loading={ajax}>
              <PostList data={posts} spinning={ajax} />
            </Card>
          </Col>

          <Col span={6}>
            <Card title="个人中心" loading={ajax}>
              <p>{profile.loginname}</p>
              <p>积分：{profile.score}</p>
            </Card>
          </Col>

        </Row>

      </div>
    )
  }
}

export default connect((state)=>({
  home: state.home,
}))(Home);
