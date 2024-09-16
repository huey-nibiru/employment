import React from "react";
import "./Listview.css";

interface JobListing {
	title: string;
	username: string;
	price: string;
	image: string;
}

const Listview: React.FC<{ jobListings: JobListing[] }> = ({ jobListings }) => {
	return (
		<div className="listview">
			<div className="listview-header">
				<div className="listview-header_image">PFP 📸</div>
				<div className="listview-header_title">Job Title</div>
				<div className="listview-header_username">Employer</div>
				<div className="listview-header_price">Salary</div>
			</div>
			{jobListings.map((job, index) => (
				<div key={index} className="listview-item">
					<img className="listview-item_img" src={job.image} alt={job.title} />
					<div className="listview-item_title">{job.title}</div>
					<div className="listview-item_username">{job.username}</div>
					<div className="listview-item_price">{job.price}</div>
				</div>
			))}
		</div>
	);
};

export default Listview;
