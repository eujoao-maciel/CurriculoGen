import { vi } from "vitest"

vi.mock("pdf-parse", () => {
  return {
    PDFParse: vi.fn().mockImplementation(() => ({
      getText: vi.fn().mockResolvedValue({
        text: "Mocked resume text",
      }),
      destroy: vi.fn(),
    })),
  }
})
