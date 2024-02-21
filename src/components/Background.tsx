const Background = () => {

  return (
    <>
      <div className="bg">
        <svg>
          <filter id="bg-turbulence" x="0" y="0" width="100%" height="100%">
            <feTurbulence id="water-filter" numOctaves="3" seed="2" baseFrequency="0.02 0.05"></feTurbulence>
            <feDisplacementMap scale="10" in="SourceGraphic"></feDisplacementMap>
            <animate xlinkHref="#water-filter" attributeName="baseFrequency" dur="60s" keyTimes="0;0.5;1" values="0.02 0.06;0.04 0.08;0.02 0.06" repeatCount="indefinite"/>
          </filter>
        </svg>
      </div>
    </>
  )
}

export default Background