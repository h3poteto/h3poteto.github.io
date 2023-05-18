type Props = {
  start: string
  company: string
  jobs: Array<string>
}

const Career: React.FC<Props> = ({ start, company, jobs }) => (
  <>
    <p>{start}</p>
    <b style={{ lineHeight: '2em', fontSize: '1.4em' }}>{company}</b>
    <ul>
      {jobs.map(j => (
        <li style={{ marginBottom: '0.7em' }} key={j}>
          {j}
        </li>
      ))}
    </ul>
  </>
)

export default Career
