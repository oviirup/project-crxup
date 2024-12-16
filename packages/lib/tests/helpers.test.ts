import { nanoid, slugify } from '@/helpers';
import { describe, expect, it } from 'vitest';

describe('nanoid', () => {
  it('should generate a string of length 12', () => {
    const id = nanoid();
    expect(id.length).toBe(12);
  });

  it('should generate unique IDs on multiple calls', () => {
    const ids = new Set();
    for (let i = 0; i < 100; i++) {
      ids.add(nanoid());
    }
    expect(ids.size).toBe(100);
  });

  it('should contain only alphanumeric characters', () => {
    const id = nanoid();
    expect(/^[a-z0-9]+$/i.test(id)).toBe(true);
  });
});

describe('slugify', () => {
  it('should return a slug string', () => {
    expect(slugify('Hello World')).toBe('hello-world');
    expect(slugify('React is Awesome')).toBe('react-is-awesome');
    expect(slugify('  leading and trailing spaces  ')).toBe('leading-and-trailing-spaces');
    expect(slugify('Multiple   spaces')).toBe('multiple-spaces');
    expect(slugify('Special chars*&^%$')).toBe('special-chars');
    expect(slugify('CamelCaseString')).toBe('camel-case-string');
    expect(slugify('Accented characters àéîôü')).toBe('accented-characters-aeioue');
  });

  it('should handle strings with special characters', () => {
    expect(slugify('foo@bar.com')).toBe('foo-bar-com');
    expect(slugify('foo@bar.com/hello')).toBe('foo-bar-com-hello');
    expect(slugify('foo@bar.com#section')).toBe('foo-bar-com-section');
    expect(slugify('hello:world')).toBe('hello-world');
    expect(slugify('hello;world')).toBe('hello-world');
    expect(slugify('hello,world')).toBe('hello-world');
    expect(slugify('hello.world')).toBe('hello-world');
    expect(slugify('hello/world')).toBe('hello-world');
  });

  it('should handle strings with multiple dashes', () => {
    expect(slugify('a--b')).toBe('a-b');
    expect(slugify('a---b')).toBe('a-b');
    expect(slugify('a----b')).toBe('a-b');
  });

  it('should handle strings with leading and trailing dashes', () => {
    expect(slugify('-hello-')).toBe('hello');
    expect(slugify('--hello--')).toBe('hello');
    expect(slugify('---hello---')).toBe('hello');
  });

  it('should handle strings with no changes needed', () => {
    expect(slugify('hello-world')).toBe('hello-world');
    expect(slugify('simple-slug')).toBe('simple-slug');
  });
});
