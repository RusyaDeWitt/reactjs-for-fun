import { Component } from 'react'
import { Table } from 'react-bootstrap';

class Pokemons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      url: []
    };
  }

  componentDidMount(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")

    .then(res => res.json())

    .then(
      (res) => {
        this.setState({
          pokemons: res.results,
          url: res.results.url
        });
      },
      (error) => {
        this.setState({
          error
        });
      }
    )
  }

  render() {
      return(
        <Table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {this.state.pokemons.map(name=>(
                <tr>
                  <td>{name.name}</td>
                </tr>
          ))}
        </tbody>
        </Table>
      )
  }
}

export default Pokemons
