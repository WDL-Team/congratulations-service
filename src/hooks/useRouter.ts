type TRouterResponse = {
  pathname: string
  host: string
  query: string
}

export const useRouter = (): TRouterResponse => {
  if (typeof window !== 'undefined') {
    return {
      pathname: window.location?.pathname || '/',
      host: window.location?.host || '',
      query: window.location?.search.slice(1) || '',
    }
  }
  return { pathname: '/', host: '', query: '' }
}
