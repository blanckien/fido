App.Post.FIXTURES = [{
  id: 1,
  title: "Octopress",
  author: "imathis",
  publishedAt: new Date('12-27-2012'),
  intro: "Octopress is a super cool __blogging__ framework",
  extended: "## What is Octopress?\n"
   +"\n"
   +"Octopress is [Jekyll](https://github.com/mojombo/jekyll) blogging at its finest.\n"
   +"\n"
   +"1. **Octopress sports a clean responsive theme** written in semantic HTML5, focused on readability and friendliness toward mobile devices.\n"
   +"2. **Code blogging is easy and beautiful.** Embed code (with [Solarized](http://ethanschoonover.com/solarized) styling) in your posts from gists, jsFiddle or from your filesystem.\n"
   +"3. **Third party integration is simple** with built-in support for Pinboard, Delicious, GitHub Repositories, Disqus Comments and Google Analytics.\n"
   +"4. **It's easy to use.** A collection of rake tasks simplifies development and makes deploying a cinch.\n"
   +"5. **Ships with great plug-ins** some original and others from the Jekyll community &mdash; tested and improved.\n"
   +"\n"
   +"\n"
   +"## Documentation\n"
   +"\n"
   +"Check out [Octopress.org](http://octopress.org/docs) for guides and documentation.\n"
   +"\n"
   +"\n"
   +"## Contributing\n"
   +"\n"
   +"[![Build Status](https://travis-ci.org/imathis/octopress.png?branch=master)](https://travis-ci.org/imathis/octopress)\n"
   +"\n"
   +"We love to see people contributing to Octopress, whether it's a bug report, feature suggestion or a pull request. At the moment, we try to keep the core slick and lean, focusing on basic blogging needs, so some of your suggestions might not find their way into Octopress. For those ideas, we started a [list of 3rd party plug-ins](https://github.com/imathis/octopress/wiki/3rd-party-plugins), where you can link your own Octopress plug-in repositories. For the future, we're thinking about ways to easier add them them into our main releases.\n"
   +"\n"
   +"\n"
   +"## License\n"
   +"(The MIT License)\n"
   +"\n"
   +"Copyright © 2009-2013 Brandon Mathis\n"
   +"\n"
   +"Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the ‘Software’), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n"
   +"\n"
   +"The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n"
   +"\n"
   +"THE SOFTWARE IS PROVIDED ‘AS IS’, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n"
   +"\n"
   +"\n"
   +"#### If you want to be awesome.\n"
   +"- Proudly display the 'Powered by Octopress' credit in the footer.\n"
   +"- Add your site to the Wiki so we can watch the community grow.\n"
   +""
}, {
  id: 2,
  title: "Ruby on Rails",
  author: "community",
  publishedAt: new Date('12-31-2012'),
  intro: "Rails is a super *web application* framework",
  extended: "## Welcome to Rails\n"
   +"\n"
   +"Rails is a web-application framework that includes everything needed to\n"
   +"create database-backed web applications according to the\n"
   +"[Model-View-Controller (MVC)](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)\n"
   +"pattern.\n"
   +"\n"
   +"Understanding the MVC pattern is key to understanding Rails. MVC divides your\n"
   +"application into three layers, each with a specific responsibility.\n"
   +"\n"
   +"The _View layer_ is composed of \"templates\" that are responsible for providing\n"
   +"appropriate representations of your application's resources. Templates can\n"
   +"come in a variety of formats, but most view templates are HTML with embedded\n"
   +"Ruby code (ERB files).\n"
   +"\n"
   +"The _Model layer_ represents your domain model (such as Account, Product,\n"
   +"Person, Post, etc.) and encapsulates the business logic that is specific to\n"
   +"your application. In Rails, database-backed model classes are derived from\n"
   +"`ActiveRecord::Base`. Active Record allows you to present the data from\n"
   +"database rows as objects and embellish these data objects with business logic\n"
   +"methods. Although most Rails models are backed by a database, models can also\n"
   +"be ordinary Ruby classes, or Ruby classes that implement a set of interfaces\n"
   +"as provided by the Active Model module. You can read more about Active Record\n"
   +"in its [README](activerecord/README.rdoc).\n"
   +"\n"
   +"The _Controller layer_ is responsible for handling incoming HTTP requests and\n"
   +"providing a suitable response. Usually this means returning HTML, but Rails\n"
   +"controllers can also generate XML, JSON, PDFs, mobile-specific views, and\n"
   +"more. Controllers manipulate models and render view templates in order to\n"
   +"generate the appropriate HTTP response.\n"
   +"\n"
   +"In Rails, the Controller and View layers are handled together by Action Pack.\n"
   +"These two layers are bundled in a single package due to their heavy interdependence.\n"
   +"This is unlike the relationship between Active Record and Action Pack, which are\n"
   +"independent. Each of these packages can be used independently outside of Rails. You\n"
   +"can read more about Action Pack in its [README](actionpack/README.rdoc).\n"
   +"\n"
   +"## Getting Started\n"
   +"\n"
   +"1. Install Rails at the command prompt if you haven't yet:\n"
   +"\n"
   +"        gem install rails\n"
   +"\n"
   +"2. At the command prompt, create a new Rails application:\n"
   +"\n"
   +"        rails new myapp\n"
   +"\n"
   +"   where \"myapp\" is the application name.\n"
   +"\n"
   +"3. Change directory to `myapp` and start the web server:\n"
   +"\n"
   +"        cd myapp\n"
   +"        rails server\n"
   +"\n"
   +"   Run with `--help` or `-h` for options.\n"
   +"\n"
   +"4. Go to http://localhost:3000 and you'll see: \"Welcome aboard: You're riding Ruby on Rails!\"\n"
   +"\n"
   +"5. Follow the guidelines to start developing your application. You may find\n"
   +"   the following resources handy:\n"
   +"    * [Getting Started with Rails](http://guides.rubyonrails.org/getting_started.html)\n"
   +"    * [Ruby on Rails Guides](http://guides.rubyonrails.org)\n"
   +"    * [The API Documentation](http://api.rubyonrails.org)\n"
   +"    * [Ruby on Rails Tutorial](http://ruby.railstutorial.org/ruby-on-rails-tutorial-book)\n"
   +"\n"
   +"## Contributing\n"
   +"\n"
   +"We encourage you to contribute to Ruby on Rails! Please check out the\n"
   +"[Contributing to Ruby on Rails guide](http://edgeguides.rubyonrails.org/contributing_to_ruby_on_rails.html) for guidelines about how to proceed. [Join us!](http://contributors.rubyonrails.org)\n"
   +"\n"
   +"## Code Status\n"
   +"\n"
   +"* [![Build Status](https://api.travis-ci.org/rails/rails.png)](https://travis-ci.org/rails/rails)\n"
   +"* [![Dependencies](https://gemnasium.com/rails/rails.png?travis)](https://gemnasium.com/rails/rails)\n"
   +"\n"
   +"## License\n"
   +"\n"
   +"Ruby on Rails is released under the [MIT License](http://www.opensource.org/licenses/MIT)."
}];