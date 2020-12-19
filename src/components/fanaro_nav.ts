export default class FanaroNav extends HTMLElement {
  static readonly tag: string = "fanaro-nav";

  private static readonly template: string = `
    <style>
      a {
        display: inline-flex;
        align-items: center;
        font-size: 1.5rem;
        color: var(--text-color);
        text-decoration: none;
      }
      svg {
        padding-right: 10px;
      }
    </style>
    
    <nav>
      <a href="/">
        <svg width="50" height="50">
          <image width="50" height="50" href="/assets/logo_400.png" />
        </svg>
        <h1>fanaro.io</h1>
      </a>
    </nav>
  `;

  constructor() {
    super();

    const template: HTMLTemplateElement = document.createElement("template");
    template.innerHTML = FanaroNav.template;

    this.attachShadow({ mode: "open" });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }
}
