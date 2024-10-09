import { closeConnectionDB, connectDB } from "../config/databaseConfig.js";
import Problema from "../models/ProblemaModel.js";
import pkg from 'natural';
const { TfIdf } = pkg;  // Importando o TfIdf corretamente

async function calcularSimilaridade(descricaoUsuario) {
    await connectDB()

    const problemas = await Problema.find();

    await closeConnectionDB()

  let tfidf = new TfIdf();

  problemas.forEach(problema => {
    tfidf.addDocument(problema.descricao);  // Adicionar cada descrição ao TF-IDF
  });

  const matches = [];
  tfidf.tfidfs(descricaoUsuario, (i, measure) => {
    matches.push({ problema: problemas[i], score: measure });
  });

  // Ordenar por similaridade
  matches.sort((a, b) => b.score - a.score)
  console.log(matches.slice(0, 3))

  // Retorna o problema mais relevante
//   top5.forEach(element => {
//     console.log(element.problema.resolucao);
// });
//   console.log(matches[0].problema.resolucao)
  return matches[0].problema;
}

calcularSimilaridade('habilitar acesso usuário sistema validação')
