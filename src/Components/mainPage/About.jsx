// ?> About section //

import React from "react";
import "./MainPage.css";
import ServicePage from "./ServicePage";

export default function About({ img, onClickHandler }) {
	return (
		<>
			<div className="row mb-5 border-bottom border-light border-3 pb-5">
				<div className="col-md-5 col-sm-12">
					<h1 className="text-break fw-bold fst-italic">About Me</h1>
					<article>
						<div className="my-4">
							<p className="fw-lighter fst-italic">
								I love answers!
							</p>
						</div>
						<div className="my-4">
							<p className="fst-italic">
								I love working with data! Previously a certified
								finance professional turned into a data
								scientist . Passionate about working with data
								to give insights you can use to make meaningful
								business decisions through storytelling,
								visualization and code. Data analytics is the
								future, and the future is now! Get in touch we
								find the answers together.
							</p>
						</div>
						{/* <div>
							<p className="fst-italic">
								My name is Chamberlain Ezigbo. passionate about
								creating community within the tech space, And a
								passionate software engineer who will do
								whatever it takes to find an answer.
							</p>
						</div> */}
						<div>
							<p className="fst-italic">
								Get in touch to find the next answer together!
							</p>
						</div>
					</article>
					<div className="container">
						<a
							href="https://docs.google.com/document/d/1VH170x12Il8zZxPrX82i8dOVcmLEt5si/edit?usp=sharing&ouid=111068229227732876276&rtpof=true&sd=true"
							className="text-dark btn btn-outline-success btn-sm"
						>
							View Cv
						</a>
						<button
							type="button"
							className="btn btn-outline-success ms-2 btn-sm"
							onClick={onClickHandler}
						>
							Home
						</button>
					</div>
				</div>
				<div className="col-md-7 d-none d-sm-none d-lg-block">
					<img
						src={img}
						className="img-thumbnail"
						alt={img}
						width="97%"
					/>
				</div>
			</div>
			<ServicePage />
		</>
	);
}
