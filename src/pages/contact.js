import React, { Component }  from 'react';
import Navbar from "../components/navbar";
import Header from "../components/header";
import ToTop from "../components/totop";
import Footer from "../components/footer";
import HeroSection from "../components/sections/contact/hero";
import ContactForm from '../components/sections/contact/contactform';
import Teams from '../components/sections/about/team';

function Contact() {
  return (
    <div>
      <div class="neoh_fn_main" data-footer-sticky="">
        {/* <!-- Right Navigation --> */}
        <Navbar />
        {/* <!-- !Right Navigation --> */}

        {/* <!-- Header --> */}
        <Header />
        {/* <!-- !Header --> */}

        {/* <!-- Content --> */}
        <div class="neoh_fn_content">
          <HeroSection />
          {/* <ContactForm /> */}
          <Teams />
        </div>
        {/* <!-- Content --> */}

        {/* <!-- Footer --> */}
        <Footer />
        {/* <!-- !Footer --> */}
        
        {/* <!-- Totop --> */}
        <ToTop />
        {/* <!-- !Totop --> */}
      </div>
    </div>
  );
}

export default Contact;