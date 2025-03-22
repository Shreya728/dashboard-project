export const loginUser = (email: string, password: string) => {
  if (email && password.length >= 6) {
    localStorage.setItem('token', 'mock-jwt-token')
    return true
  }
  return false
}

export const logoutUser = () => {
  localStorage.removeItem('token')
}

export const isAuthenticated = () => {
  return !!localStorage.getItem('token')
}