class LandingPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4"><span>Search</span> your <br> favourite <span>Movie</span></h1>
            </div>
        </div>
        `;
  }
}

customElements.define('landing-page', LandingPage);