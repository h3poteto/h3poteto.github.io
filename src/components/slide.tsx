import React from 'react'

type Props = {
  id: string
}

const Slide: React.FC<Props> = ({ id }) => (
  <div
    style={{
      left: 0,
      width: '100%',
      height: 0,
      position: 'relative',
      paddingBottom: '56.1987%',
      marginBottom: '2rem'
    }}
  >
    <iframe
      src={`//speakerdeck.com/player/${id}`}
      style={{
        border: 0,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'absolute'
      }}
      allowFullScreen
    ></iframe>
  </div>
)

export default Slide
