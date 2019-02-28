# Communication Application
A Simple Communication Application 

## Technologies Used
This web-app is built on the following Stack
1. MongoDB
2. Expressjs
3. Jade Templating Engine
4. Nodejs
5. Socket.io
6. Bootstrap

## Project Made by:

1. Jay Parmani

## Installation of the Web Server

>This installation assusmes that there exists a monogdb Service and is running on the machine BlueCup is tested, create a db named 'bluecup' in mongodb to run the application.

To setup these server install NodeJs from [Node Js Website](https://nodejs.org/).
Once installation is complete open the folder where BlueCup needs to be cloned.

```
git clone 
```
Once cloning is complete, open the root Folder

There are two applications, chat-app & main-app , where chat-app can handle the communication and Socket.io Logic, the  main-app handles the login , logout authentication logic along with uploading of the data to mongodb servers.

Execute the following the command on Terminal
```
cd root/chat-app 
npm install
npm start
```
now `npm` which was installed with node will handle BlueCup's chat-app dependencies.
Once `npm` has completed the installing dependencies
`npm start` will start the chat-app at [localhost:8080](localhost:8080)

Execute the following the command after pening a `new Terminal`:
```
cd root/main-app
npm install
npm start
```
Similarly `npm` will handle BlueCup's chat-app dependencies.
Once `npm` has completed the installing dependencies
`npm start` will start the main-app at [localhost:3000](localhost:3000)

## Use
Open any web browser, and open [localhost:3000](localhost:3000) to use the applictaion.




