import React, { Component } from "react";
import axios from "axios";

export default class List extends Component {
  state = {
    makers: []
  };

  componentDidMount = () => {
    axios.get(`${process.env.BACKEND_URL}/api/makers/all`, {}).then(res => {
      console.log(res);
    });
  };

  render() {
    return <div>{}</div>;
  }
}
