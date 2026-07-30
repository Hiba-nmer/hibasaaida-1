import { defineTool } from "@lovable.dev/mcp-js";
import { contact } from "../data";

export default defineTool({
  name: "get_contact",
  title: "Get contact details",
  description:
    "Get the public contact details published on the portfolio: email, phone, location, LinkedIn, and Instagram.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(contact, null, 2) }],
    structuredContent: { contact },
  }),
});
