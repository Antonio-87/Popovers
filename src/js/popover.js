export default class InnFormPopover {
  constructor(element) {
    this.element = element;
    this.setTitle = "Popover title";
    this.setText =
      "And here's some amazing content. It's very engaging. Right?";
    this._activPopover = null;

    this.onClick = this.onClick.bind(this);
    this.element.addEventListener("click", this.onClick);
  }

  static get markup() {
    return `
        <div class="popover-container">
            <div class="arrow"></div>
            <h3 class="popover-title"></h3>
            <div class="popover-text"></div> 
        </div>
        `;
  }

  static get popoverContainerSelector() {
    return ".popover-container";
  }

  static get popoverArrowSelector() {
    return ".arrow";
  }

  static get popoverTitleSelector() {
    return ".popover-title";
  }

  static get popoverTextSelector() {
    return ".popover-text";
  }

  positionPopover(element) {
    const { top, left } = element.getBoundingClientRect();
    const topCalc = top - this.container.offsetHeight - this.arrow.offsetHeight;
    const leftCalc =
      left + (element.offsetWidth / 2 - this.container.offsetWidth / 2);
    this.container.setAttribute(
      "style",
      `top: ${topCalc}px; left: ${leftCalc}px`
    );
    this.arrow.setAttribute(
      "style",
      `left :${this.container.offsetWidth / 2 - this.arrow.offsetWidth + 1}px`
    );
  }

  bindToDOM() {
    const body = document.querySelector("body");

    body.insertAdjacentHTML("beforeend", InnFormPopover.markup);

    this.container = document.querySelector(
      InnFormPopover.popoverContainerSelector
    );
    this.arrow = this.container.querySelector(
      InnFormPopover.popoverArrowSelector
    );
    this.title = this.container.querySelector(
      InnFormPopover.popoverTitleSelector
    );
    this.text = this.container.querySelector(
      InnFormPopover.popoverTextSelector
    );
  }

  onClick() {
    if (!this._activPopover) {
      this.bindToDOM();
      this.title.textContent = this.setTitle;
      this.text.textContent = this.setText;
      this.positionPopover(this.element);
      this._activPopover = this.container;
    } else {
      this._activPopover.remove();
      this._activPopover = null;
    }
  }
}
