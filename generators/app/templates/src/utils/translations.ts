import i18next, { InterpolationOptions } from 'i18next';

export default function (
  key: string | string[],
  options?: InterpolationOptions
): string {
  return i18next.t(key, options);
}
