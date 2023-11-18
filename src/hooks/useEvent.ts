import { MutableRefObject, useEffect, useRef } from 'react'

/** @returns [ref object, event emitter] */
export default function useEvent<T extends HTMLElement>(
  name: string,
  callback: ((event: Event) => void) | undefined
): [MutableRefObject<T | null>, () => void] {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (callback) el?.addEventListener(name, callback)
    return () => {
      if (callback) el?.removeEventListener(name, callback)
    }
  }, [ref, name, callback])

  return [ref, () => ref.current?.dispatchEvent(new Event(name))]
}
