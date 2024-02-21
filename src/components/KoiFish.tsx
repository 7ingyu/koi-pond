import { useEffect, useRef } from "react"
import MotionPathPlugin from "gsap/MotionPathPlugin"
import gsap from "gsap"

type KoiFishProps = {
  color: 'gold' | 'red' | 'black' | 'white'
}

const KoiFish = ({ color = 'red' } : KoiFishProps) => {
  const tl = gsap.timeline()

  const fish = useRef<HTMLDivElement | null>(null)
  function randomBetween(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  type Point = {
    x: string
    y:string
  }

  type Range = {x: [number, number], y: [number, number]}
  const getRange = (position: 0 | 1 | 2 | 3) : Range => {
    switch (position) {
      case 0:
        // top
        return {x: [-10, 110], y: [-15, -5]}
      case 1:
        // right
        return {x: [105, 115], y: [-10, 110]}
      case 2:
        // bottom
        return {x: [-10, 110], y: [105, 115]}
      case 3:
        //left
        return {x: [-15, -5], y: [-10, 110]}
    }
  }

  const generatePath = () => {
    const path = []

    // start off screen
    const startPos = Math.floor(Math.random() * 4)
    const {x: startX, y: startY}: Range = getRange(startPos as 0 | 1 | 2 | 3)
    path.push({
      x: `${randomBetween(...startX)}vw`,
      y: `${randomBetween(...startY)}vh`
    })

    path.push({
      x: `${randomBetween(0, 100)}vw`,
      y: `${randomBetween(0, 100)}vh`
    })
    // path.push({
    //   x: `${randomBetween(51, 100)}vw`,
    //   y: `${randomBetween(0, 50)}vh`
    // })

    // End off screen
    const endPos = Math.floor(Math.random() * 4)
    const {x: endX, y: endY}: Range = getRange(endPos as 0 | 1 | 2 | 3)
    path.push({
      x: `${randomBetween(...endX)}vw`,
      y: `${randomBetween(...endY)}vh`
    })

    console.log(path)
    return path
  }

  const animate = () => {
    // if (fish?.current) {
    // const path = generatePath()
    tl.to(fish.current, {
      motionPath: {
        path: generatePath(),
        // align: "self",
        // alignOrigin: [0.5, 0],
        autoRotate: true,
        // fromCurrent: false,
        curviness: 2,
        // repeatRefresh: true,
        // resolution: 20
      },
      duration: randomBetween(10, 20),
      ease: "none",
      // repeat: started ? -1,
      onComplete: () => animate(),
    });
  }

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin)
    animate()
  }, [])

  return (
    <div
      className="koi position-absolute top-0 start-0"
      ref={fish}
      style={{
        height: '2rem',
        transformOrigin: "50% 50%"
      }}
    >
      {/* <svg viewBox="0 0 800 400">
        <path id='path' style={{stroke: 'red', strokeWidth: '2px', fill: 'none'}}/>
      </svg> */}
      <svg
        className="koi-svg"
        aria-label={`${color} koi fish`}
        data-name="Koi Fish"
        viewBox="0 0 621.31 189.89"
      >
        <g data-name="Koi SVG Paths">
          <g>
            <path className={`koi-${color}`} d="M0,94.67c0,21.79,72,14.37,166.98,0C72,80.3,0,72.88,0,94.67Z"/>
            <path className={`koi-${color}`} d="M506.99,51.41c-4.33-8.82-10.67-17.75-18.82-25.9C463.56.9,431.9-7.33,417.45,7.12c-10.68,10.68-8.96,30.75,2.59,50.43-81.78,8.86-175.15,25.33-253.06,37.12,77.73,11.76,170.84,28.17,252.48,37.05-11.87,19.88-13.73,40.26-2.94,51.04,14.45,14.45,46.11,6.22,70.71-18.38,8.33-8.33,14.77-17.46,19.1-26.47,68.05,1.34,114.98-9.17,114.98-43.25s-46.62-44.52-114.32-43.26Z"/>
          </g>
        </g>
        </svg>
    </div>
  )
}

export default KoiFish