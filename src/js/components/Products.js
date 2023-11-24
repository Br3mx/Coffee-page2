import { select, templates } from '../settings.js';
import { utils } from '../utils.js';

class Product {
  constructor(id, data){
    const thisProduct = this;
    thisProduct.id = id;
    thisProduct.data = data;

    thisProduct.renderProduct();
  }

  renderProduct(){
    const thisProduct = this;

    const generatedHTML = templates.textProduct(thisProduct.data);

    thisProduct.element = utils.createDOMFromHTML(generatedHTML);


    thisProduct.listProductContainer = document.querySelector(select.containerOf.listProduct);
    
    thisProduct.listProductContainer.appendChild(thisProduct.element);

  }
}

export default Product;
