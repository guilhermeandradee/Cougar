import Problema from "../models/ProblemaModel.js";
import { connectDB, closeConnectionDB } from "../config/databaseConfig.js";
import gerar_palavras_chave from "./IAService.js";


async function createId() {
    try{
        const lastProblem = await Problema.findOne().sort({id: -1}).exec();
        return(lastProblem ? lastProblem.id : 0) + 1;
  
    }catch (error) {
        console.error('Erro ao gerar o ID do produto: ', error);
        throw error;
    }
}

class ProblemaService {
    async cadastrarProblema(categoria, descricao, resolucao, descricao_palavras_chave){
        await connectDB()

        let savedProblem;
        try {
            const id = await createId();
            // const descricao_palavras_chave = await gerar_palavras_chave(descricao) // Par asso funcionar atualizar api key
            const newProblem = new Problema({ id: id, categoria, descricao, resolucao, descricao_palavras_chave });
           
            savedProblem = await newProblem.save();

            console.log('Problema salvo:', savedProblem);

        } catch (error) {
            console.log(error);
        } finally {
           await closeConnectionDB();
        }
    }


    async atualizarProblema(id, newData){
        await connectDB();
        let problemaAtualizado
        try{ 

            problemaAtualizado= await Problema.findOneAndUpdate(
            {id: id},
            newData,
            {new: true}
            );

            console.log('Problema atualizado', problemaAtualizado);
            return problemaAtualizado;
    
        }catch (error){
            console.error('Erro ao atualizar o problema: ', error);
    
        }finally{
            await closeConnectionDB();
        }
    }


    async buscarProblema(criterion) {
        await connectDB();
    
        let problemaEncontrado;
        try{
            if (typeof criterion == 'string' && criterion.match(/^[0-9]+$/)){
                problemaEncontrado = await Problema.findOne({ id: Number(criterion)});
            } else {
                problemaEncontrado = await Problema.findOne({ descricao:criterion});
            }
                console.log('Problema encontrado:', problemaEncontrado);
            }catch(error){
                console.error('Erro ao buscar problema: ', error);
            }finally{
                await closeConnectionDB();
            }
    
            return problemaEncontrado;
    }


    async buscarProblema(descricao) {
        await connectDB()

        const problemaEncontrado = await Problema.findOne({ descricao });
        console.log('Problema encontrado:', problemaEncontrado);

        await closeConnectionDB()

        return problemaEncontrado;
    }

    async getOneProblem(id) {
        await connectDB();

        try{
            const problemaEncontrado = await Problema.findOne( {id:id })
            return problemaEncontrado
        } catch (error) {
            console.error('Erro ao buscar problema:', error.message);
            throw new Error('Não foi possível buscar o problema.');
    
        } finally {
            await closeConnectionDB();
        }
    }


    async getAllProblems(){
        await connectDB()

        try {
            const problemasEncontrados = await Problema.find()

            return problemasEncontrados

        } catch (error) {
            console.error('Erro ao buscar problemas:', error.message);
            throw new Error('Não foi possível buscar os problemas.');

        } finally {
            await closeConnectionDB()
            
        }


        
    }

    async excluirProblema(id){
        await connectDB()

        try {
            const problemRemovido = await Problema.deleteOne({ id });
            return problemRemovido;

        } catch (error) {
            throw new Error('Erro ao deletar o problema: ' + error.message);

        } finally {

            await closeConnectionDB()
        }
        

    }
}
export default new ProblemaService();

