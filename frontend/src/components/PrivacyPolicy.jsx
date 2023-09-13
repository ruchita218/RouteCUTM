import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Prefooter from './Prefooter'
import Footer from './Footer'

const PrivacyPolicy = () => {
  return (
    <>
      <Header/>
      <Slider/>
      <div className="container-fluid p-2">
        <div className="row">
          <div className="col">
            <div className="box  m-4 p-4" style={{boxShadow:"4px 4px 5px gray"}}>
              <h4 style={{overflowY:"hidden"}}>Privacy Policy</h4>
              <p>We respect the privacy of those who visit our web site. In accordance with this, we have created this policy in order to demonstrate our privacy commitment to our users:</p>
              <strong>What this Privacy Policy Covers</strong>
              <p>This Privacy Policy covers our treatment of personally identifiable information that we collect when you are on our site, and when you use our services. This policy also covers our treatment of any personally identifiable information that third parties share with us.</p>
              <p>This policy does not apply to the practices of organizations that we do not own or control, or to people that we do not employ or manage.</p>
              <strong>Information Collection and Use</strong>
              <p>We collect personally identifiable information when you register on our website, when you use our services, and when you visit our pages. We may also receive personally identifiable information from third parties.</p>
              <p>When you register with us, we ask for your name, email address, zip code, occupation, industry, and personal interests. Once you register with us and sign in to our services, you are not anonymous to us.</p>
              <p>We use this information for three general purposes: to customize the content you see, to fulfill your requests for certain services, and to contact you about services.</p>
              <p>We also automatically receive and record information on our server logs from your browser including your IP address, cookie information and the page you requested. This information is not linked to your account and will not be used to identify you.</p>
              <strong>Information Sharing and Disclosure</strong>
              <p>We will not sell or rent your personally identifiable information to anyone.</p>
              <p>We will send personally identifiable information about you to other companies or people when</p>
              <p>We have your consent to share the information;</p>
              <p>We respond to subpoenas, court orders or legal process; or</p>
              <p>We find that your actions on our web sites violate the Terms of Service</p>
              <strong>Changes to this Privacy Policy</strong>
              <p>The privacy policy is subject to modification from time to time. If we decide to change our privacy policy, we will post those changes here so that you will always know what information we gather, how we might use that information and whether we will disclose it to anyone. Any significant changes to our privacy policy will be announced on our home page. If you do not agree with the changes in our policy you can simply discontinue to visit our website.</p>
              <strong>Questions or Suggestions</strong>
              <p>If you have questions or suggestions send an email to us.</p>
              <strong>Communication</strong>
              <p>You consent to receive communications from us by way of e-mails, phone calls and SMS’s with respect to your request for a call back, regarding admissions to our courses and later on with respect to reminders on various timelines. Users will be required to register their valid phone numbers and e-mail addresses to facilitate such communication. We may also use your e-mail address/phone number to send You updates, newsletters, changes and due dates.</p>
            </div>
          </div>
        </div>
      </div>
      <Prefooter/>
      <Footer/>
    </>
  )
}

export default PrivacyPolicy