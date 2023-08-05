import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './Education.css'

const EducationContainer = ({ education }) => (
  <div className='education'>
    <p className='education__level' style={{fontStyle: 'italic'}}>{education.level}</p>
    <h3>{education.university}</h3>
    <p className='education__course'>{education.course}</p>
    <p className='education__date' >{education.date}</p>
    <p className='education__grade'style={{marginTop: 20}}>{education.grade}</p>
  </div>
)

export default EducationContainer
