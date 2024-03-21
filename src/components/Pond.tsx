// import { useEffect } from "react"
// import MotionPathPlugin from "gsap/MotionPathPlugin"
// import gsap from "gsap"
import {
  KoiFish,
  Water,
  // Background,
  ThemeToggle
} from "@/components"
// import { randomBetween } from "@/utils"

const Pond = ({ numFish = 20 }) => {

  // useEffect(() => {
  //   gsap.registerPlugin(MotionPathPlugin)
  // }, [])

  return (
    <div id="koi-pond">
      {/* <Background /> */}
      <div className="fish-container">
        {new Array(numFish).fill(0).map((_, i) => {
          return <KoiFish key={i} />
        })}
      </div>
      <Water />
      <div className="p-3 d-flex justify-content-end">
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Pond;