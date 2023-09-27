class CocktailBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            width: 100%;
            margin-bottom: 18px;
            background-color: #5B0888;
            overflow: hidden;
        }
        h1 {
            font-weight: lighter;
            color: #E4F1FF;
            text-align: left;
            padding: 10px;
            font-size: 35px;
            font-family: 'Lobster', cursive;
        }

        </style>

        <h1>Cocktail Collection</h1>`;
    }
}

customElements.define("cocktail-bar", CocktailBar);