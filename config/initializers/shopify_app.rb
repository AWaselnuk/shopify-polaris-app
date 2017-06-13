ShopifyApp.configure do |config|
  config.application_name = "Shopify Polaris App"
  config.api_key = Figaro.env.shopify_app_key
  config.secret = Figaro.env.shopify_app_secret
  config.scope = "read_orders, read_products"
  config.embedded_app = true
end
