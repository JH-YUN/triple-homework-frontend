import { useEffect, useRef } from 'react'

export interface UseFadeInProps {
  duration: number
  delay?: number
  transX?: string
  transY?: string
}

export const useFadeIn = ({
  duration = 3000,
  delay = 0,
  transX = '0px',
  transY = '0px',
}: UseFadeInProps) => {
  const el = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (el.current) {
      el.current.style.transition = `opacity ${duration}ms linear ${delay}ms, transform ${duration}ms linear ${delay}ms`
      el.current.style.opacity = '1'
      el.current.style.transform = `translate(0, 0)`
    }
  }, [])
  return {
    ref: el,
    style: {
      opacity: 0,
      transform: `translate(${transX}, ${transY})`,
    },
  }
}
