# Training FC

[![Codeship Status for jayhkim23/training-fc](https://app.codeship.com/projects/b5fe3a90-9507-0137-4b99-4a14bc9dc6b5/status?branch=master)](https://app.codeship.com/projects/357065)

Training FC is an app that allows users to be able to discuss and organize soccer training sessions with fellow users as an alternative to pick-up soccer games to enhance their soccer skills and fitness levels.

#Features
- Users are able to search for training sessions created by other users based on location (city or state) by using the React search bar on the homepage
- Users can create their own training session using a React form
- Users are able to discuss and organize the practice schedule via chatting with other users based on a chat system implemented via Rails ActionCable

# Tech/Framework Used
React: ~15.4.2
Ruby version: 2.4.5

#Database creation & initialization
- Run `bundle exec rake db: create`
- Run `bundle exec rake db: migrate`
- Run `bundle exec rake db:seed`
