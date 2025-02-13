The app was created using the following frameworks. For the front end, it's angular's ionic using nodejs. For the backend its 
.netcore web api using visual studio. Then for the db is sql using microsoft sql server.

**Steps put in order to be followed to avoid errors**


**ms sql:db**


Download and install microsoft sql server from the official microsoft web site

Download and install microsoft sql server management studio from the official microsoft web site (its the gui)

Open sql server management studio, connect to you local server (your pc) and open the BUSEdb_CreateScript then run it.

It will create and populate the database and populate it with dummy data.


**.net core web api (c#, asp .net framework:backend**

This one is not that much of a headache but the prerequisites are.

Download and install microsoft visual studio 2022 from microsoft

Download and install microsoft visual studio installer from microsoft if it was not installed

Open visual studio install, go to visual studio 2022 and then click on Modify. On the workloads tab, tick the ASP.NET and web development tile,
on your lower right corner click on the button : down all and the install; if the button is display another option 
change it to that then click the button.

After the installation is down you can now open visual studio 2022 then open the BUSEback api within it, run the api by clicking the play button





**ionic/angular(typescript, html, scss) under node js:FrontEnd**


First dowload and install node js, I suggest you stick to the LTS to make your journey smoother

https://nodejs.org/en

To install angular cli run the following command in you terminal after installing node js

npm install -g @angular/cli

To install ionic cli run the following command in you terminal

npm install -g @ionic/cli

With that your frontend is ready, to run the app type the following command in your terminal withing the app directory

ionic serve

It will should start bundling and open the front end in your browser. Should it give you an error about node modules, just run

npm install

And it will install the node module for you, then run ionic serve again and it open.





