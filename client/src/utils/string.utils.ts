/**
 * Checks if the supplied string is a valid URL.
 * @param string
 * @returns whether the string is a valid URL
 */
export const isValidHttpUrl = (string: string) => {
  let url

  if (string.startsWith('www.')) return true

  try {
    url = new URL(string)
  } catch (_) {
    return false
  }

  return url.protocol === 'http:' || url.protocol === 'https:'
}
