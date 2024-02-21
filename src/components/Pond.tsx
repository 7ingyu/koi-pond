// import { useEffect } from "react"
// import MotionPathPlugin from "gsap/MotionPathPlugin"
// import gsap from "gsap"
import { KoiFish } from "@/components"

const Pond = () => {

  // useEffect(() => {
  //   gsap.registerPlugin(MotionPathPlugin)
  // }, [])

  return (
    <div id="koi-pond">
      <KoiFish color="gold" />
    </div>
  )
}

export default Pond;