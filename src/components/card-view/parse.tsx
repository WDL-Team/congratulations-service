export const parseText = (text: string): JSX.Element[] => {
  const arr = text.split('\n').map((str, id) => <p key={`p_${id}`}>{str || '\u00A0'}</p>)
  return arr
}
