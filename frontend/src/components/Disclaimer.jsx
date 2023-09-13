import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Prefooter from './Prefooter'
import Footer from './Footer'

const Disclaimer = () => {
  return (
    <>
      <Header/>
      <Slider/>
         <div className="container-fluid m-3">
          <div className="row">
            <div className="col">
              <h3 style={{overflowY:"hidden"}}>Disclaimer</h3>
              <p >The information and services may contain bugs, errors, problems or other limitations. We and our affiliated parties have no liability whatsoever for your use of any information or service. In particular, but not as a limitation thereof, we and our affiliated parties are not liable for any indirect, special, incidental or consequential damages (including damages for loss of business, loss of profits, litigation, or the like), whether based on breach of contract, breach of warranty, tort (including negligence), product liability or otherwise, even if advised of the possibility of such damages. The negation of damages set forth above are fundamental elements of the basis of the bargain between us and you. This site and the information would not be provided without such limitations. No advice or information, whether oral or written, obtained by you from us through the site shall create any warranty, representation or guarantee not expressly stated in this agreement.</p>
            </div>
          </div>
         </div>
      <Prefooter/>
      <Footer/>
    </>
  )
}

export default Disclaimer