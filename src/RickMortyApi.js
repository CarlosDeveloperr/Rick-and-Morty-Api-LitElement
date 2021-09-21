import { LitElement, html, css } from "lit";
//componentes
import "./components/GetData";
import "./components/ApiTemplate";
//Estilos
import style from "./styles/RickMortyStyle";
export class RickMortyApi extends LitElement {
  static get properties() {
    return {
      wiki: { type: Array },
    };
  }

  static get styles() {
    return [style];
  }

  constructor() {
    super();

    this.wiki = [];
    this.addEventListener("ApiData", (e) => {
      // console.log(e.detail.data);
      this._dataFormat(e.detail.data);
    });
  }

  _dataFormat(data) {
    let characters = [];
    data["results"].forEach((character) => {
      characters.push({
        img: character.image,
        name: character.name,
        species: character.species,
        status: character.status,
      });
    });
    this.wiki = characters;
  }
  render() {
    return html`
      <get-data
        url="https://rickandmortyapi.com/api/character"
        method="GET"
      ></get-data>
      <api-template></api-template>
      <div class="container">${this.dataTemplate}</div>
    `;
  }

  get dataTemplate() {
    return html`${this.wiki.map(
      (character) => html`
        <div class="card">
          <div class="card-content">
            <h2>${character.name}</h2>
            <img src="${character.img}" alt="" />
            <p>${character.species} | ${character.status}</p>
          </div>
        </div>
      `
    )}`;
  }
}
