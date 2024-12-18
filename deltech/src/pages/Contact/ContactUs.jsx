import React from 'react';
import './contactUs.css';

function ContactUs() {
  return (
    <>
      <div className="container-fluid" id='contact'>
        <h2 className="text-center">Contact Us</h2>
        <div className="row">
          <div className="col-sm-5 contact-icons">
            <p><span className='glyphicon glyphicon-map-marker'></span>Machakos Univesity Tuckshop</p>
            <p><span className='glyphicon glyphicon-envelope'></span>deltech@gmail.com</p>
            <p><span className='glyphicon glyphicon-earphone'></span>+254794579602/+254759875503</p>
            <div className="map">
              <img src={"/assets/images/IMG_20231112_113921_918_transcpr.jpg"} alt="" width={"100"}/>
            </div>
          </div>
          <div className="col-sm-7">
            <div className="row">
              <div className="row">
                <div className="col-sm-5">
                  <label htmlFor="name">Name</label>
                </div>
                <div className="col-sm-7">
                  <input type="text" id='name' name='name' placeholder='' required/>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-5">
                  <label htmlFor="name">Email</label>
                </div>
                <div className="col-sm-7">
                  <input type="email" id='email' name='email' placeholder='' required/>
                </div>
              </div>
              <div className="col-sm-7">
                <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 form-group">
                <button class="btn btn-lg btn-info" type="submit">Send</button>
              </div>
            </div>
          </div>
        </div>
        <a class="up-arrow" href="#myPage" data-toggle="tooltip" title="TO TOP">
          <span class="glyphicon glyphicon-chevron-up"></span>
        </a>
      </div>
    </>
  )
}

export default ContactUs;