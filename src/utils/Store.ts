import EventBus from './EventBus'

// JSON.parse(localStorage.getItem('CongratStore'))

export default class Store extends EventBus {
  static EVENT_UPDATE = 'Update'
  static STORE_NAME = 'CongratStore'

  protected static _instance: Store

  protected _state: { [key in string | symbol]: unknown } = {}

  constructor() {
    if (Store._instance) return Store._instance
    super()
    const savedState = localStorage.getItem(Store.STORE_NAME)
    this._state = savedState ? JSON.parse(savedState) ?? {} : {}
    Store._instance = this

    this.on(Store.EVENT_UPDATE, () => {
      // console.log('App store update')
      localStorage.setItem(Store.STORE_NAME, JSON.stringify(this._state))
    })
  }

  public getState() {
    return this._state
  }

  public removeState() {
    this._state = {}
    this.emit(Store.EVENT_UPDATE)
  }

  public get(id: string) {
    return getValue(this._state, id)
  }

  public set(id: string, value: unknown) {
    setValue(this._state, id, value)
    this.emit(Store.EVENT_UPDATE)
  }
}

type Indexed<T = any> = { [k in string | symbol]: T }

function setValue(object: Indexed, path: string, value: unknown) {
  if (object !== Object(object)) return object
  if (typeof path !== 'string' || path === '') throw new Error('Path must be string')
  let obj = object
  const arr = path.split('.')
  const last = arr.pop()
  arr.forEach(key => {
    if (!obj[key]) obj[key] = {}
    obj = obj[key]
  })
  if (last) obj[last] = value
  return object
}

function getValue(object: Indexed, path: string): unknown {
  if (object !== Object(object) || typeof path !== 'string' || path === '') {
    console.warn('App store. Wrong:', path)
    return object
  }
  return path.split('.').reduce((obj, key) => (obj[key] !== undefined ? obj[key] : obj), object)
}
