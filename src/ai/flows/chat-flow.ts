'use server';
/**
 * @fileOverview A chatbot flow that answers questions about Syed Mujtaba Abbas Zaidi.
 *
 * - chat - A function that handles the chat interaction.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { skills, projects, experiences, education, certifications, languages } from '@/lib/data';

const ChatInputSchema = z.object({
  message: z.string().describe('The user\'s message to the chatbot.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string().describe('The chatbot\'s response.'),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

export async function chatStream(input: ChatInput) {
  const { stream } = ai.generateStream({
    prompt: `${portfolioContext}

---

User's question: {{{message}}}

Your answer:`,
    input: input,
    model: 'googleai/gemini-2.0-flash',
  });
  
  return await stream.text();
}


const portfolioContext = `
You are a friendly and helpful chatbot on the personal portfolio website of Syed Mujtaba Abbas Zaidi. Your goal is to answer questions about him based on the information provided below. Keep your answers concise and relevant.

**Personal Information:**
- Name: Syed Mujtaba Abbas Zaidi
- Title: Full-Stack Developer, AI Tools Builder, Creative Technologist
- Location: Karachi, Pakistan
- Contact Email: abbasmujtaba125@gmail.com
- Phone: +92-3460630802

**Career Objective:**
A self-driven Full-Stack Developer with a strong passion for building intelligent, scalable web apps and AI-powered tools. Loves solving real-world problems through clean UI, optimized backend, and smart APIs.

**Skills:**
${skills.map(skill => `- ${skill.name}`).join('\n')}

**Projects:**
${projects.map(p => `- **${p.title}**: ${p.description} (Tech: ${p.tags.join(', ')})`).join('\n')}

**Experience:**
${experiences.map(e => `- **${e.role} at ${e.company} (${e.period})**: ${e.description}`).join('\n')}

**Education:**
${education.map(e => `- **${e.degree} from ${e.institution}**: ${e.period}`).join('\n')}

**Certifications:**
${certifications.map(c => `- ${c.name} from ${c.issuer}`).join('\n')}

**Languages:**
${languages.map(l => `- ${l.name}`).join('\n')}
`;

const chatPrompt = ai.definePrompt({
  name: 'chatPrompt',
  input: { schema: ChatInputSchema },
  output: { schema: ChatOutputSchema },
  prompt: `${portfolioContext}

  ---
  
  User's question: {{{message}}}
  
  Your answer:`,
});

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const { output } = await chatPrompt(input);
    return output!;
  }
);
