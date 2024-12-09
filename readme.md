# Weather App with React, Node.js, and SQL

## **Overview**
This is a full-stack weather application built with **React**, **Node.js**, and **MySQL**. It provides functionalities for user authentication, weather search, and a weather search report.

---

## **Features**
1. **User Authentication**:
   - Login and Signup with secure password hashing and JWT and logout functionalities.
2. **Weather Search**:
   - Search for the weather of any city using the [WeatherStack API](https://weatherstack.com/documentation).
3. **Search Reports**:
   - View a report showing which user searched for which city's weather, including the weather details.

---

## **Technologies**
- **Frontend**: React, Axios, React Router
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **API**: WeatherStack API

---

## **Setup and Installation**

### **Backend Setup**
1. Navigate to the backend directory:
   ```bash
   cd weather-app/backend
2. Run the command:
   ```bash
   npm install
   nodemon index.js

### **FRONTEND Setup**
1. Navigate to the frontend directory:
   ```bash
   cd weather-app/frontend
2. Run the command:
   ```bash
   npm install
   npm start

### **Database Schema**
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  password VARCHAR(255)
);

CREATE TABLE weather_reports (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  city VARCHAR(255),
  weather_info TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);




