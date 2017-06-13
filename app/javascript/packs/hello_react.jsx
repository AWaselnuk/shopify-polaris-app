// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Page} from '@shopify/polaris'
import '@shopify/polaris/styles.css'

const App = props => (
  <div>
    <Page title="Your Product Listing" primaryAction={{content: 'View', disabled: true}}>
      <Hello name="React" />
    </Page>
  </div>
)

const Hello = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  const appRoot = document.getElementById('AppRoot');

  ReactDOM.render(
    <App />,
    appRoot,
  )
})
