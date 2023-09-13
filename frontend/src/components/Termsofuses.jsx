import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Prefooter from './Prefooter'
import Footer from './Footer'

const Termsofuses = () => {
  return (
    <>
      <Header/>
      <Slider/>
      <div className="container-fluid p-2">
        <div className="row">
          <div className="col">
            <div className="box  m-4 p-4" style={{boxShadow:"4px 4px 5px gray"}}>
              <h4 style={{overflowY:"hidden"}}>Terms of Uses</h4>
              <p>We reserve the right in our sole discretion to edit or delete any documents, information or other content appearing on the Site.</p>
              <strong>Indenification</strong>
              <p>You agree to indenify, defend and hold us and our partners, attorneys, staff and affiliates (collectively, “Affiliated Parties”) harmless from any liability, loss, claim and expense, including reasonable attorney’s fees, related to your violation of this Agreement or use of the Site.</p>
              <strong>Non-Transferable</strong>
              <p>Your right to use the Site is not transferable. Any password or right given to you to obtain information or documents is not transferable.</p>
              <strong>Disclaimer</strong>
              <p>The information and services may contain bugs, errors, problems or other limitations. We and our affiliated parties have no liability whatsoever for your use of any information or service. In particular, but not as a limitation thereof, we and our affiliated parties are not liable for any indirect, special, incidental or consequential damages (including damages for loss of business, loss of profits, litigation, or the like), whether based on breach of contract, breach of warranty, tort (including negligence), product liability or otherwise, even if advised of the possibility of such damages. The negation of damages set forth above are fundamental elements of the basis of the bargain between us and you. This site and the information would not be provided without such limitations. No advice or information, whether oral or written, obtained by you from us through the site shall create any warranty, representation or guarantee not expressly stated in this agreement.</p>
              <strong>Use of Information</strong>
              <p>We reserve the right, and you authorize us, to the use and assignment of all information regarding Site uses by you and all information provided by you in any manner consistent with our Privacy Policy.</p>
              <strong>Privacy Policy</strong>
              <p>Our Privacy Policy, as it may change from time to time, is a part of this Agreement.</p>
              <strong>Links to Other Web Sites</strong>
              <p>The Site contains links to other Web sites. We are not responsible for the content, accuracy or opinions express in such Web sites, and such Web sites are not investigated, monitored or checked for accuracy or completeness by us. Inclusion of any linked Web site on our Site does not imply approval or endorsement of the linked Web site by us. If you decide to leave our Site and access these third-party sites, you do so at your own risk.</p>
              <strong>Information and Press Releases</strong>
              <p>The Site may contain information and press releases about us. While this information was believed to be accurate as of the date prepared, we disclaim any duty or obligation to update this information or any press releases. Information about companies other than ours contained in the press release or otherwise, should not be relied upon as being provided or endorsed by us.</p>
            </div>
          </div>
        </div>
      </div>
      <Prefooter/>
      <Footer/>

    </>
  )
}

export default Termsofuses