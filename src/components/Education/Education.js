import { Box, Grid, Typography, Card, CardContent, CardActions, Button } from '@material-ui/core'
import { BorderColor } from '@material-ui/icons'
import uniqid from 'uniqid'
import { education } from '../../portfolio'
import EducationContainer from './EducationContainer'
import './Education.css'


const Education = () => {
  if (!education.length) return null

  return (
    <section id='education' style={{marginTop: 75}}>
      <h2 className='section__title'>Education</h2>

      <div className='education__grid' style={{ width: '40% !important'}}>
        {education.map((edu) => (
          <EducationContainer key={uniqid()} education={edu} />
        ))}
      </div>
    </section>
  )
}

export default Education
