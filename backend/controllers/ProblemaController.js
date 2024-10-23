import gerar_palavras_chave from "../services/IAService.js";
import ProblemaService from "../services/ProblemaService.js";
import IAService from "../services/IAService.js";
import AlgoritmoService from "../services/AlgoritmoService.js";
import Problema from "../models/ProblemaModel.js";

class ProblemaController {
    async saveProblem(req, res) {
        console.log('Dados recebidos:', req.body);
        const { categoria, resolucao, descricao, descricao_palavras_chave } = req.body;

        if (!descricao) {
            return res
                .status(400)
                .json({ 
                    message: 'Todos os campos devem ser preenchidos!'
                });
        }

        try {
            const problemaCadastrado = await ProblemaService.cadastrarProblema(categoria, descricao, resolucao, descricao_palavras_chave)

            return res
            .status(201)
            .json({ 
                message: 'Problema cadastrado com sucesso!',
                data: problemaCadastrado 
            });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }

        
    }

    async updateProblem(req, res) {
        const { id } = req.params;
        const { categoria, resolucao, descricao, descricao_palavras_chave } = req.body;
    
        if (!categoria || !resolucao || !descricao) {
            return res.status(400).json({
                message: 'Todos os campos devem ser preenchidos!'
            });
        }
    
        const newData = { categoria, resolucao, descricao, descricao_palavras_chave };
    
        try {
            const problemaAtualizado = await ProblemaService.atualizarProblema(id, newData);
    
            if (!problemaAtualizado) {
                return res.status(404).json({
                    message: 'Problema não encontrado!'
                });
            }
    
            return res.status(200).json({
                message: 'Problema atualizado com sucesso!',
                data: problemaAtualizado
            });
    
        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao atualizar o problema.',
                error: error.message
            });
        }
    }

    async getOne(req, res) {
        const { id } = req.params;

        try{
            const problemaRetornado = await ProblemaService.getOneProblem(id);

            return res
                .status(200)
                .json({
                    message: 'Busca concluída com sucesso',
                    data: problemaRetornado 
                });

        }catch(error) {
            console.log('Não foi possível concluir a busca: ' + error.message);

            return res
            .status(500)
            .json({
                message: 'Não foi possível concluir a busca'
            });
        }
    }


    async getAll(req, res){
        try {
            const problemasRetornados = await ProblemaService.getAllProblems()

            return res
            .status(200)
            .json({ 
                message: 'Busca concluída com sucesso',
                data: problemasRetornados 
            });

        } catch (error) {
            console.log('Não foi possível concluir a busca: ' + error.message)

            return res.status(400)
        }
    }

    async removeProblem(req, res){
        const { id } = req.params;

        if (!id) {
            return res
            .status(400)
        }

        try {
            const problemaRemovido = await ProblemaService.excluirProblema(id)

            return res
            .status(200)
            .json({ 
                message: 'Removido com sucesso!'
            })

        } catch (error) {
            return res
            .status(400)
            .json({ 
                message: error.message
            });
        }



    }

    async getQuantity (req, res) {
        const { page = 1, limit = 5 } = req.query;
        const skip = (page - 1) * limit;
        
        const problems = await ProblemaService.buscarQuantidadeEspecifica(skip, limit)
        const totalProblems = await Problema.countDocuments();
     
        res.json({
            problems,
            totalPages: Math.ceil(totalProblems / limit),
            currentPage: Number(page)
        });
     }

    /* ----------------- */    

    async getSolution(req, res){
        const { descricao } = req.body;

        if(!descricao || descricao === null || descricao === ''){
            return res.status(400).json({
                message: 'Você deve inserir uma descrição!'
            });
        }

        const similaridade = await AlgoritmoService.calcularSimilaridade(descricao)

        return res.status(200).json({
            message: 'Solução gerada!', 
            data: similaridade
        })
    }
}

export default new ProblemaController();