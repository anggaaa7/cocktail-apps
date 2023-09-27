class CocktailItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set cocktail(cocktail) {
        this._cocktail = cocktail;
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
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 25px;
            overflow: hidden;
        }
        .cocktail-poster {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
        }
        .cocktail-info {
            padding: 24px;
        }
        .cocktail-info > h2 {
            font-weight: lighter;
        }
        .cocktail-info > h3 {
            margin-top: 10px;
            font-weight: lighter;
            color: #9400FF;
        }
        .cocktail-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 15; 
        }
        </style>

        <img class="cocktail-poster" src="${this._cocktail.strDrinkThumb}" alt="Cocktail">
        <div class="cocktail-info">
            <h2>${this._cocktail.strDrink}</h2>
            <h3>${this._cocktail.strAlcoholic}</h3>
            <p>${this._cocktail.strInstructions}</p>
            <br>
            <h4>Ingredients:</h4>
            <li>${this._cocktail.strIngredient1}</li>
            <li>${this._cocktail.strIngredient2}</li>
            <li>${this._cocktail.strIngredient3}</li>
            <li>${this._cocktail.strIngredient4}</li>
            <li>${this._cocktail.strIngredient5}</li>
        </div>`;
    }
}

customElements.define("cocktail-item", CocktailItem);