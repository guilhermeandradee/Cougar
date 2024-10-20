import xlsx from 'xlsx';
import { connectDB, closeConnectionDB } from "../config/databaseConfig.js";
import ProblemaService from './ProblemaService.js';

class ImportService {
    async processSheet(filePath) {
        try {
            await connectDB();

            const book = xlsx.readFile(filePath);
            const sheetName = book.SheetNames[0];
            const sheet = book.Sheets[sheetName];

            // Obtém os dados, incluindo a primeira linha
            const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });
            console.log('Dados lidos da planilha:', data);

            // Ignora a primeira linha se contiver cabeçalhos
            for (let i = 1; i < data.length; i++) {
                const row = data[i];
                try {
                    const savedProblem = await ProblemaService.cadastrarProblema(
                        row[0], // Categoria
                        row[1], // Descrição
                        row[2]  // Resolução
                    );
                    
                    console.log('Problema salvo com sucesso:', savedProblem);
                } catch (error) {
                    console.error('Erro ao salvar o problema:', row, error.message);
                }
            }

            await closeConnectionDB();

            return { message: 'Planilha processada e dados salvos no banco' };
        } catch (error) {
            console.error('Erro ao processar a planilha:', error);
            throw error;
        }
    }
}

export default new ImportService();
