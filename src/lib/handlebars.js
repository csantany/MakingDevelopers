import $config from './config';
import { minify } from 'html-minifier';

export default {
  compress
};

function compress(content) {
  if (!$config().html.minify) {
    return content.fn(this);
  }

  return minify(content.fn(this), {
    removeComments: true,
    collapseWhitespace: true,
    minifyJS: true
  });
}
