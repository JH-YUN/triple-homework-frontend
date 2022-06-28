import { useEffect, useRef, useState } from 'react'

interface UseCounterUpProps {
  start?: number
  end: number
  duration: number
}

const easing = (progress: number) => {
  return progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress) // easingOutExpo
}

export const useCounterUp = ({
  start = 0,
  end,
  duration,
}: UseCounterUpProps) => {
  const [counter, setCounter] = useState(start)
  const frameRate = 1000 / 60 // 60fps
  const currentFrame = useRef(0)
  const totalFrame = Math.round(duration / frameRate)
  const range = end - start

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentFrame.current < totalFrame) {
        currentFrame.current += 1
        const progress = currentFrame.current / totalFrame
        setCounter(Math.round(easing(progress) * range) + start)
      } else {
        clearInterval(interval)
      }
    }, frameRate)
  }, [])

  return counter
}
