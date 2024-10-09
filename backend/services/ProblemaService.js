import Problema from "../models/ProblemaModel.js";
import { connectDB, closeConnectionDB } from "../config/databaseConfig.js";
import gerar_palavras_chave from "./IAService.js";

class ProblemaService {
    async cadastrarProblema(categoria, descricao, resolucao){
        await connectDB()

        try {
            const descricao_palavras_chave = await gerar_palavras_chave(descricao) // Par asso funcionar atualizar api key
        
            const newProblem = new Problema({ categoria, descricao, resolucao, descricao_palavras_chave });
            
            const savedProblem = await newProblem.save();
            console.log('Problema salvo:', savedProblem);
        await closeConnectionDB()
        } catch (error) {
            console.log(error)
        }
        return savedProblem;
    }

    async buscarProblema(descricao) {
        await connectDB()

        const problemaEncontrado = await Problema.findOne({ descricao });
        console.log('Problema encontrado:', problemaEncontrado);

        await closeConnectionDB()

        return problemaEncontrado;
    }

    async getAllProblems(){
        await connectDB()

        try {
            const problemasEncontrados = await Problema.find()

            return problemasEncontrados

        } catch (error) {
            return error.message

        } finally {
            await closeConnectionDB()
            
        }


        
    }

    async excluirProblema(descricao){
        await connectDB()

        try {
            const problemRemovido = await Problema.deleteOne({ descricao });
            return problemRemovido;

        } catch (error) {
            throw new Error('Erro ao deletar o problema: ' + error.message);

        } finally {

            await closeConnectionDB()
        }
        

    }
}
export default new ProblemaService();

