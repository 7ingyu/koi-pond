type KoiFishProps = {
  color: 'gold' | 'red' | 'black' | 'white'
}

const KoiFish = ({ color = 'red' } : KoiFishProps) => {
  return (
    <div
      className="koi position-absolute top-0 left-0"
      style={{
        width: '2rem',
      }}
    >
      <svg
        aria-label={`${color} koi fish`}
        data-name="Koi Fish"
        viewBox="0 0 132.49 384.98">
          <defs>
          </defs>
          <g id="Koi" data-name="Koi">
            <path
              className={`koi-${color}`}
              d="M101.48,107.91c.39-6.95.64-13.75.73-20.35.35-2.46.37-4.7.03-6.68C102.04,34.56,92.95,0,66.24,0S30.45,34.56,30.25,80.89c-.34,1.98-.32,4.22.03,6.68.09,6.6.34,13.4.73,20.35C6.15,133.76-6.28,161.62,3.16,171.07c5.81,5.81,18.6,3.34,33.61-5.22,10.37,77.15,52.48,219.14,29.48,219.14s19.1-141.99,29.48-219.14c15,8.56,27.79,11.04,33.61,5.22,9.44-9.44-2.99-37.31-27.85-63.15Z"/>
          </g>
        </svg>
    </div>
  )
}

export default KoiFish