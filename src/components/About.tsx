import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <div className="about-accent-line"></div>
        <p className="para">
          Hi, I’m Dheeraj, a Java Full Stack Developer with{" "}
          <span className="about-highlight">4+ years</span> of experience building{" "}
          <span className="about-highlight">scalable web applications</span> and{" "}
          <span className="about-highlight">microservices</span>. I specialize in Java,
          Spring Boot, React, and cloud technologies like{" "}
          <span className="about-highlight">AWS</span>, developing secure and{" "}
          <span className="about-highlight">high-performance</span> applications across
          industries such as banking, consumer goods, and{" "}
          <span className="about-highlight">digital media .</span> I enjoy solving complex
          problems and creating reliable software that delivers real business value.{" "}
        </p>
        
      </div>
    </div>
  );
};

export default About;
