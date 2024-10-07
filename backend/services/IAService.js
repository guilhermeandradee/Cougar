import OpenAI from "openai";
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({apiKey: process.env.API_OPENAI_KEY});

// MUDAR O MODELO, INSTRUÇÕES E CONTENT.

async function main() {
    const assistant = await openai.beta.assistants.create({
    name: "Words Generator",
    instructions: "You are a word generator. Transform the text in 3 keywords. ",
    tools: [{ type: "code_interpreter" }],
    model: "gpt-3.5-turbo"
  });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: assistant.instructions }, 
      { role: "user", content: "Change a user's permission" }
    ]
  });

  console.log("Response:", response);
}

main();
