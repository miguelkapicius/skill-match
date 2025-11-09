import { GoogleGenAI } from "@google/genai";
import env from "../env";
import type { UserData } from "../types/user-data.type";

const gemini = new GoogleGenAI({
  apiKey: env.GEMINI_API_KEY,
});

const model = "gemini-2.5-flash";

export async function analyze(userData: UserData) {
  const prompt = `
  Você é um assistente especializado em análise de habilidades e qualificação profissional.

  O usuário deseja migrar de carreira ou evoluir na profissão atual.
  Você receberá as seguintes informações:

  - Cargo atual
  - Cargo desejado
  - Anos de experiência
  - Um conjunto de habilidades, cada uma com uma nota de 1 a 5 representando o nível atual de domínio (1 = iniciante, 5 = especialista)

  Com base nisso, gere um relatório estruturado que contenha:

  1. **Resumo geral** (em até 3 frases): descreva o perfil do usuário e sua prontidão para o cargo desejado.
  2. **Análise das soft skills**: identifique quais são os pontos fortes e quais precisam ser desenvolvidos, com explicações curtas.
  3. **Análise das hard skills**: destaque quais competências técnicas estão abaixo do esperado para o cargo-alvo e o que é necessário aprender.
  4. **Recomendações práticas**: uma lista com 3 a 5 ações claras para ajudar o usuário a atingir o objetivo (ex: cursos, projetos, práticas, mudanças de comportamento).
  5. **Estimativa de prontidão**: um número de 0 a 100 representando o quanto o usuário está preparado para o cargo desejado.
  6. **Linguagem**: fale direto com o usuário, oferecendo sugestões e orientações específicas para melhorar suas habilidades.

  Gere uma resposta **somente em JSON válido**, sem explicações extras, sem markdown, e sem texto antes ou depois.
  Retorne a resposta **em JSON válido**, no formato:
  {
    "summary": "",
    "soft_skills": {
      "strengths": ["", ""],
      "to_improve": ["", ""]
    },
    "hard_skills": {
      "missing": ["", ""],
      "recommended": ["", ""]
    },
    "recommendations": ["", "", ""],
    "readiness_score": 0
  }

  Agora, aqui estão os dados do usuário:
  ${JSON.stringify(userData, null, 2)}
  `;

  const response = await gemini.models.generateContent({
    model,
    contents: [
      {
        text: prompt,
      },
    ],
  });

  if (!response.text) {
    throw new Error("Falha ao gerar resposta pelo Gemini");
  }

  const cleaned = response.text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch (error) {
    console.error("Erro ao converter JSON:", error);
    throw new Error("Resposta inválida do Gemini");
  }
}
