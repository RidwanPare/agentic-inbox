import { createWorkersAI } from "workers-ai-provider";
import { generateText } from "ai";
export default {
  async fetch(request, env) {
    const ai = createWorkersAI({ binding: env.AI });
    try {
      const res = await generateText({
        model: ai("@cf/meta/llama-3.1-8b-instruct-fast"),
        prompt: "Say hello",
      });
      return new Response(res.text);
    } catch(e) {
      return new Response("Error: " + e.message + "\n" + e.stack, { status: 500 });
    }
  }
}
