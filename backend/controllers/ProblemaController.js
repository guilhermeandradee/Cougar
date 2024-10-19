import ProblemaService from "../services/ProblemaService.js";

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

        const problemaCadastrado = await ProblemaService.cadastrarProblema(categoria, descricao, resolucao, descricao_palavras_chave)

        return res
        .status(201)
        .json({ 
            message: 'Problema cadastrado com sucesso!',
            data: problemaCadastrado 
        });
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

    /* ----------------- */    
}

export default new ProblemaController();