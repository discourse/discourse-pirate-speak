function piratize(text) {
  return text
    .replace(/\b(am|are|is)\b/gi, "be")
    .replace(/ing\b/gi, "in'")
    .replace(/v/gi, "'");
}

export function setup(helper) {
  helper.registerOptions((opts) => {
    opts.features["pirate-speak"] = true;
  });

  helper.addPreProcessor(piratize);
}
