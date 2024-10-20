import ImportService from '../services/ImportService.js'

class  ImportController {

    async ImportProblems(req, res) {
        console.log('dados recebidos', req.body);
        const { filePath } = req.body;

        if (!filePath) {
            return res
                .status(400)
                .json({
                    message: 'O caminho do arquivo deve ser informado'
                });
        }

        try {
            const result = await ImportService.processSheet(filePath);
            return res
                .status(200)
                .json({
                    message:'Planilha processada'
                });
        } catch (error) {
            return res
                .status(500)
                .json({
                    message: 'Erro ao processar a planilha',
                    error: error.message,
                });
        }
    }
}


export default new ImportController();