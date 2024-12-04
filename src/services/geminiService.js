import { GoogleGenerativeAI } from '@google/generative-ai';

const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAi.getGenerativeModel({ model: 'gemini-1.5-flash' });

export default async function gerarDescricaoComGemini(imageBuffer) {
     const prompt = 'Gere uma descrição em português do brasil para a seguinte imagem em uma frase de 6 palavras';
     try {
          const image = {
               inlineData: {
                    data: imageBuffer.toString('base64'),
                    mimeType: 'image/png',
               },
          };
          const res = await model.generateContent([prompt, image]);
          return res.response.text() || 'Alt-text não disponivel';
     } catch (erro) {
          console.error('erro ao obter alt-text do gemini', erro.message, erro);
          throw new Error('Erro ao obter alt-text do gemini');
     }
}
