import { vi } from "vitest"
import { openai } from "../../config/ai.js"

export const mockOpenAiSuccess = (content = "Enhanced summary text.") => {
    openai.chat.completions.create.mockResolvedValueOnce({
        choices: [{ message: { content } }],
    })
}

export const mockOpenAiError = (message = "AI service unavailable") => {
    openai.chat.completions.create.mockRejectedValueOnce(new Error(message))
}

export const openAiSpy = openai.chat.completions.create
