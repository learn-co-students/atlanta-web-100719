### Introduction to Internet

![](https://media.giphy.com/media/zhbrTTpmSCYog/giphy.gif)

#### SWABTs

- [ ] Explain how the internet works
- [ ] Define the world wide web
- [ ] Client - Server Model
- [ ] Request - Response Cycle
- [ ] Using Postman client to make a GET request
- [ ] Utilizing the browser to make a request and see a response
- [ ] Making a web server with Rack

#### History of the internet

The internet is a network of computers all connected by cables. Most often, it is a network of smaller networks together. It is commonly cited that internet was developed by military through DARPA (Department of Defense Advanced Research Projects Agency) and was first connected in October 1969. It really was the result of a few different types of technologies that came together to make the technology of the internet possible.

These networks are connected through literal cables and the reason that we can get information from one continent to another is through underwater fiber optic cables. These cables are thick (for a cable) and branch of at a different points until they eventually reach your wall where you likely have a WiFi router installed.

![submarine cable cross section](https://qph.fs.quoracdn.net/main-qimg-4c18c913f1d91237660b4bce8e558893.webp)

Fun fact, the internets largest foe isn't governments, thieves or corporations. It's probably sharks. They bite the cables and no one knows exactly why.

![](https://media.giphy.com/media/14y3bdRzH8aT0k/giphy.gif)

The World Wide Web is a service that exists on top of the internet and is commonly how most people consumer and distribute information on the internet. The web was created in 1989 by Sir Tim Berners-Lee and his colleagues at CERN (European Organization for Nuclear Research).

[Click here to see the first webpage published](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/TheProject.html)

What distinguishes the web from the internet is that it contains websites and webpages which are connected through hypertext links which are composed of a URI (Uniform Resource Identifier) and some text. Websites on the internet are written in HTML and are accessible in browsers which communicate using the HTTP or HTTPs protocol and can render HTML (Hypertext Markup Language).

Sir Tim Berners-Lee and his colleagues created the internet as a social invention in order to connect people in the world. he said that he didn't ask for permission when he created it, he just did it. That's directive for you to also be creative and find a need for your own inventions.

### How the Web Works

HTTP (Hyper Text Transfer Protocol) is the language of the web and describes how webpages and files are sent over the internet. The protocol is based on a model of client and server: the client is either a program or a browser and the server is the computer that has information about the web page.

The server that we make this request to is always located using a URL or URI which is composed of a few parts. Consider the URI: ``https://google.com``. The first part is the protocol ``http://`` or ``https://`` at the beginning of the URI, which describes the language that we're using to communicate with that website. The next is the domain which can either be an IP address or a string like ``mail.google.com``. When a domain is formatted as a string, we can divide each part of the string into separate parts. ```.com``` is the top level domain, ```google``` is the second level domain, and we can continue with subdomain like ```mail``` in the example above. Following the domain is a port address which is formatted like ```mail.google.com:80```, but these ports are implicit when accessing servers over either HTTP or HTTPS. And lastly is the resource that you want from this domain.

### Making Requests from Postman Client

(Postman)[https://www.getpostman.com/] is a client that lets you make all type of requests in a fairly easy to use UI. You can download it free from its website and it's great for testing APIs as well as learning how different types of requests work and what's needed for each.

### What happens when you click a link?

![surfing the net](https://media.giphy.com/media/eCwAEs05phtK/giphy.gif)

As we are browsing the internet and we click a link or type an address to our address bar, we say that a request is being made to a server. We're asking another computer somewhere else in the world to send us the webpage (a document) or some other information over the internet so that our browser can read it and present it to us. What exactly our browser gets back from the server is what we call a response and this entire cycle is called the request-response lifecycle. When we make a request, we should get a response.

There's actually a bunch of stuff what happens after the request is fired off and before the server even knows about the request. This whole process is called DNS lookup and is how we translate a domain name (or a string of text) into an IP address which is the permanent address of a web server.

When the browser receives the response, it has some information about the response itself, like its status, as well as a response body. The response body in the case of webpages is the actual HTML of the page. When the browser begins to read this HTML, it sometimes sees that other resources need to be requested for the webpage to be complete. These are usually things like images, fonts, data or scripts.

In a very specific order, the browser loads all the assets it needs and begins to render the page. The HTML defines the structure as well as most of the external assets needed. The CSS defines how the page should look. The JS defines how the page will behave once loaded and how the user can interact with it.

### Requests and Response In-Depth

#### Requests

Breaking down the anatomy of requests we can see that there are a few distinct pieces. The request is made up of a request method, the requested resource's path, the protocol, the user-agent, some headers, and a request body.

````
Headers are extra information that we send that aren't part of the request body itself, but tells the server how to formulate the response.
````

````
GET / HTTP/1.1
User-Agent: Mozilla/4.0 (compatible; MSIE5.01; Windows NT)
Host: mail.google.com
Accept-Language: en-us
Accept-Encoding: gzip, deflate
Connection: Keep-Alive
````

The types of request methods, also called HTTP verbs that we'll see here are GET, POST, PATCH, DELETE which map to READ, CREATE, UPDATE and DESTROY pretty nicely at first. These allow us to do most of the work that is necessary on the internet.

The main difference between GET, POST and PATCH requests is that both POST and PATCH requests will have a request body which is infromation that we send to the server to be processed. We'll talk about ways to format that information later on.

#### Responses

HTTP Responses are formatted similarly to requests except for a few components. They have the protocol listed, the response status, some headers, and most responses will have a response body attached.

Here, headers are extra information that the server wants to communicate with the browser about this request. This could be information on how to cache the response body or just information about the server itself.

The two most important pieces to keep in mind are the status code and the response body. The status code tells us in summary what happened. When you got to a web page on your browser and you see what you requested, most likely the response code is 200 OK. Other common response codes are `404 Not Found` and `500 Internal Server Error`.

````
HTTP/1.1 404 Not Found
Date: Sun, 18 Oct 2012 10:35:20 GMT
Server: Apache/2.2.14 (Win32)
Content-Length: 230
Connection: Closed
Content-Type: text/html; charset=iso-8859-1
...

````

### Building with Rack

Rack is one of the easiest tools that we can use to build a web server and it's what web server framework like Rails and Sinatra use to take in requests and send responses back.

The first that we need for our application is a new directory, and in that directory we'll need a `Gemfile` which will load the `rack` gem into our project.

The second thing that we need is a `config.ru` file. This file tells Rack how to run our webserver. It is both configuration and executable code. We will use it to tell Rack how to start our web application. In this file, we will require the `rack` gem. Let's leave this here while we set up our actual applicaiton.

The third thing that we need to do is to create an `app.rb` file which will hold all of our business logic (meaning the logic that the server will use to receive and respond to requests). Create an `App` class with a `call` instance method that accepts an environment hash and returns an array of a status code (as a number or string), some headers (as a hash), and a body (as an enumerable).

```ruby
# gemfile
source "https://rubygems.org"

gem "rack"
gem "pry"
gem "shotgun"
```

```ruby
# config.ru
require 'rack'
require_relative './app'

run App.new
```

```ruby
# app.rb
class App
  def call(environment_hash)
    status_code = 200
    header = {}
    body = ['hello'] # or {}

    return [status_code, header, body]
  end
end
```

Lastly, we will require the `app.rb` file in our `config.ru` fiel and add the line `run App.new`. Now our application is ready to run, so we'll go to our Terminal and use the `rackup` command to run the server and navigate to `localhost:9292`

We talked about how to deconstruct this URI along with the port. And lastly, `shotgun` gem will allow us to automatically restart the server on file changes in the current directory.

Inspect the environment hash by printing it to the console. This is hard to read, so we can use a utility provided by Rack to get some more context. Create a new variable in the `App#call` method called `req` and set it equal to `Rack::Request.new(<Your environment hash variable>)`.

Now we can inspect the path with `req.path`, use conditionals to respond to different types of paths with the match method `req.path.match("/")`, write a basic template as the body of the response with HTML.

---

### External Resources

- [First Webpage Published by Tim Berners-Lee](https://www.w3.org/History/19921103-hypertext/hypertext/WWW/TheProject.html)
- [URI \(uniform resources identifier\)](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier)
- [URI vs URL](https://stackoverflow.com/questions/176264/what-is-the-difference-between-a-uri-a-url-and-a-urn)
- [HTTP \(Hypertext Transfer Protocol\)](https://www.w3schools.com/tags/ref_httpmethods.asp)
- [HTTP Status Rappers](http://httpstatusrappers.com/)
- [DNS lookup](https://en.wikipedia.org/wiki/Domain_Name_System)
- [Shark Attacks Underwater Internet Cables](https://www.youtube.com/watch?v=XMxkRh7sx84)
- [Postman––Desktop Application for making HTTP Requests](https://www.getpostman.com/apps)
- [RestClient––ruby gem that allows us to make HTTP requests](https://github.com/rest-client/rest-client)
- [Zuckerberg Explains the Internet to Congress](https://www.youtube.com/watch?v=ncbb5B85sd0)
- [How the Internet Works in 5 Minutes](https://www.youtube.com/watch?v=7_LPdttKXPc)
- [How does HTTPS Work? Comic](https://howhttps.works/)
- [History of Submarine Cables](https://www.youtube.com/watch?v=Ve810FHZ1CQ)
- Map of submarine cables:
- ![underwater cable map](https://i.redd.it/eo6248sth0pz.png)
