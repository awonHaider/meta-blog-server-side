import express from 'express'; 
import Connection from './database/db.js';
import bodyParser from 'body-parser';
import cors from 'cors'
import router from './routes/route.js'

const app = express(); 
const PORT = 4000; 

//Body-parser - parse body of request of user to specific usable type such as JSON
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

//Defining a Basic API or API endpoint (Route) and redirecting
// it to router which is in routes.js
app.use('/api/', router);

app.listen(PORT, (error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
	else
		console.log("Error occurred, server can't start", error); 
	} 
); 

Connection();
