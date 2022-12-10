import React from 'react';
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div className="about-us about-cta-bg mt-5">
      <div className="about-cta-section w-100 text-center">
        <h1 className="about-us-heading text-white">CTA HEading</h1>
        <p className="about-us-subheading w-75 mx-auto">CTA subheading</p>
        <div className="about-contact-btn text-center">
          <Link
            to={URL}
            className="hero-btn"
            style={{
              textDecoration: 'none',
              color: '#FFFFFF',
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact Now
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
        </div>
        <div
          className="row mx-md-5 mx-lg-5 mx-xl-5 px-md-5 px-lg-5 px-xl-5 mt-5"
          style={{ maxWidth: '100vw' }}
        >
          <div className="col-md-4 col-lg-4 col-xl-4 px-md-4 px-lg-4 px-xl-4 px-5">
            <p className="text-start text-md-center text-lg-center text-xl-center ms-4">
              <img
                className="social-icon"
                style={{ maxWidth: '24px', marginTop: '-5px' }}
                src={'https://takniik.netlify.app/static/media/green-tick-circle.07657c4138cbf83dfb2048edf3cdae4d.svg'}
                alt="greentick"
              />{' '}
              &nbsp; aiushdfijhasdijfhbasdikfhbdifhb
            </p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 px-md-4 px-lg-4 px-xl-4 px-5">
            <p className="text-start text-md-center text-lg-center text-xl-center ms-4">
              <img
                className="social-icon"
                style={{ maxWidth: '24px', marginTop: '-5px' }}
                src={'https://takniik.netlify.app/static/media/green-tick-circle.07657c4138cbf83dfb2048edf3cdae4d.svg'}
                alt="greentick"
              />{' '}
              &nbsp; aiushdfijhasdijfhbasdikfhbdifhb
            </p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 px-md-4 px-lg-4 px-xl-4 px-5">
            <p className="text-start text-md-center text-lg-center text-xl-center ms-4">
              <img
                className="social-icon"
                style={{ maxWidth: '24px', marginTop: '-5px' }}
                src={'https://takniik.netlify.app/static/media/green-tick-circle.07657c4138cbf83dfb2048edf3cdae4d.svg'}
                alt="greentick"
              />{' '}
              &nbsp; aiushdfijhasdijfhbasdikfhbdifhb
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
