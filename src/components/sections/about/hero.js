import React from "react";
// import AboutBg from "../../../pages/bg.jpg";

function AboutHero() {
  // console.log(process.env.PUBLIC_URL+ "/img/about/bg.jpg");
    return (
    <>
    
    {/* <!-- Page Title --> */}
    <div class="neoh_fn_pagetitle">
          <div class="bg_overlay">
            <div class="bg_color"></div>
            {/* <div class="bg_image" data-bg-img="/img/about/bg.jpg"></div> */}
            <div class="bg_image" data-bg-img="img/svg/AboutImages/AboutBackgroundImage.svg"></div>
          </div>
          <div class="pt_content">
            <div class="container">
              <h3
                class="fn_title fn_animated_text"
                data-wait="1000"
                data-speed="8"
              >
                About
              </h3>
              <p class="fn_desc">
                <a href="/">Home</a>
                <span class="separator">/</span>
                <span class="current">About</span>
              </p>
            </div>
          </div>
        </div>
        {/* <!-- !Page Title --> */}
    </>
    
  );
}

export default AboutHero;