QuickBets App

Overview
QuickBets is a web application that allows users to quickly place bets on various events. The application is built using React for the front end and Python Django for the back end.

Features
User Authentication: Users can create accounts, log in, and securely authenticate themselves.
Event Listings: Browse a variety of events available for betting.
Quick Betting: Place bets quickly with just a few clicks.
User Dashboard: Track betting history, account details, and winnings.
Admin Panel: Admins can manage events, users, and view overall system analytics.

Technologies Used
Frontend: React
Backend: Python Django
Database: SqLite
Authentication: React
APIs: Paypal, https://rapidapi.com/fluis.lacasse/api/allsportsapi2

Installation
Prerequisites
Node.js (for React)
Python (for Django)

Instructions
Clone the repository:

git clone [repository-url]


Navigate to the frontend directory and install dependencies:

npm install
Navigate to the backend directory and set up the virtual environment:

cd backend
python -m venv venv

Activate the virtual environment:

On Windows:
.\venv\Scripts\activate

On macOS/Linux:

source venv/bin/activate

Install backend dependencies:
pip install -r requirements.txt

Set up the database:
python manage.py migrate

Run the development servers:

Frontend:
npm start

Backend:
python manage.py runserver
Open your web browser and go to http://localhost:3000 to access the QuickBets app.

Contributing
If you would like to contribute to the project, please follow our Contribution Guidelines.

License
This project is licensed under the SDGKU - see the LICENSE.md file for details.

Acknowledgments
Adam Young
Brandon Lile
Marquice Bowman