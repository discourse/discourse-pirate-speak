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
  helper.postProcessText(function (text) {
    text = [].concat(text);
    for (var i = 0; i < text.length; i++) {
      if (text[i].length > 0 && text[i][0] !== "<") {
        text[i] = piratize(text[i]);
      }
    }
    return text;
  });
}
