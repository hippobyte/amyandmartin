import { useEffect } from 'react'
import { useAuth, useRouter } from '../index'

export const useRequireAuth = (redirectUrl = '/auth/login') => {
  const auth = useAuth()
  const router = useRouter()
  
  // redirect if user false
  // not yet authenticated
  useEffect(() => {
    if (auth.user === false){
      router.push(redirectUrl)
    }
  }, [auth, router])
    
  return auth
}