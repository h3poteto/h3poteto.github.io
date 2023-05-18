type Props = {
  image: string
  name: string
}

const Language: React.FC<Props> = ({ image, name }) => (
  <div style={{ display: 'flex', alignItems: 'center', width: '380px' }}>
    <div>
      <img src={image} width="60" />
    </div>
    <div>
      <p
        style={{
          fontWeight: 'bold',
          fontSize: '1.3em',
          marginLeft: '2em'
        }}
      >
        {name}
      </p>
    </div>
  </div>
)

export default Language
