import { closeConnectionDB, connectDB } from "./config/databaseConfig.js";
import ProblemaService from "./services/ProblemaService.js";

// import { conectarDB } from "./config/databaseConfig.js";
import { app } from "./config/serverConfig.js";
import { router } from "./routes/ProblemaRoutes.js";
import e from "express";
import cors from 'cors'
import fileUpload from 'express-fileupload';

app.use(cors())
app.use(fileUpload())
app.use(e.json());
app.use(router)

async function main(){
    
        
}

main()





app.listen(process.env.SERVER_PORT, console.log('Server on!'))