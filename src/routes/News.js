import React, { Component } from 'react';
import { Card } from 'antd';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { DatePicker } from "antd";

export default class Home extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className="wrapper">
        <Card title="News Page">
          <DatePicker />
        </Card>
      </div>
    )
  }
}

