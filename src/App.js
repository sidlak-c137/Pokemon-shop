import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Login from './components/Login';
import PokeDeck from './components/PokeDeck';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      signedIn: false,
      pokemon: [],
    }
  }

  componentDidMount() {
    this.getAllPokemons(0, 100);
  }

  getAllPokemons = async (offset, limit) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).catch((err) => console.log(err));
    this.getPokemonData(response.data.results);
  }

  getPokemonData = async (result) => {
    const pokemonArr = [];

    await Promise.all(
      result.map((item) => {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
        .then((result) => {
          pokemonArr.push(result.data);
        })
      })
    )
    
    pokemonArr.sort((a, b) => (a.id - b.id));
    console.log(pokemonArr);
    this.setState({pokemon: pokemonArr});
  }

  updateName = (name) => {
    this.setState({username: name, signedIn: true});
  }

  render() {

    const theme = createTheme({
      palette: {
        primary: {
          main: "#43a047"
        },
        secondary: {
          main: '#9c27b0'
        }
      }
    })

    const {username, signedIn, pokemon} = this.state;

    return (
      <div>
        <CssBaseline/>
        <ThemeProvider theme={theme}>
          <Header name={username}/>
          {
            !signedIn && <Login updateName={this.updateName}/>
          }
          {
            signedIn && <PokeDeck pokemon={pokemon}/>
          }
        </ThemeProvider>
      </div>
    )
  }

}

export default App;
