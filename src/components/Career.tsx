import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Full Stack Developer</h4>
                <h5>Prudential Bank</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
             Worked on enterprise digital banking platforms that support account management, payment processing, and financial reporting. Developed scalable microservices using Java and Spring Boot, integrated secure authentication using JWT and OAuth2, and built responsive interfaces using React and Angular. Deployed services on AWS and improved database performance through SQL optimization and efficient API design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MuleSoft Developer</h4>
                <h5>Clorox</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
             Contributed to enterprise integration initiatives by building API-led connectivity solutions using MuleSoft Anypoint Platform. Developed System, Process, and Experience APIs to integrate systems like Salesforce, SAP, and internal enterprise applications. Implemented DataWeave transformations, asynchronous messaging, and deployed integration services to CloudHub with automated CI/CD pipelines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Jr. Full Stack Developer</h4>
                <h5>Ritchie Media</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Developed scalable web applications used for content management and digital analytics reporting. Built backend services using Java and Spring Boot and created interactive dashboards with React and Angular to visualize audience engagement metrics. Optimized database queries and implemented data pipelines to process web traffic and analytics data.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Trainee Engineer</h4>
                <h5>Ramson Tech Labs</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
             Assisted in developing enterprise web applications by implementing backend modules using Java and the Spring Framework. Contributed to REST API development, database design, and frontend components using HTML, CSS, and JavaScript. Collaborated with senior developers in an Agile environment to build secure and scalable application features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
