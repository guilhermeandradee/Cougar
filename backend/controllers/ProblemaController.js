import ProblemaService from "../services/ProblemaService.js";

class ProblemaController {
    async saveProblem(req, res){
        const { categoria, resolucao, descricao } = req.body

        if(descricao === undefined || descricao === null || descricao === ''){
            return res
            .status(400)
            .json({ 
                message: 'Todos os campos devem ser preenchidos!'
            });
        }

        const problemaCadastrado = await ProblemaService.cadastrarProblema(categoria, descricao, resolucao)

        return res
        .status(200)
        .json({ 
            message: 'Problema cadastrado com sucesso!',
            data: problemaCadastrado 
        });
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

    async removeProblems(req, res){
        const { descricao } = req.body

        if(descricao === undefined || descricao === null || descricao === ''){
            return res
            .status(400)
            .json({ 
                message: 'Todos os campos devem ser preenchidos!'
            });
        }

        try {
            const problemaRemovido = await ProblemaService.excluirProblema(descricao)

            return res
            .status(200)
            .json({ message: 'Removido com sucesso!'})

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