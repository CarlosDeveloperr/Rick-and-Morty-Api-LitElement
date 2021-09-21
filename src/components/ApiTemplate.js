import { LitElement, html } from "lit-element";
import style from "../styles/ApiTemplateStyle";

export class ApiTemplate extends LitElement {
  static get styles() {
    return [style];
  }
  render() {
    return html`
      <div class="container">
        <h1>The <strong class="title">Rick and morty</strong> API</h1>
        <p class="title">LitElement</p>
      </div>
    `;
  }
}

customElements.define("api-template", ApiTemplate);
