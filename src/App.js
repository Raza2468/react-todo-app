import React from 'react';

class todo extends React.Component {
  constructor() {
    super()
    this.state = {
      dat: [{ title: "Raza", pro: false }],
      value: ""
    }
  }
  Saveitem = () => {
    // d structuring
    let { dat, value } = this.state 
  //  new  data add ho raha hai or wo sara data false ha 
    let arr = [...dat, { title: value, pro: false }]
    this.setState({
      dat: arr,
      value: ""
    },
     () => {
      console.log(this.state.dat)
    })
  }
 
//  del
  del = (i) => {
    this.state.dat.splice(i, 1)
    this.setState({
    })
  }

  // edit k prom ma 2 value li
  edit = (index, v) => {
    // d structuring
    let { dat, value } = this.state

    dat[index].pro =  ! dat[index].pro
    this.setState({
      dat: [...dat ]
    })
    // console.log('s')
  }

  onChangeEdit = (text, index) => {
    let { dat, value } = this.state
    
   dat[index].title = text
    this.setState({ dat: [...dat] })
  }
render() {
    let {dat, value } = this.state
    return (<div>
      <h1>ma nahi kr sakta</h1>
      <input type="text" value={value}
        onChange={(e) => { this.setState({ value: e.target.value }) }} placeholder="enter the value" />
      <button onClick={this.Saveitem}>Saveitem!</button>
      <ul>
        {this.state.dat.map((v, i) => {
          return <li key={i}>
            {v.pro ? <input type="text" value={v.title} onChange={(e) => this.onChangeEdit(e.target.value, i)} /> : v.title}
            <button onClick={() => this.edit(i, v.title)}>edit</button>
            <button onClick={() => this.del(i)}>del</button>
          </li>
        })}
      </ul>
      {/* <h1>{this.state.value}</h1> */}
    </div>)
  }
}
export default todo;