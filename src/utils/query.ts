type PlainObject<T = any> = { [k in string]: T }

function isPlainObject(value: unknown): value is PlainObject {
  return typeof value === 'object' && value !== null && value.constructor === Object && Object.prototype.toString.call(value) === '[object Object]'
}

function isArrayOrObject(value: unknown): value is [] | PlainObject {
  return isPlainObject(value) || Array.isArray(value)
}

const getKey = (key: string, parentKey?: string) => (parentKey ? `${parentKey}[${key}]` : key)

function getParams(data: PlainObject | [], parentKey?: string) {
  const result: [string, string][] = []

  for (const [key, value] of Object.entries(data)) {
    if (isArrayOrObject(value)) {
      result.push(...getParams(value, getKey(key, parentKey)))
    } else {
      result.push([getKey(key, parentKey), encodeURIComponent(String(value))])
    }
  }
  return result
}

export default function queryString(data: PlainObject) {
  if (!isPlainObject(data)) throw new Error('input must be an object')
  return getParams(data)
    .map(arr => arr.join('='))
    .join('&')
}
