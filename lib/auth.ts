// Simple auth utility for MVP
// In production, this would connect to a real authentication service

export interface User {
  id: string
  username: string
  isAuthenticated: boolean
}

export type UserRole = 'analyst' | 'citizen'
export type ThreatLevel = 'LOW' | 'MEDIUM' | 'HIGH'

const THREAT_LEVEL_KEY = 'absher-neuron-threat-level'
const MONITOR_FLAG_KEY = 'absher-neuron-monitor-flag'

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

export function getUserRole(): UserRole {
  if (typeof window === 'undefined') return 'analyst'
  const storedRole = localStorage.getItem('absher-neuron-role') as UserRole | null
  return storedRole ?? 'analyst'
}

export function setUserRole(role: UserRole) {
  if (typeof window === 'undefined') return
  localStorage.setItem('absher-neuron-role', role)
}

export function logout() {
  if (typeof window === 'undefined') return
  localStorage.removeItem('absher-neuron-auth')
  localStorage.removeItem('absher-neuron-role')
  localStorage.removeItem(THREAT_LEVEL_KEY)
  localStorage.removeItem(MONITOR_FLAG_KEY)
}

export function getThreatLevel(): ThreatLevel {
  if (typeof window === 'undefined') return 'MEDIUM'
  const stored = localStorage.getItem(THREAT_LEVEL_KEY) as ThreatLevel | null
  return stored ?? 'MEDIUM'
}

export function setThreatLevel(level: ThreatLevel) {
  if (typeof window === 'undefined') return
  localStorage.setItem(THREAT_LEVEL_KEY, level)
}

export function setCitizenMonitorFlag(value: boolean) {
  if (typeof window === 'undefined') return
  localStorage.setItem(MONITOR_FLAG_KEY, value.toString())
}

export function hasCitizenMonitorFlag(): boolean {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(MONITOR_FLAG_KEY) === 'true'
}









