import { defineTool } from "@lovable.dev/mcp-js";
import { achievements, experience } from "../data";

export default defineTool({
  name: "list_experience",
  title: "List experience",
  description:
    "List the public work experience, training programs, and achievements shown on the portfolio.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      { type: "text" as const, text: JSON.stringify({ experience, achievements }, null, 2) },
    ],
    structuredContent: { experience, achievements },
  }),
});
