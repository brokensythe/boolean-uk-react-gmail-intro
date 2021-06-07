import Title from './EmailContentComponents/Title'
import EmailContentHeader from './EmailContentComponents/EmailContentHeader'
import EmailBody from './EmailContentComponents/EmailBody'
import EmailActions from './EmailContentComponents/EmailActions'

function EmailContent () {
    return <article className="email-content">
    <Title />
    <EmailContentHeader />
    <EmailBody />
    <EmailActions />
  </article>
}

export default EmailContent