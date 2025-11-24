// Simple auth utility for MVP
// In production, this would connect to a real authentication service

export interface User {
  id: string
  username: string
  isAuthenticated: boolean
}

// Check if user is authenticated (for MVP, we'll use localStorage)
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false
  const auth = localStorage.getItem('absher-neuron-auth')
  return auth === 'true'
}

export function setAuthenticated(value: boolean) {
  if (typeof window === 'undefined') return
  localStorage.setItem('absher-neuron-auth', value.toString())
}

export function logout() {
  if (typeof window === 'undefined') return
  localStorage.removeItem('absher-neuron-auth')
}

