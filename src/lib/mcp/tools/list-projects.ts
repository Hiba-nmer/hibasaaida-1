import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { designs, projects } from "../data";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "List the public portfolio projects, documents, and graphic design work. Optionally filter by a keyword.",
  inputSchema: {
    query: z
      .string()
      .trim()
      .optional()
      .describe("Optional keyword to filter projects and designs by title or description."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.toLowerCase();
    const matchedProjects = q
      ? projects.filter((p) => `${p.title} ${p.description}`.toLowerCase().includes(q))
      : projects;
    const matchedDesigns = q ? designs.filter((d) => d.toLowerCase().includes(q)) : designs;
    const result = { projects: matchedProjects, designs: matchedDesigns };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      structuredContent: result,
    };
  },
});
