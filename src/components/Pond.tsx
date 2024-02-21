// import { useEffect } from "react"
// import MotionPathPlugin from "gsap/MotionPathPlugin"
// import gsap from "gsap"
import { KoiFish, Water, Background } from "@/components"
import { randomBetween } from "@/utils"

const Pond = ({ numFish = 10 }) => {

  // useEffect(() => {
  //   gsap.registerPlugin(MotionPathPlugin)
  // }, [])
  const colors: ('gold' | 'red' | 'black' | 'white')[] = ['gold', 'black', 'red', 'white']

  return (
    <div id="koi-pond">
      {/* <Background /> */}
      <div className="fish-container">
        {new Array(numFish).fill(0).map((_, i) => {
          const color = colors[Math.floor(randomBetween(0, 4))]
          return <KoiFish key={i} color={color} />
        })}
      </div>
      <Water />
    </div>
  )
}

export default Pond;