---
template: post
title: My First Ruby On Rails
slug: posts/FirstRubyOnRails
draft: false
date: 2019-03-18T02:17:47.256Z
description: My First Attemp to Ruby on Rails and comparing it with java
category: programming
tags:
  - programming
  - ruby
  - java
---
### What makes ruby different from java?

* Compile is not needed. You just run it directly.
* Instead of {}, you use end keyword.

```ruby
	def set_name=(name)
		@name = name
	end
```

* defining static field uses `@`
* java: import, ruby: require
* all fields are private, you need method to access it. Getter method
* no data types
* java: foo = new Foo( “hi” ). Ruby: foo = Foo.new(“hi”) 
* constructor methods are always named as `initialize`
* java: null, Ruby: nil
* No Method Overloading! 

## Syntax

#### Declaring class

```ruby
class ClassName
    
end
```

\*extending class

```ruby
class ClassName < AbstractClassName

end
```

same as `class ClassName extends AbstractClassName` in java

#### Methods

```ruby
def methodName
    
end
```

\*private methods

```ruby
...
private
	def methodName
    
    end
	
	def methodName2
        
    end
```

#### Instance Variable Declaration

@variableName

```ruby
def show
   @article = Article.find(params[:id]); 
end
```

in rails, the instance variable is rendered to views without any return/render method

#### before command

execute certain method before executing the chosen method

`before_action :methodName` 

* `only:[:someMethod]` execute before only on declared method

```ruby
class ClassName 
	before_action :beforeMethod, only: [:someMethod1, :someMethod2,..]
	...
    private
		def beforeMethod
            @hoge = Hoge.find(params[:id])
        end
end
```

* redirect_to
* render

#### Validations

Refer to: https://guides.rubyonrails.org/active_record_validations.html

## FrontEnd

#### Using ruby syntax in template

```erb
<body>
    <% ruby commands %>
</body>
```

\*ruby syntax with output (needs `=`)

```erb
<body>
    <%= ruby commands %>
</body>
```

\*adding html attributes

```erb
<%= ruby commands, class: "form-control", placeholder: "title of article", autofocus: true %>
```

`ruby commands, attribute1: "hoge", ...`

\*ruby tag with instance variable

```erb
<%= form_for @variableName do |rename| %>
    <%= rename.label %>
        ...
```

\*adding html attributes in ruby tag with intance variable

```erb
<%= form_for(@article, :html => {class: "form-horizontal", role: "form"}) do |f| %>
```

#### render

used in views template to render another template. same as Tags in play 1

```html
<body>
    <%= render 'templateName' %>
</body>
```

Will look into `views/className` directory by default depending on what controller class you are in

```html
<body>
    <%= render 'layouts/templateName' %>
</body>
```

will look into `views/layouts` directory

#### forms

sample:

```html
<!-- form_for generate form tag in html -->
<%= form_for @article do |f| %>
    <p>
        <%= f.label :title %><br/>
        <%= f.text_field :title %>
    </p>
    <p>
        <%= f.label :description %><br/>
        <%= f.text_area :description %>
    </p>
    <p>
        <%= f.submit %>
    </p>
<% end %>
```

`form_for` tag generates `<form>` tag in html

#### Pass variable to tags template

```erb
<%= render 'path/templateName', passingVariableName: @instanceVariableName %>
```

## Rails Tags

```erb
<%= pluralize(@articles.errors.count, "error")%>
```

pluralize the word based on parameters count. 

```erb
<%= link_to "Label", prefix_path %>
```

| Prefix       | Verb | URI Pattern | Controller#Action       |
| ------------ | ---- | ----------- | ----------------------- |
| prefix       | GET  | /prefix     | controller#prefix       |
| samplePrefix | GET  | /prefix/:id | controller#samplePrefix |

\*with parameters

```erb
<%= link_to "Label", samplePrefix_path(obj) %>
```

\*with html attributes

```erb
<%= link_to "Delete", prefix_path(article), method: :delete, data: {confirm: "Are you sure?"} %>
```

creates html link tag

## Useful tips

* `Object.methods`
  * list all the available method of the object
* `Rails routes`
  * list all the routes of the projects

## Useful Tools

* `Balsamiq Project` - wireframing tool https://www.balsamiq.com

## Gems (libraries)

* `Bootstrap` - https://github.com/twbs/bootstrap-sass

## References

#### Official Site

https://www.ruby-lang.org/

https://guides.rubyonrails.org/

#### Udemy

https://www.udemy.com/the-complete-ruby-on-rails-developer-course/

#### Ruby on Rails (Framework)

https://rubyonrails.org/

https://weblog.rubyonrails.org/### What makes ruby different from java? 

* Compile is not needed. You just run it directly.
* Instead of {}, you use end keyword.

```ruby
	def set_name=(name)
		@name = name
	end
```

* defining static field uses `@`
* java: import, ruby: require
* all fields are private, you need method to access it. Getter method
* no data types
* java: foo = new Foo( “hi” ). Ruby: foo = Foo.new(“hi”) 
* constructor methods are always named as `initialize`
* java: null, Ruby: nil
* No Method Overloading! 

## Syntax

#### Declaring class

```ruby
class ClassName
    
end
```

\*extending class

```ruby
class ClassName < AbstractClassName

end
```

same as `class ClassName extends AbstractClassName` in java

#### Methods

```ruby
def methodName
    
end
```

\*private methods

```ruby
...
private
	def methodName
    
    end
	
	def methodName2
        
    end
```

#### Instance Variable Declaration

@variableName

```ruby
def show
   @article = Article.find(params[:id]); 
end
```

in rails, the instance variable is rendered to views without any return/render method

#### before command

execute certain method before executing the chosen method

`before_action :methodName` 

* `only:[:someMethod]` execute before only on declared method

```ruby
class ClassName 
	before_action :beforeMethod, only: [:someMethod1, :someMethod2,..]
	...
    private
		def beforeMethod
            @hoge = Hoge.find(params[:id])
        end
end
```

* redirect_to
* render

#### Validations

Refer to: https://guides.rubyonrails.org/active_record_validations.html

## FrontEnd

#### Using ruby syntax in template

```erb
<body>
    <% ruby commands %>
</body>
```

\*ruby syntax with output (needs `=`)

```erb
<body>
    <%= ruby commands %>
</body>
```

\*adding html attributes

```erb
<%= ruby commands, class: "form-control", placeholder: "title of article", autofocus: true %>
```

`ruby commands, attribute1: "hoge", ...`

\*ruby tag with instance variable

```erb
<%= form_for @variableName do |rename| %>
    <%= rename.label %>
        ...
```

\*adding html attributes in ruby tag with intance variable

```erb
<%= form_for(@article, :html => {class: "form-horizontal", role: "form"}) do |f| %>
```

#### render

used in views template to render another template. same as Tags in play 1

```html
<body>
    <%= render 'templateName' %>
</body>
```

Will look into `views/className` directory by default depending on what controller class you are in

```html
<body>
    <%= render 'layouts/templateName' %>
</body>
```

will look into `views/layouts` directory

#### forms

sample:

```html
<!-- form_for generate form tag in html -->
<%= form_for @article do |f| %>
    <p>
        <%= f.label :title %><br/>
        <%= f.text_field :title %>
    </p>
    <p>
        <%= f.label :description %><br/>
        <%= f.text_area :description %>
    </p>
    <p>
        <%= f.submit %>
    </p>
<% end %>
```

`form_for` tag generates `<form>` tag in html

#### Pass variable to tags template

```erb
<%= render 'path/templateName', passingVariableName: @instanceVariableName %>
```

## Rails Tags

```erb
<%= pluralize(@articles.errors.count, "error")%>
```

pluralize the word based on parameters count. 

```erb
<%= link_to "Label", prefix_path %>
```

| Prefix       | Verb | URI Pattern | Controller#Action       |
| ------------ | ---- | ----------- | ----------------------- |
| prefix       | GET  | /prefix     | controller#prefix       |
| samplePrefix | GET  | /prefix/:id | controller#samplePrefix |

\*with parameters

```erb
<%= link_to "Label", samplePrefix_path(obj) %>
```

\*with html attributes

```erb
<%= link_to "Delete", prefix_path(article), method: :delete, data: {confirm: "Are you sure?"} %>
```

creates html link tag

## Useful tips

* `Object.methods`
  * list all the available method of the object
* `Rails routes`
  * list all the routes of the projects

## Useful Tools

* `Balsamiq Project` - wireframing tool https://www.balsamiq.com

## Gems (libraries)

* `Bootstrap` - https://github.com/twbs/bootstrap-sass

## References

#### Official Site

https://www.ruby-lang.org/

https://guides.rubyonrails.org/

#### Udemy

https://www.udemy.com/the-complete-ruby-on-rails-developer-course/

#### Ruby on Rails (Framework)

https://rubyonrails.org/

https://weblog.rubyonrails.org/
