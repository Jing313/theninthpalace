import React from "react";

function HomeService() {
    return (
    <>
    <section id="services">
			
			{/* <!-- Dividers --> */}
			<img src="svg/divider.svg" alt="" class="fn__svg fn__divider top_divider"/>
			<img src="svg/divider.svg" alt="" class="fn__svg fn__divider bottom_divider"/>
			{/* <!-- !Dividers --> */}
			
			
			<div class="container">
				
				{/* <!-- Main Title --> */}
				<div class="neoh_fn_title">
					<h3 class="fn_title">What Makes Us Different?</h3>
					<div class="line"><span></span></div>
				</div>
				{/* <!-- !Main Title --> */}
				
				{/* <!-- Services --> */}
				<div class="neoh_fn_services">
					<ul>
						<li>
							<div class="item">
								<div class="item_num"><span>01</span></div>
								<div class="item_content">
									<h3 class="fn_title">E4, E5</h3>
									<p class="fn_desc fn_animated_text">
									The Inception Collection mint is followed by the launch of The Resistance Economy and Auxiliary Airdrop.
									The PC and Mobile games will both be launched alongside our ConnectONE backend, meant to provide frictionless onboarding for non-crypto gamers, shortly after the Auxiliary Airdrop.
									Throughout this time we will be hiring enthusiastically, scaling our servers and backend systems to manage MMO functionality, and developing the Asset Marketplace.
									The "Moonshot” for the project is to become an incubator for other Web3 games with ambitious gameplay goals.
									</p>
								</div>
							</div>
						</li>
						<li>
							<div class="item">
								<div class="item_num"><span>02</span></div>
								<div class="item_content">
									<h3 class="fn_title">BC4, NC6</h3>
									<p class="fn_desc fn_animated_text">
									Quality and sustainability are the ideals driving the project.
									The NFTs are hand-drawn with unimaginable detail; certain NFTs hold hidden messages.
									The game mechanics and progressions are not only designed for excellent gameplay but are unique to specific metadata.
									The game economy was constructed to be sustainable but exciting, complex, and most importantly scalable.
									The narrative of The Ninth Palace guides the PC game; the mobile game's narrative is a sub-set of The Ninth Palace storyline but a bit more romantic.
									</p>
								</div>
							</div>
						</li>
						<li>
							<div class="item">
								<div class="item_num"><span>03</span></div>
								<div class="item_content">
									<h3 class="fn_title">QH5, NF6</h3>
									<p class="fn_desc fn_animated_text">
									The future of the project is ambitious.
									Our roadmap encompasses the next 18 months and the v2 roadmap is already being plotted for time.
									We intend to build a gaming franchise with The Ninth Palace.
									We want to grow our core team, our industry network, and our community to make the incubator that much more effective.
									Most importantly we want to be the bridge into Web3 for non-crypto gamers.
									</p>
								</div>
							</div>
						</li>
						<li>
							<div class="item">
								<div class="item_num"><span>04</span></div>
								<div class="item_content">
									<h3 class="fn_title">QxF7#</h3>
									<p class="fn_desc fn_animated_text">
									We started this project tracking expenses, investments, and work hours. We’re a company.
									Our accounting principles actually work with Web3.
									We've applied for legal registration in Singapore, and are awaiting approval for a crypto-bank account.
									We've worked with legal advisors from the beginning to ensure our game economy was compliant across jurisdictions, and any future TGE would satisfy the Howey Test requirements.
									Our secret to sustainability actually lies in our approach to running a start-up company.
									</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
				{/* <!-- !Services --> */}
				
			</div>
		</section>
    </>
    
  );
}

export default HomeService;