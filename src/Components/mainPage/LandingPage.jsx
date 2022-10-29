// ?> Landing section  //

import React from "react";

export default function LandingPage({ img, onClickHandler }) {
	return (
		<>
			<div className="row mb-5">
				<div className="col-md-5 col-sm-12">
					<h1 className="text-break fw-bolder fst-italic">
						Hi 👋🏾 ! I am Miriam Wangari your next Data Scientist
						from Nairobi, Kenya
					</h1>
					<div className="my-4">
						<p className="fw-lighter">
							Ready to have some sense of humanity
						</p>
					</div>
					<button
						type="button"
						className="btn btn-outline-success"
						onClick={onClickHandler}
					>
						Meet Me
					</button>
				</div>
				<div className="col-md-7 col-sm-12 mt-2">
					<img
						src={img}
						className="img-thumbnail"
						alt={img}
						width="80%"
					/>
				</div>
			</div>
		</>
	);
}
