import repl from "repl";

export function pry(context = {}) {
  const r = repl.start("🛠️ pry> ");
  Object.assign(r.context, context);
}
