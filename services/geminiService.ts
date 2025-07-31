
import { GoogleGenAI } from "@google/genai";
import type { Project } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePresentationOutline = async (project: Project): Promise<string> => {
    try {
        const prompt = `
        Act as a presentation coach for a tech professional. Create a compelling 10-minute presentation outline for the following project. The outline should be structured, clear, and highlight the key achievements. Format the output as clean markdown.

        Project Title: ${project.title}
        Project Description: ${project.longDescription}
        Technologies Used: ${project.tags.join(', ')}

        The outline should include these sections:
        1.  **Introduction:** Hook, personal intro, and agenda.
        2.  **The Problem:** What problem does this project solve? Who is it for?
        3.  **My Solution:** How does the project work? Key features and architecture overview.
        4.  **Tech Stack:** Briefly explain why key technologies were chosen.
        5.  **Live Demo Outline:** A script of what to show and say during a quick demo.
        6.  **Challenges & Learnings:** What was the biggest challenge and what was learned?
        7.  **Conclusion & Next Steps:** Summarize the project and mention potential future features.
        8.  **Q&A**
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                temperature: 0.5,
                maxOutputTokens: 1024,
                thinkingConfig: { thinkingBudget: 512 },
            }
        });

        return response.text;
    } catch (error) {
        console.error("Error generating presentation outline:", error);
        return "An error occurred while generating the presentation outline. Please try again.";
    }
};
