# Fellowship Finder

Fellowship Finder is a web app that allows users to find and meet people with similar interests in games.

The app allows users to create profiles, filter through other users based on interests and meetup logistics, add friends, and plan events. Fellowship Finder is meant to provide a platform for people to make friends with shared interests and streamline the process of organizing tabletop sessions.

## Setup
1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/). (We used Node.js version 18.x.x and have not tested on other versions)

2. Clone this repository and navigate into the project directory

3. Install the requirements

   ```bash
   $ npm install
   ```

4. Make a copy of the example environment variables file

   On Linux systems: 
   ```bash
   $ cp .env.example .env
   ```
   On Windows:
   ```powershell
   $ copy .env.example .env
   ```
5. Add your [API key](PUT LINK TO API WEBSITE INSIDE THESE PARENTHESES) to the `.env` file

6. Run the app

   ```bash
   $ npm start
   ```

7. You should now be able to access the app at [http://localhost:7000](http://localhost:7000)

## Stack

Node: v18

Database: mySQL

ORM: Sequelize

Deployment site: AWS

Server: Express

Authentication: Passport and Google auth

Client: React

Styling: Material-UI

Project management: Trello
