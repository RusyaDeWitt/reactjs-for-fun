import { Component } from 'react'

class Pokemons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }

  componentDidMount(){
    fetch("https://pokeapi.co/api/v2/berry-firmness/2/")

    .then(res => res.json())

    .then(
      (res) => {
        this.setState({
          pokemons: res.berries
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
        <div>
          <ul>
            {this.state.pokemons.map(name=>(
              <li>{name.name}</li>
            ))}
          </ul>
        </div>
      )
  }
}

export default Pokemons
