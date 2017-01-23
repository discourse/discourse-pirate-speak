import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features['pirate-speak'] = true;
});

function piratize (text) {
  return text.replace(/\b(am|are|is)\b/ig, "be")
             .replace(/ing\b/ig, "in'")
             .replace(/v/ig, "'");
}

export function setup(helper) {
  helper.addPreProcessor(piratize);
}
