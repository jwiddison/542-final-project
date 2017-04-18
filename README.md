# IS 542 Semester Final Project

### Author - Jordan Widdison

## Technologies

The main framework that this application is built in is Ruby on Rails.  There is a MySQL database that holds calendar information.  
The app and the database are both hosted on Heroku's free tier, so when you visit the URL where they're hosted ( https://jazzcollectivecalendar.herokuapp.com ) it might take a few seconds to 'wake up' the instances.

On top of Rails, this application uses SASS to pre-compile CSS.  I had never really used SASS before and have started learning it to complete this project.  It also uses Slim, which is an abbreviated and lightweight templating engine built for ruby and specifically for rails applications.  (See http://slim-lang.com/)

## Project Requirements

I have written a fair amount of both HTML (in .html.slim files) and CSS (in .scss files) to meet those requirements for this project.  The main funcitonality of the app is to display a web-based collaborative calendar for the Jazz Collective of Utah.

The calendar itself is a full javascript calendar (see https://fullcalendar.io).  All of the initialization for, interaction with, and customization of the calendar is done with JavaScript.  

Including all of the resources, and getting the JavaScript calendar up to the events stored in the MySQL database was quite the challenge.  I followed some of the tutorial here in order to complete that portion of the project: https://www.driftingruby.com/episodes/fullcalendar-events-and-scheduling

There is a full-calendar gem available for Ruby on Rails, but I decided to just use the JavaScript files themselves in order to learn more about how the calendar worked, and how to interact with it as a means of fulfilling the JavaScript portion of the requirement.

## Running Project

I would recommend simply seeing the live version of the project at https://jazzcollectivecalendar.herokuapp.com in order to view and test functionality on this application.  Running it locally requires installing Ruby 2.3.X, Ruby on Rails, and MySQL, cloning the repository, and running the command `bundle install` to install all the gems required for the project to run.
Next, create a database, and corresponding migrations using the command `ruby make db:create db:migrate` and finally run a local development server using `rails s` (shorthand for rails server).
