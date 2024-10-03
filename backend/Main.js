import { closeConnectionDB, connectDB } from "./config/databaseConfig.js";
import { ProblemaService } from "./services/ProblemaService.js";

// import { conectarDB } from "./config/databaseConfig.js";




const problemaServiceInstance = new ProblemaService(); 

async function main(){
    
    try {
        await problemaServiceInstance.cadastrarProblema('Usuário triste');
        
        await (problemaServiceInstance.buscarProblema('Usuário triste'))
    } catch (error) {
        console.log(error)
    }
    
    closeConnectionDB()
}

main()




