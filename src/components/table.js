import React, {Component} from 'react';
import DropdownHeader from './dropdownHeader';
import Button from './button';
import CircleIcon from './circleIcon';

class Table extends Component {
  constructor(props){
    super(props)
    this.state = {
      showTable: false,
      showDetail: false,
      curShowDataNum: 2,
      incrementShowNum: 2,
    }
  }

  handleOpenTableClick = () => {
    let showTable = !this.state.showTable
    this.setState((showTable) => ({
      showTable
    }))
  }

  renderHeader = () => {
    return this.props.cols.map((col, colIx) => {
      return <th key={colIx} style={this.getCellStyle()}>{col}</th>
    })
  }

  renderData = () => {
    let dataBatch = this.props.data.slice(0,this.state.curShowDataNum)
    return dataBatch.map((row, rowIx) => {
      return (
        <tr key={rowIx} className="extendable-tbl-row"><td><CircleIcon /></td>
        {
          this.props.cols.map((col, colIx) => {
            if(row[col]){
              return <td key={col} style={this.getCellStyle()}>{row[col]}</td>
            }
          })
        }
          <td><Button
            text="details"
            handleClick={this.handleDetailClick}/>
          </td>
        </tr>
      )
    })
  }

  getCellStyle = () => {
    const len = this.props.cols.length
    const div = Math.floor(100 / len)
    const divStyle = { width: div }
  }

  renderTable = () => {
    return (
      <>
        <div className='extendable-table-wrapper'>
          <table className='extendable-table'>
            <thead>
              <tr>
                <th style={{width: '30px'}}></th>{this.renderHeader()}
              </tr>
            </thead>
            <tbody>{this.renderData()}</tbody>
          </table>
        </div>


        <div className='bottom-button-wrapper'>
          <Button
            text="more"
            handleClick={this.handleMoreClick}
          />
        </div>
      </>
    )
  }

  handleMoreClick = () => {
    let newNum = this.state.curShowDataNum + this.state.incrementShowNum
    this.setState((curShowDataNum,incrementShowNum) => ({
      curShowDataNum: newNum
    }))
  }

  render(){
    return (
      <div className='extendable-table-container'>
        <DropdownHeader
          objName={this.props.objName}
          handleClick={this.handleOpenTableClick}
        />
        {this.state.showTable && this.renderTable()}
      </div>
    )
  }
}
export default Table;
