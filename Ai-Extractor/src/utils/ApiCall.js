import { GoogleGenerativeAI } from "@google/generative-ai";
import Result from "../components/Result";

const geminiCall = async (text) => {

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Extract the keywords fromt this "+ text +" the response should only have the keywords which will be separated by comma and also you can act as a resume scanner.";

  const result = await model.generateContent(prompt);
  const response = result.response;
  const message = response.text();
  return message;

}

export default geminiCall