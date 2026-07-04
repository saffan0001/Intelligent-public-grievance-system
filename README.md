# Intelligent Public Grievance Redressal System (IPGRS)

## Overview
The Intelligent Public Grievance Redressal System is a web-based application developed to simplify and improve the complaint management process between the public and government or administrative authorities[cite: 1]. By digitizing the entire complaint lifecycle, the system ensures transparency, accountability, and efficiency[cite: 1]. 

## Tech Stack
* **Frontend:** React.js utilizing a component-based architecture for an interactive user interface[cite: 1].
* **Backend:** Node.js and Express.js implementing a robust RESTful API and MVC design pattern[cite: 1].
* **Database:** MySQL for secure, normalized relational data storage[cite: 1].
* **Security:** JSON Web Tokens (JWT) for secure, role-based authentication and bcrypt for password hashing[cite: 1].

## Key Features
* **Citizen Portal:** Users can register, log in, and submit detailed complaints including category, description, and specific location data[cite: 1].
* **Real-Time Tracking:** The system generates a unique reference number (e.g., PG-YYYYMMDD-XXXXX) for each submission, allowing citizens to track their complaint status (Pending, In Progress, Resolved) in real-time[cite: 1].
* **Admin Dashboard:** Administrators are provided with a centralized dashboard to view, filter, and manage all public complaints efficiently[cite: 1]. 
* **Resolution Management:** Officials can update complaint statuses, provide official responses, and maintain a complete audit trail of grievance history[cite: 1].

## System Architecture
This application is built on a three-tier client-server architecture to enable independent scaling and simplified maintenance[cite: 1]:
1. **Presentation Tier:** React.js web browser interface[cite: 1].
2. **Application Tier:** Node.js/Express.js API gateway and business logic layer[cite: 1].
3. **Data Tier:** MySQL relational database managing Users, Complaints, and Status Logs tables[cite: 1].
