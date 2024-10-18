# Carritos Fast Food 
![image](https://github.com/user-attachments/assets/f3ab69df-fbec-4b83-ae9c-6a5fa5625b0f)

## Instructions to run the app 
Place the app directory or clone this repository wherever have php running and serve.

For local development you can run a small php server from your terminal.

### Pre Requisites

Test if you have php running in your terminal
```bash
php -v
```
Test if you have mysql
```bash
mysql -v
```
If that is working clone and run.

### Set Up

- Clone the application
```bash
git clone https://github.com/lahnie/Carritos_fast_food.git
cd Carritos_fast_food
php -S localhost:3000
```
If that works visit this url using your browser http://localhost:3000/view/index.html

- Set Up the database
```sql
CREATE DATABASE carritos_fast_food CHARACTER SET utf8 COLLATE utf8_general_ci;

USE carritos_fast_food;

CREATE TABLE orders (
    id int NOT NULL AUTO_INCREMENT,
    client_name varchar(255),
    rut varchar(255),
    address varchar(255),
    phone_number VARCHAR(50),
    product_name VARCHAR(255),
    price INT,
    product_description VARCHAR(255),
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
    status VARCHAR(50),

    CONSTRAINT PK_id PRIMARY KEY (id)
);
```

#### Troubleshooting
If you have problems with mysqli:

##### If your using xampp
+ Go to the Xapp folder open php.ini file inside the PHP folder i.e xampp\php\php.ini (with a text editor).
+ Search for extension=mysqli (Ctrl+F), if there are two, look for the one that has been uncommented (without ";" behind)
+ Change the mysqli with the correct path address i.e extension=C:\xampp\php\ext\php_mysqli.dll.
+ On your Xampp control panel, stop and start apache and MySQL

if you're not using xampp just do the same as before but in the php directory on your computer.

##### If you experience problems with mysql authorization 

That could be a mismatched between mysql existing users or lack of users and our configuration in `connection.php`

If you don't have the "Admin" user, you can create it using the following: _(no password for educational/development purposes)_

```sql
CREATE USER 'admin'@'localhost' IDENTIFIED BY '';
```
And then giving privileges to the database:

```sql
GRANT ALL PRIVILEGES ON carritos_fast_food.* TO 'admin'@'localhost';
```
