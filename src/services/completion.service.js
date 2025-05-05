import OpenAI from "openai";
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
const Prisma = new PrismaClient();
dotenv.config();

class CompletionService {
  constructor(){
    this.openai = new OpenAI({
      baseURL: 'https://api.deepseek.com',
      apiKey: process.env.DEEPSEEK_API_KEY
    });
  }

  async createCompletion(body) {
    try {
      const { prompt, aiContextId } = body;
      const aiContext = await Prisma.aiContext.findUnique({
        where: { id: aiContextId },
      });
      const{ temperature, instructions } = aiContext;

      const completion = await this.openai.chat.completions.create({
        messages: [
          { role: "system", content: instructions },
          { role: 'user', content: prompt }
        ],
        model: "deepseek-chat",
        temperature: temperature,
      });
      return completion;
    } catch (error) {
      console.error("Error creating completion:", error);
      throw error;
    }
  }

  async saveCompletion(body, completionResponse) {
    try {
      const { prompt, aiContextId } = body;
      const savedCompletion = await Prisma.completion.create({
        data: {
          prompt,
          response: completionResponse,
          aiContextId,
        },
      });
      return savedCompletion;
    } catch (error) {
      console.error("Error saving completion:", error);
      throw error;
    }
  }
    
}

export default CompletionService;