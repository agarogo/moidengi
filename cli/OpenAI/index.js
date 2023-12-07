// require("dotenv").config();
// const { Configuration, OpenAIApi } = require("openai");
// const readline = require("readline");
// const openaiapi = new OpenAIApi(
//   new Configuration({
//     apiKey: process.env.API_KEY,
//   })
// );
// const userInterface = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// userInterface.prompt();
// const history = [];
// userInterface.on("line", async (line) => {
//   history.push({ role: "user", content: line });
//   try {
//     const response = await openaiapi.createChatCompletion({
//       model: "gpt-3.5-turbo",
//       messages: history,
//     });
//     if (response.data && response.data.choices.length > 0) {
//       console.log(response.data.choices[0].message.content);
//     } else {
//       console.log("Unexpected response format from OpenAI API");
//     }
//   } catch (error) {
//     console.error("An error occurred while fetching response from OpenAI API:", error);
//   }
//   userInterface.prompt();
// });


require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const readline = require("readline");
const openaiapi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  })
);
const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
userInterface.prompt();

const history = [];
const teacherMessageLimit = 3; // Максимальное количество сообщений для использования в качестве подсказок
const maxTokens = 100; // Максимальное количество токенов в каждом сообщении

userInterface.on("line", async (line) => {
  history.push({ role: "user", content: line });

  try {
    // Обрезаем историю, чтобы уложиться в лимит сообщений для подсказок
    const teacherMessages = history
      .filter((msg) => msg.role === "user")
      .slice(-teacherMessageLimit)
      .map((msg) => ({
        role: msg.role,
        content: msg.content.substring(0, maxTokens),
      }));

    const response = await openaiapi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: teacherMessages,
    });

    if (response.data && response.data.choices.length > 0) {
      console.log(response.data.choices[0].message.content);
    } else {
      console.log("Unexpected response format from OpenAI API");
    }
  } catch (error) {
    console.error("An error occurred while fetching response from OpenAI API:", error);
  }

  userInterface.prompt();
});

// Обработка события закрытия интерфейса пользователя
userInterface.on("close", () => {
  console.log("До свидания!");
  process.exit(0);
});