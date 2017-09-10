module.exports = class Layout {
  constructor(document) {
    this.element = document.createElement('div');
    this.element.className = 'mdl-layout mdl-js-ayout tj-layout-transparent';
    this.header = document.createElement('header');
    this.header.className = "mdl-layout__header mdl-layout__header-transparent";
    this.element.appendChild(header);
  }
}
