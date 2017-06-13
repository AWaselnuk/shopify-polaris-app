# WIP - SHOPIFY POLARIS APP

**WIP - This should not be considered an official Shopify guide or even a complete example at this point in time**

This app is a way to experiment with integrating [Shopify's Polaris design system](https://polaris.shopify.com/) with an embedded Shopify app.

## Setup

TODO

## Troubleshooting

### The puma webserver returns `HTTP parse error, malformed request`

As of puma version 3.9.1 this is caused by making a request to `http://localhost` from `https://`.
Shopify embedded apps make the request from `https`.

The solution is to [setup SSL on localhost](https://gist.github.com/tadast/9932075) and [configure puma to run via SSL](https://github.com/AWaselnuk/shopify-polaris-app/commit/8eef7db708943b9c82603eadf4b7418451505b68)
