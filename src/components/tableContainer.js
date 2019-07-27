import React, {Component} from 'react';
import Table from './table';

class TableContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      headers: []
    }
  }

  componentDidMount() {
    const data = [
      {name: "nokia", age: 24, height: 60},
      {name: "maxb", age: 42, height: 70, more: "more"},
      {name: "babymutha", age: 9, height: 90},
      {name: "leikeli", age: 4, height: 60},
      {name: "2chains", age: 24, height: 60},
      {name: "boosie", age: 42, height: 60, more: "more"},
      {name: "gucci", age: 9, height: 60},
      {name: "TT", age: 4, height: 16},
    ]

    const headers = ["name", "age", "height", "other"]

    this.setState({
      data,
      headers
    })
  }

  render(){
    return (
      <div id='order-page'>
        {this.state.data.length &&
          <Table
            cols={this.state.headers}
            data={this.state.data}
            objName={"orders"}
          />
        }
      </div>
    )
  }
}
export default TableContainer;
