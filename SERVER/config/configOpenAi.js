//OPENAI_SECRET_KEY
require('dotenv').config();
const OpenAI = require("openai");
const calorieFunctionDefinition = require("./foodCalorieAi");
const recomendFunctionDefinition = require("./recomendAi");
const validatorFunctionDefinition = require("./validFoodDrinkAi");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_SECRET_KEY,
});
const functionDefinition = [
  calorieFunctionDefinition,
  recomendFunctionDefinition
//   validatorFunctionDefinition
];

const messages = [
  {
    role: "system",
    content:
      "You are a helpful assistant. Only use the functions you have been provided with.",
  },
];

async function agent(userInput) {
  try {
    messages.push({
      role: "user",
      content: userInput,
    });
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: messages,
      functions: functionDefinition,
    });
    const responseJSON = response.choices[0].message.function_call.arguments;
    const resultData = JSON.parse(responseJSON);
    return resultData;
  } catch (error) {
    throw error;
  }
}

module.exports = agent;
