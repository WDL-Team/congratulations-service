import type { TCongratsData } from '../types/congrats'

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

export function queryToString(data: PlainObject, prev?: string) {
  if (!isPlainObject(data)) throw new Error('input must be an object')
  const obj = prev ? { ...queryToObject(prev), ...data } : data
  return getParams(obj)
    .map(arr => arr.join('='))
    .join('&')
}

export function queryToObject(query: string): TCongratsData {
  const pairs = query.split('&')
  const obj: Record<string, string> = {}

  for (const i in pairs) {
    if (pairs[i] === '') continue

    const pair = pairs[i].split('=')
    obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1])
  }

  return obj as TCongratsData
}
