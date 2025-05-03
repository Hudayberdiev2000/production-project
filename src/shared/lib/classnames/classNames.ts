type Mods = Record<string, boolean | string>

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = []
): string {
  return [
    cls,
      ...Object.entries(mods)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
    ...additional.filter(Boolean),
  ].join(" ")
}
