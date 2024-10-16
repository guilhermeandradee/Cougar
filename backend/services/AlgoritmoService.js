import { closeConnectionDB, connectDB } from "../config/databaseConfig.js";
import Problema from "../models/ProblemaModel.js";
import pkg from 'natural';
const { TfIdf } = pkg;  // Importando o TfIdf corretamente

class AlgoritmoService {

    async calcularSimilaridade(descricaoUsuario) {
        await connectDB()

        const problemas = await Problema.find();
        console.log(problemas)

        await closeConnectionDB()

    let tfidf = new TfIdf();

    problemas.forEach(problema => {
        tfidf.addDocument(problema.descricao);  // Adicionar cada descrição ao TF-IDF
    });

    const matches = [];

    tfidf.tfidfs(descricaoUsuario, (i, measure) => {
        matches.push({ problema: problemas[i], score: measure });
    });

    
    console.log("Número de matches:", matches.length);
    // Ordenar por similaridade
    const similaridade = matches.sort((a, b) => b.score - a.score)

    const top3 = similaridade.slice(0, 3)
    
    // console.log(similaridade.slice(0, 3))
    

    // Retorna o problema mais relevante
    //   top5.forEach(element => {
    //     console.log(element.problema.resolucao);
    // });
    //   console.log(matches[0].problema.resolucao)
    return top3;

    }
}

// new AlgoritmoService().calcularSimilaridade('habilitar acesso usuario sistema validação')

export default new AlgoritmoService();
