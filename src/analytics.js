import ReactGA from 'react-ga4'

const ID = import.meta.env.VITE_GA_ID

export function initGA() {
  if (ID) ReactGA.initialize(ID)
}

export function trackPageView(path) {
  if (!ID) return
  ReactGA.send({ hitType: 'pageview', page: path })
}

export function trackEvent(name, params = {}) {
  if (!ID) return
  ReactGA.event(name, params)
}
