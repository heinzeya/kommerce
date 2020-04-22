defmodule Merchant.PageController do
  use Merchant, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
