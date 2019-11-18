import React, { Component } from "react";
import { renderServiceData } from "../services/renderServiceData";
import Table from "./Table";

class TableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  async componentDidMount() {
    const apiData = await renderServiceData().then(data => data);
    this.setState({ data: apiData });
  }

  render() {
    if (!this.state.data.length > 0) {
      return <h1>Loading...</h1>;
    } else {
      return <Table data={this.state.data} />;
    }
  }
}

export default TableContainer;
