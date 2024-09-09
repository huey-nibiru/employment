import './Achievements.css';

const Achievements = () => {
    return (
        <div className="achievements-container">
            <h2>Achievements & Certifications</h2>
            <div className="badges-section">
                <h3>Badges & Achievements</h3>
                {/* Example badges */}
                <div className="badge">Task Completion Rate: 95%</div>
                <div className="badge">On-Time Delivery: 100%</div>
            </div>
            <div className="tokens-section">
                <h3>Service Tokens & Milestones</h3>
                {/* Example tokens and milestones */}
                <div className="token">Service Token: 10</div>
                <div className="milestone">Milestone: 50 Projects Completed</div>
            </div>
        </div>
    );
};

export default Achievements;
