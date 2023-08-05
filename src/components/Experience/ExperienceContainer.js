import uniqid from 'uniqid'
import './Experience.css'

const ExperienceContainer = ({ experience }) => (
  <div className='experience'>
    <p className='experience__company'>{experience.title}</p>
    <h3>{experience.company}</h3>
    <p className='experience__date' style={{marginTop: 10}}>{experience.period}</p>
    <p className='experience__date' style={{marginTop: 10, fontStyle: 'italic', fontSize: 14}}>{experience.responsibility}</p>
    <ul className='experience__stack'>
        {experience.skills.map((item) => (
          <li key={uniqid()} className='experience__stack-item'>
            {item}
          </li>
        ))}
      </ul>
  </div>
)

export default ExperienceContainer
