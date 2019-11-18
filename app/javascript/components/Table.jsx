import React, { Component } from "react";
import './Table.css'


class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedData: [...this.props.data],
      data: [...this.props.data],
      sortKey: "",
      order: "ascd"
    };
  }

  onClickSortColumn(event, sortKey) {
    const data = [...this.state.data];
    let { order } = this.state;

    if (order === "ascd") {
      data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
      order = "desc";
    } else if (order === "desc") {
      data.sort((a, b) => b[sortKey].localeCompare(a[sortKey]));
      order = "ascd";
    }
    this.setState({ sortedData: data, order, sortKey: sortKey });
  }

  renderTableHeader() {
    const { sortKey, order } = this.state;
    if (!this.state.data.length > 0) {
      return;
    } else {
      let header = Object.keys(this.state.data[0]);
      return header.map((key, name) => {
        return (
          <th id={key} onClick={e => this.onClickSortColumn(e, key)} key={name}>
            {key}
            {sortKey
              ? order === "ascd"
                ? "⬆"
                : order === "desc"
                ? "⬇"
                : ""
              : ""}
          </th>
        );
      });
    }
  }

  renderTableData() {
    if (!this.state.data.length > 0) {
      return;
    } else {
      const usersData = [...this.state.sortedData];
      return usersData.map((users, usersId) => {
        const userData = Object.values(users);
        return (
          <tr key={usersId}>
            {userData.map((key, user) => (
              <td key={user}>{key}</td>
            ))}
          </tr>
        );
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <table className="user">
          <thead>
            <tr>{this.renderTableHeader()}</tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Table;
