import { defineTool } from "@lovable.dev/mcp-js";
import { profile } from "../data";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Get the portfolio owner's public profile: name, headline, location, and professional summary.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(profile, null, 2) }],
    structuredContent: { profile },
  }),
});
