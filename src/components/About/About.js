import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import uniqid from 'uniqid'
import './About.css'
import { FormatAlignLeft } from '@material-ui/icons'
import { Grid, Typography } from '@material-ui/core'
import { about } from '../../portfolio'

const About = () => {
  const { photo, name, role, resume, social } = about

  return (
    <div className='about center'>
      {photo && (
        <img height="200px" alt="Avatar placeholder" src={photo} />
      )}
      {name && (
        <>
          <h3 style={{marginTop: 20, paddingBottom: 7}}>
            Welcome! My name is
          </h3>
          <h1>
             <span className='about__name'>{name}</span>
          </h1>
        </>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}

      <Grid
        style={{
          marginTop: 40
        }}
        container
        direction='column'
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        </Grid>
        <Grid item style={{marginTop: 20}}>
        <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        </Grid>
      </Grid>

    </div>
  )
}

export default About
