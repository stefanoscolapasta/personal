import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './Education.css'

const EducationContainer = ({ education }) => (
  <div className='education'>
    <p className='education__level' style={{fontStyle: 'italic'}}>{education.level}</p>
    <h3>{education.university}</h3>
    <h4 className='education__course' style={{marginTop: 7, marginBottom: 10, fontStyle: 'italic'}}>{education.course}</h4>
    <p className='education__date' style={{fontWeight: 'bold'}}>{education.date}</p>
    <p className='education__grade'style={{marginTop: 20}}>{education.grade}</p>
  </div>
)

export default EducationContainer
