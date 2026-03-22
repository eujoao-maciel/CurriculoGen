import { vi } from "vitest"

export const openai = {
    chat: {
        completions: {
            create: vi.fn(),
        },
    },
}
