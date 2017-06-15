// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Page, ResourceList, Thumbnail} from '@shopify/polaris'

// This gets magically converted to a stylesheet named 'application' via stylesheet_pack_tag
import '@shopify/polaris/styles.css'

// TODO: Switch out for client side API call
const products = ShopifyAPI.products;

const productItemRenderer = (product, index) => {
  const productItem = {
    url: `https://${ShopifyShop.url}/admin/products/${product.id}`,
    media: <Thumbnail source={product.images.map((img) => img.src)[0] || ''} alt={product.title} />,
    attributeOne: product.title,
    attributeTwo: product.product_type,
    attributeThree: `Tags: ${product.tags}`
  }

  return (
    <ResourceList.Item key={index} {...productItem} />
  );
}

const App = props => (
  <div>
    <Page title="Your Product Listing" primaryAction={{content: 'View', disabled: true}}>
      <ResourceList items={products} renderItem={productItemRenderer} />
    </Page>
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  const appRoot = document.getElementById('AppRoot');

  ReactDOM.render(
    <App />,
    appRoot,
  );
})
