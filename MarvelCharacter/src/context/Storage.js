import React, {Component} from 'react';
import axios from 'axios';

export const StorageContext = React.createContext();

export default class Storage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterData: [],
      letters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    };
  }

  fetchData = async () => {
    try {
      const {letters} = this.state;
      const random = letters.charAt(Math.floor(Math.random() * letters.length));
      const {data, status} = await axios.get(
        'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=' +
          `${random}` +
          '&ts=1&apikey=6c65c3b406d1f776dadf30966d64eff8&hash=145f0238eb1a0cd4252fc27907da9ee7',
      );

      const {results} = data.data;

      if (status == 200) {
        this.setState({characterData: results});
      }
    } catch (error) {
      this.setState({characterData: []});
    }
  };

  componentDidMount = () => this.fetchData();

  render() {
    const {children} = this.props;
    const {characterData} = this.state;
    return (
      <StorageContext.Provider
        value={{
          characterData,
        }}>
        {children}
      </StorageContext.Provider>
    );
  }
}
