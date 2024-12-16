import { isArray } from '@repo/lib/assertions';
import { ClassNameValue, twMerge } from 'tailwind-merge';

/**
 * Creates a formatted className from given arguments
 *
 * @param args - String, array, or object
 * @returns Sanitized class-names
 */
export function cn(...args: ClassNameValue[]) {
  if (!args.length) throw new Error('No argument is used');
  const names: string[] = [];
  args.forEach((arg) => {
    if (!arg) return;
    const argType = arg?.constructor;
    if (argType === String || argType === Number) {
      names.push(arg.toString());
    } else if (isArray(arg)) {
      const inner = cn(...arg);
      if (inner) names.push(inner);
    } else if (argType === Object) {
      const entries = Object.entries(arg);
      entries.map(([key, value]) => Boolean(value) && names.push(key));
    }
    return;
  });
  return twMerge(names);
}

type PossibleRef<El> = React.ForwardedRef<El> | undefined;
/** Use multiple refs on a single element */
export function referrals<El>(...refs: PossibleRef<El>[]) {
  if (!refs.length) return;
  return (el: El) => {
    for (const ref of refs) {
      if (!ref) continue;
      else if (typeof ref === 'function') ref(el);
      else ref.current = el;
    }
  };
}
