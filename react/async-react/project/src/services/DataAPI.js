import { API } from './API';

class DataAPI extends API {
  constructor(baseUrl = 'http https://swapi.co/api') {
    super(baseUrl);
  }

  getPerson(id) {
    let url = '/people';
    if (id) {
      url += `/${id}`;
    }
    return this.makeRequest({ url, method: 'GET' });
  }
}

class RickAndMortyAPI extends API {
  constructor(baseUrl = 'https://rickandmortyapi.com/api') {
    super(baseUrl);
  }

  getCharacter(id) {
    let url = '/character';
    if (id) {
      url += `/${id}`;
    }
    return this.makeRequest({ url, method: 'GET' });
  }

  getEpisodes() {
    const url = '/episode';
    return this.makeRequest({ url, method: 'GET' });
  }

  // searchCharacterByName(name) {
  //   const url = `/character/?name=${name}`;
  //   return this.makeRequest({ url, method: 'GET' });
  // }
}

export default new DataAPI();

export const RickAndMortyApi = new RickAndMortyAPI();