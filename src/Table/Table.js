import { Component } from 'react';
import { Table } from 'react-bootstrap';





class Tables extends Component {
  constructor(props){
    super(props)
    var students2 : [] = []
    this.state ={
      name: "",
      surname: "",
      age: "",
      students: students2,
    }
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeSurname = this.handleChangeSurname.bind(this)
    this.handleChangeAge = this.handleChangeAge.bind(this)
  }


  handleChangeName(event){
    event.preventDefault();
    this.setState({
      name: event.target.value
    })
  }

  handleChangeSurname(event){
    event.preventDefault();
    this.setState({
      surname: event.target.value
    })
  }

  handleChangeAge(event){
    event.preventDefault();
    this.setState({
      age: event.target.value
    })
  }

  render(){
    var onSubmit = () => {
      var students2 : [] = this.state.students
      students2.push(this.state.students.push(this.state.name + "," + this.state.surname + "," + this.state.age))
      this.setState({
        students: students2
      })
      console.log(typeof this.state.students.push(this.state.name + "," + this.state.surname + "," + this.state.age))
    }

    return(
      <div>
        <input name="name" onChange={this.handleChangeName} value={this.state.name} />
        <input name="surname" onChange={this.handleChangeSurname} value={this.state.surname} />
        <input name="age" onChange={this.handleChangeAge} value={this.state.age} />
        <button onClick={()=>{onSubmit()}}>submit</button>


      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>
        </thead>
            <tbody>
                {this.state.students.map(students => {
                  return <tr>{students}</tr>;
                })}
            </tbody>
      </Table>
      </div>
    )
  }

}
export default Tables
