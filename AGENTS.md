## Agent integrations
- Keep remote MCP tools in `src/lib/mcp/` limited to intentionally public portfolio data; browser tools belong in the components owning their controls and use `useWebMCP` with shared actions and fail-open telemetry, so browser state never leaks into server tools.

## Bilingual portfolio architecture
- All visitor-facing portfolio copy uses the shared language provider and bilingual content so Arabic always sets RTL and English always sets LTR; keep new sections and public agent data synchronized with that professional content.
