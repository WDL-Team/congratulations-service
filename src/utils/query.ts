import type { TCongratsData } from '../types/congrats'

type TPlainObject<T = string> = { [k in string]: T }

function isPlainObject(value: unknown): value is TPlainObject {
  return typeof value === 'object' && value !== null && value.constructor === Object && Object.prototype.toString.call(value) === '[object Object]'
}

function isArrayOrObject(value: unknown): value is [] | TPlainObject {
  return isPlainObject(value) || Array.isArray(value)
}

const getKey = (key: string, parentKey?: string) => (parentKey ? `${parentKey}[${key}]` : key)

function getParams(data: TPlainObject | [], parentKey?: string) {
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

export function queryToString(data: TPlainObject, prev?: string) {
  if (!isPlainObject(data)) throw new Error('input must be an object')
  const obj = prev ? { ...queryToObject(prev), ...data } : data
  return getParams(obj)
    .map(arr => arr.join('='))
    .join('&')
}

export function queryToObject(query: string): TCongratsData {
  const pairs = query.split('&')
  const obj: Record<string, string> = {}

  for (const str of pairs) {
    if (str === '') continue

    const pair = str.split('=')
    obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1])
  }

  return obj as TCongratsData
}
