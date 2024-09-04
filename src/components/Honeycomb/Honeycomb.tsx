import React from "react";
import agartha from "../../assets/agartha.jpg";
import "./Honeycomb.css";
interface JobListing {
	title: string;
	username: string;
	price: string;
	image: string;
}

interface HoneyCombProp {
	jobListings: JobListing[];
}

const HoneyCombProp: React.FC<HoneyCombProp> = ({ jobListings }) => {
	return (
		<div className="honeycomb">
			{jobListings.map((job, index) => (
				<div key={index} className="honeycomb-cell">
					<img className="honeycomb-cell_img" src={agartha} alt={job.title} />
					<div className="honeycomb-cell_title">{job.title}</div>
				</div>
			))}
		</div>
	);
};

export default HoneyCombProp;
