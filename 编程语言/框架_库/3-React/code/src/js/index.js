class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: 'ss',
    }
    this.changeSearchVal = this.changeSearchVal.bind(this);
  }

  changeSearchVal(val) {
    this.setState({
      searchVal: val,
    })
    console.log(2,this)

  }


  render() {
    return (
      <div>
        <Search searchVal={this.state.searchVal}  changeSearchVal={this.changeSearchVal}/>
        {this.state.searchVal}
      </div>
    )
  }
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      searchVal: props.searchVal,
    }
    this.changeSearchVal = this.changeSearchVal.bind(this);
  }
  changeSearchVal(e) {
    this.props.changeSearchVal(e.target.value);
    console.log(this)
    // this.setState({
    //   val: e.target.value
    // })
  }
  render() {
    return (
      <div>
        <input value={this.props.searchVal} onChange={this.changeSearchVal}></input>
      </div>
    )
  }
}

ReactDOM.render(
  <Product />,
  document.getElementById('root')
);


