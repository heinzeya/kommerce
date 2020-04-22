# This file is responsible for configuring your umbrella
# and **all applications** and their dependencies with the
# help of the Config module.
#
# Note that all applications in your umbrella share the
# same configuration and dependencies, which is why they
# all use the same configuration file. If you want different
# configurations or dependencies per app, it is best to
# move said applications out of the umbrella.
import Config

config :shop,
  generators: [context_app: false]

# Configures the endpoint
config :shop, Shop.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "roDEyFi0TzfdsGyMnTUjckDC341jgHTeklfdpdmIebkdfBh7aZyyLKxIuQs6J61/",
  render_errors: [view: Shop.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Shop.PubSub, adapter: Phoenix.PubSub.PG2]

config :merchant,
  generators: [context_app: false]

# Configures the endpoint
config :merchant, Merchant.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "MYEYvkGQA2qc00OxQ1ottDxBeQmQjb1KYJmKuTnqyGwgVD8BRv5iEuJVOcSoKr7g",
  render_errors: [view: Merchant.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Merchant.PubSub, adapter: Phoenix.PubSub.PG2]

# Sample configuration:
#
#     config :logger, :console,
#       level: :info,
#       format: "$date $time [$level] $metadata$message\n",
#       metadata: [:user_id]
#

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
