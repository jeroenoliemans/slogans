# Slogans Project

A full-stack application for managing and displaying slogans with themes. This project consists of a Java Spring Boot backend (API) and an Angular frontend (app).

## Features
- Add, edit, and view slogans
- Manage themes for slogans
- RESTful API (Java Spring Boot)
- Modern Angular frontend

## Project Structure
- `api/` - Java Spring Boot backend
- `app/` - Angular frontend

## Getting Started

### Prerequisites
- Java 17+
- Node.js & npm
- Docker (for MySQL)

### Backend Setup (API)
1. Start MySQL using Docker:
   ```shell
   docker container run --name mysql_slogans --publish 3306:3306 --env MYSQL_ROOT_PASSWORD=slogan --detach mysql
   ```
2. Connect to MySQL and create the database/tables:
   ```shell
   mysql -u root -p slogans
   ```
   Then run:
   ```sql
   create database slogans;
   create table slogan (
     id int(3) unsigned zerofill not null auto_increment primary key,
     slogan varchar(250) not null,
     themeId int(3) default 1
   );
   insert into slogan set slogan = 'Save the earth';
   create table theme (
     id int(3) unsigned zerofill not null auto_increment primary key,
     label varchar(100) not null,
     fontColor varchar(100) not null,
     backgroundColor varchar(100) not null,
     backgroundColorLeft varchar(100) not null,
     backgroundColorRight varchar(100) not null,
     borderColor varchar(100) not null
   );
   insert into theme (label, fontColor, backgroundColor, backgroundColorLeft, backgroundColorRight, borderColor)
   values ('Default', 'black', 'lightgrey', 'darkgrey', 'white', 'darkgray');
   ```
3. Configure database connection in `api/src/main/resources/application.yml` if needed.
4. Build and run the backend:
   ```shell
   cd api
   ./mvnw spring-boot:run
   ```

### Frontend Setup (Angular)
1. Install dependencies:
   ```shell
   cd app
   npm install
   ```
2. Start the Angular app:
   ```shell
   npm start
   ```
3. Access the frontend at [http://localhost:4200](http://localhost:4200)

## DBeaver
Set connection driver properties: `allowPublicKeyRetrieval=true` and `useSSL=false`

## Contributing
Feel free to open issues or submit pull requests to improve the project!

---
For more details, see the README files in the `api/` and `app/` folders.
