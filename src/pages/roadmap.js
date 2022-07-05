import React, { Component }  from 'react';
import Navbar from "../components/navbar";
import Header from "../components/header";
import ToTop from "../components/totop";
import Footer from "../components/footer";
import NormalContent from '../components/sections/roadmap/normalcontent';
import GoToTop from '../components/gototop';
import Script from '../components/utils/customscript';

function Roadmap() {
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
          {/* <SingleContent /> */}
          <NormalContent />
        {/* <!-- Content --> */}

        {/* <!-- Footer --> */}
        <Footer />
        {/* <!-- !Footer --> */}
        
        {/* <!-- Totop --> */}
        <ToTop />
        {/* <!-- !Totop --> */}
        {/* <!-- Go to top when load --> */}
		    <GoToTop />
      </div>
      {/* <Helmet>
        <script src="./js/init.js?ver=1.1" type="text/javascript" />
        <script src="./js/jquery.js" type="text/javascript" />
        <script src="./js/plugins.js" type="text/javascript" />
      </Helmet> */}
      <Script  />
    </div>
  );
}

export default Roadmap;