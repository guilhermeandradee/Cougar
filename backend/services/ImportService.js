import xlsx from 'xlsx';
import { connectDB, closeConnectionDB } from "../config/databaseConfig.js";
import ProblemaService from './ProblemaService.js';
import Problema from "../models/ProblemaModel.js"; // Importando o modelo Problema


class ImportService {
    async processSheet(filePath) {
        try {
            await connectDB();

            const book = xlsx.readFile(filePath);
            const sheetName = book.SheetNames[0];
            const sheet = book.Sheets[sheetName];

            const data = xlsx.utils.sheet_to_json(sheet);
            console.log('Dados lidos da planilha:', data);

            for (const row of data) {
                try {
                    const savedProblem = await ProblemaService.cadastrarProblema(
                        row.categoria,
                        row.descricao,
                        row.resolucao
                    );
                    console.log('Problema salvo com sucesso:', savedProblem);
                } catch (error) {
                    console.error('Erro ao salvar o problema:', formattedData, error.message);
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
