export const select = {
  templateOf: {
    textProduct: '#template-product',
  },
  containerOf: {
    pages: '#pages',
    listProduct: '.list-product',
    menuTitle: '.menu',
    
  },
  nav: {
    links: '.nav-links',
  },
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  }
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  }

};
export const templates = {
  textProduct: Handlebars.compile(document.querySelector(select.templateOf.textProduct).innerHTML),
};