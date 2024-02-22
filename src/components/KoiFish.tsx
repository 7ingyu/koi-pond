import { useEffect, useRef } from "react"
import MotionPathPlugin from "gsap/MotionPathPlugin"
import gsap from "gsap"
import { generatePath, randomBetween } from "@/utils"

const colors = [
  "orange",
  "white",
  "white-red",
  "white-orange",
  "black",
  "gold",
  "gold-black",
  "red",
]

const KoiFish = () => {
  const t1 = gsap.timeline()
  const t2 = gsap.timeline()

  const fish = useRef<HTMLDivElement | null>(null)
  const shadow = useRef<HTMLDivElement | null>(null)

  const animate = () => {
    // if (fish?.current) {
    const path = generatePath()
    const height: number = randomBetween(5, 10)
    const width: number = height * 3.258;
    const duration = randomBetween(10, 20)

    const animVars = {
      motionPath: {
        path,
        // align: "self",
        // alignOrigin: [0.5, 0],
        autoRotate: true,
        fromCurrent: false,
        curviness: 2,
        // repeatRefresh: true,
        // resolution: 20
      },
      height: `${height}vw`,
      width: `${width}vw`,
      duration,
      ease: "none",
      // repeat: started ? -1,
      onStart: () => {
        const color = colors[Math.floor(randomBetween(0, colors.length))]
        fish.current?.setAttribute('class', `koi koi-${color}`)
        fish.current?.setAttribute('aria-label', `${color} koi fish`)
      },
      onComplete: () => {
        t1.clear()
        t2.clear()
        animate()
      },
    }

    t1.to(fish.current, {
      height: `${height}vw`,
      width: `${width}vw`,
      duration: 0
    })
    t2.to(shadow.current, {
      height: `${height}vw`,
      width: `${width}vw`,
      duration: 0
    })

    // @ts-expect-error https://github.com/greensock/GSAP/issues/578#issuecomment-1957566551
    t1.to(fish.current, animVars)
    // @ts-expect-error https://github.com/greensock/GSAP/issues/578#issuecomment-1957566551
    t2.to(shadow.current, animVars)
  }

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin)
    animate()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="koi-container">
      <div
        className={`koi-shadow`}
        ref={shadow}
      >
      </div>
      <div
        // className={`koi koi-${color}`}
        ref={fish}
        // aria-label={`${color} koi fish`}
      >
      </div>
    </div>
  )
}

export default KoiFish