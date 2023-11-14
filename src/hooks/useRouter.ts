type TRouterResponse = {
  pathname: string
  host: string
  query: string
}

export const useRouter = (): TRouterResponse => {
  if (typeof window !== 'undefined') {
    const protocol = window.location?.protocol || 'http:'
    return {
      pathname: window.location?.pathname || '/',
      host: `${protocol}//${window.location?.host || ''}`,
      query: window.location?.search.slice(1) || '',
    }
  }
  return { pathname: '/', host: '', query: '' }
}
