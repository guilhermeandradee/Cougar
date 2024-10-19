import OpenAI from "openai";
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({apiKey: process.env.API_OPENAI_KEY});
class IAService {

// MUDAR O MODELO, INSTRUÇÕES E CONTENT.

    async gerar_palavras_chave(description) {
        const assistant = await openai.beta.assistants.create({
        name: "Words Generator",
        instructions: "Você é um assistente de linguagem natural. Quando receber um texto, siga estas etapas: 1. Analise o texto e identifique os temas principais. 2. Remova palavras irrelevantes (stop words) e termos que não adicionam valor. 3. Aplique lematização para transformar palavras em suas formas base. 4. Selecione as palavras mais significativas e crie uma lista de até 3 palavras-chave. 5. Retorne as palavras-chave em formato JSON. Texto de exemplo: 'O sistema apresentou uma falha durante a atualização.' A saída deve ser: {'palavras-chave': ['sistema','falha', 'atualização', 'problema', 'erro']} E pode ter mais palavras chave.",
        tools: [{ type: "code_interpreter" }],
        model: "gpt-3.5-turbo"
    });

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
            { role: "system", content: assistant.instructions }, 
            { role: "user", content: description }
            ]
        });
        return response
    } catch (error) {
        return error.message;
    }
    }
}
export default new IAService();
