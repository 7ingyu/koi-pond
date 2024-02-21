import { useEffect, useRef, useState } from 'react'
import '@/styles/index.scss'
import { ThemeContext } from '@/context'
import { Pond } from '@/components'

function App() {
  const body = useRef<HTMLElement>(document.body)
  const [ theme, setTheme ] = useState('dark')

  useEffect(() => {
    body.current.setAttribute('data-bs-theme', theme);
  }, [body, theme])

  return(
    <ThemeContext.Provider value={[ theme, setTheme ]}>
      <Pond />
    </ThemeContext.Provider>
  )
}

export default App
