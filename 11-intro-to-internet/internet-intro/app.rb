class App
  def call(environment_hash)
    status_code = 200
    header = {}
    req = Rack::Request::new(environment_hash)

    if req.path.match('/home')
      body = ["You're home!!!"]
      [status_code, header, body]
    else
      body = ["Hello there!"]
      [status_code, header, body]
    end
  end
end
