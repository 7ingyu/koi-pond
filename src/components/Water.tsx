const Water = () => {

  return (
    <>
      <div className="water">
        <svg>
          <filter id="water-turbulence" x="0" y="0" width="100%" height="100%">
            <feTurbulence id="water-filter" numOctaves="3" seed="2" baseFrequency="0.002 0.005"></feTurbulence>
            <feDisplacementMap scale="50" in="SourceGraphic"></feDisplacementMap>
            <animate xlinkHref="#water-filter" attributeName="baseFrequency" dur="30s" keyTimes="0;0.5;1" values="0.002 0.006;0.004 0.008;0.002 0.006" repeatCount="indefinite"/>
          </filter>
        </svg>
      </div>
      <div className="water-credit">
        <a href="https://www.freepik.com/free-vector/vector-seamless-rippled-swimming-pool-abstract-illustration-horizontally-vertically-repeatable_38449309.htm#query=water%20texture&position=1&from_view=keyword&track=ais&uuid=0ce8c91d-47e1-4a1e-9a87-2670b3ee343f">Water texture by callmetak</a> on Freepik
      </div>
    </>
  )
}

export default Water