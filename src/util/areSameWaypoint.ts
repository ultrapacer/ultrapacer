type S = { id: string | symbol } | string | symbol
type W = { site: S; loop: number }

function areSame(a: S, b: S) {
  return (typeof a === 'object' ? String(a.id) : a) === (typeof b === 'object' ? String(b.id) : b)
}

export function areSameWaypoint(a: W, b: W) {
  return Boolean(a && b && areSame(a.site, b.site) && a.loop === b.loop)
}
