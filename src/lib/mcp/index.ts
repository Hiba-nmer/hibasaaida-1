import { defineMcp } from "@lovable.dev/mcp-js";
import getContactTool from "./tools/get-contact";
import getProfileTool from "./tools/get-profile";
import listExperienceTool from "./tools/list-experience";
import listProjectsTool from "./tools/list-projects";
import listSkillsTool from "./tools/list-skills";

export default defineMcp({
  name: "portfolio",
  title: "Portfolio",
  version: "0.1.0",
  instructions:
    "Public tools for Heba Al-Sayda's portfolio. Use `get_profile` for her background, `list_experience` for work history and achievements, `list_projects` for projects and design work, `list_skills` for skills and tools, and `get_contact` for public contact links.",
  tools: [
    getProfileTool,
    listExperienceTool,
    listProjectsTool,
    listSkillsTool,
    getContactTool,
  ],
});
