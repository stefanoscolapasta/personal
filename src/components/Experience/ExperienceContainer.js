import uniqid from 'uniqid'
import './Experience.css'

const ExperienceContainer = ({ experience }) => (
  <div className='experience'>
    
    <h3>{experience.company}</h3>
    <h4 className='experience__company' style={{marginTop: 7}}>{experience.title}</h4>

    <p className='experience__date' style={{marginTop: 10, fontStyle: 'italic', fontSize: 14}}>{experience.responsibility}</p>
    <p className='experience__date' style={{marginTop: 10, fontWeight: 'bold'}}>{experience.period}</p>
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
