import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { DatePicker } from "antd";

export default class Home extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        News pagee
        <div>
          <DatePicker />
        </div>
      </div>
    )
  }
}

