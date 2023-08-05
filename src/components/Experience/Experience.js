import { Grid, Typography } from '@material-ui/core'
import { BorderColor } from '@material-ui/icons'
import uniqid from 'uniqid'
import { experience } from '../../portfolio'
import ExperienceContainer from './ExperienceContainer'
import './Experience.css'

const Education = () => {
  if (!experience.length) return null

  return (
    <section id='experience' style={{marginTop: 75}}>
      <h2 className='section__title'>Experience</h2>

      <div className='experience__grid' style={{ width: '80%'}}>
        {experience.map((exp) => (
          <ExperienceContainer key={uniqid()} experience={exp} />
        ))}
      </div>
    </section>
  )
}

export default Education
