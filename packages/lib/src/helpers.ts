import { randomBytes } from 'crypto';
import transliterate from '@sindresorhus/transliterate';

/** Encode data to base 64 or decode string */
export { base64 } from '@scure/base';

/**
 * Generates a minimal 12-character CUID.
 *
 * @returns A unique CUID string of length 12.
 */
export function nanoid() {
  const c = randomBytes(2).toString('hex').slice(0, 4); // Crypto randomness
  const t = Date.now().toString(36).slice(-4); // Last 4 chars of timestamp
  const r = Math.random().toString(36).slice(2, 6); // 4 random chars
  return c + t + r;
}

type Options = {
  separator?: string;
  lowercase?: boolean;
  replacements?: Record<string, string>;
};

/**
 * Convert a string to a dash-separated string
 *
 * @example
 *   slugify('Google This'); // 'google-this'
 *
 * @link https://github.com/jonschlinkert/dashify
 */
export function slugify(string: string, opts: Options = {}) {
  if (typeof string !== 'string') {
    throw new TypeError(`Expected a string, got \`${typeof string}\``);
  }

  // resolved options
  const options: Required<Options> = {
    separator: opts.separator ?? '-',
    lowercase: opts.lowercase ?? true,
    replacements: opts.replacements ?? {},
  };

  let result = string;
  // transliterate to latin characters
  result = transliterate(result, {
    customReplacements: Object.entries(options.replacements),
  });
  // separate out words, pascal-case snake-case kebab-case
  result = result
    // Separate capitalized words.
    .replace(/([A-Z]{2,})(\d+)/g, '$1 $2')
    .replace(/([a-z\d]+)([A-Z]{2,})/g, '$1 $2')
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')
    // This avoids matching plural acronyms like `APIs`.
    .replace(/([A-Z]+)([A-Z][a-rt-z\d]+)/g, '$1 $2');

  // add separator
  result = result
    .replace(/\W/g, (m) => (/[À-ž]/.test(m) ? m : options.separator))
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, options.separator);

  // transform to lowercase if needed
  return options.lowercase ? result.toLowerCase() : result;
}
