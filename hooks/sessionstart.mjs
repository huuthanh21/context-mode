#!/usr/bin/env node
/**
 * SessionStart hook for context-mode
 *
 * Provides the agent with XML-structured "Rules of Engagement"
 * at the beginning of each session, encouraging autonomous use
 * of context-mode MCP tools over raw Bash/Read/WebFetch.
 */

import { ROUTING_BLOCK } from "./routing-block.mjs";

// Read stdin (SessionStart hook input — may be empty or minimal JSON)
let raw = "";
process.stdin.setEncoding("utf-8");
for await (const chunk of process.stdin) raw += chunk;

// Output the routing block as additionalContext
console.log(JSON.stringify({
  hookSpecificOutput: {
    hookEventName: "SessionStart",
    additionalContext: ROUTING_BLOCK,
  },
}));
