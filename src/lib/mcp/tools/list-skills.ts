import { defineTool } from "@lovable.dev/mcp-js";
import { skillGroups } from "../data";

export default defineTool({
  name: "list_skills",
  title: "List skills",
  description:
    "List the public skills and tools grouped by category (e-commerce, marketing, business, technical, design, soft skills).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(skillGroups, null, 2) }],
    structuredContent: { skillGroups },
  }),
});
