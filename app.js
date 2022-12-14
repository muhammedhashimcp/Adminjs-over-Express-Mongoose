import express from 'express'
const PORT = 4000;
import dotenv from 'dotenv'
dotenv.config();
// our config
const app = express();
import {adminRouter} from './routes/admin.router.js'  
//requiring data base config
import db from './config/dataBase.js'
db(); 
 
// Endpoint  for admin
app.use('/admin', adminRouter);
app.listen(PORT, () => {
	console.log(`AdminJS started on http://localhost:${PORT}/admin`);
});



// import { AdminJS } from 'adminjs'
// import { componentLoader } from './components'
// import { SomeResource } from './some-resource'

// const admin = new AdminJS({
//     resources: [SomeResource],
//     componentLoader, // the loader needs to be added here
//     // other options
// })

// admin.watch() // this builds your frontend code in development environment

// rest of the adapter and plugin code