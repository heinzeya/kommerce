use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :shop, Shop.Endpoint,
  http: [port: 4002],
  server: false

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :merchant, Merchant.Endpoint,
  http: [port: 4002],
  server: false
