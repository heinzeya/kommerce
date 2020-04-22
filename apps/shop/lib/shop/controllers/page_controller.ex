defmodule Shop.PageController do
  use Shop, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
