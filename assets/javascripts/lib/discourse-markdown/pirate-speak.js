import { registerOption } from "pretty-text/pretty-text";

registerOption((siteSettings, opts) => {
  opts.features["pirate-speak"] = true;
});

function piratize(text) {
  return text
    .replace(/\b(am|are|is)\b/gi, "be")
    .replace(/ing\b/gi, "in'")
    .replace(/v/gi, "'");
}

export function setup(helper) {
  helper.addPreProcessor(piratize);
}
