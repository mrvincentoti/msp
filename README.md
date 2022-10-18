#### MSP APP

###### PROJECT SETUP

1. clone the repo `git clone repo_url`
2. create a virtual environment `python -m virtualenv mspenv`
3. activate the virtual environment on linux `source mspenv/bin/activate` on windows `venv\Scripts\activate`
4. install dependencies `pip install -r requirements.txt`
5. create a .env file your app root directory (/projectdir/mspapp/.env)

###### .env file variables

1. SECRET_KEY=your_key
2. DATABASE_NAME=your_database
3. DATABASE_USER=your_user
4. DATABASE_PASS=your_password

###### DATABASE SETUP

1. sudo -u postgres psql
2. CREATE DATABASE mspapp;
3. CREATE USER mspuser WITH PASSWORD 'your_password';
4. ALTER ROLE mspuser SET client_encoding TO 'utf8';
5. ALTER ROLE mspuser SET default_transaction_isolation TO 'read committed';
6. ALTER ROLE mspuser SET timezone TO 'UTC';
7. GRANT ALL PRIVILEGES ON DATABASE mspapp TO mspuser;
