import { NavLink } from "react-router-dom";
import { Analytics } from "../pages/Analytics";
import { useAuth } from "../store/auth";
import { useNavigate } from 'react-router-dom';

export const About = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}

              <p>Welcome, {user ? `${user.username} to our website` : `to our website`}</p>

              <h1>Why Choose Us? </h1>
              <p>
                Experienced Professionals<br></br>
                Our team includes certified subject matter experts, seasoned content writers, and experienced faculty who bring years of expertise to ensure quality learning and solutions.
                <br></br>
                <br></br>
                Innovative Learning Solutions<br></br>
                We offer cutting-edge online smart classes that provide an engaging, interactive, and personalized learning experience to meet modern educational needs.
                <br></br>
                <br></br>
                Commitment to Quality<br></br>
                We prioritize delivering precise, reliable, and high-quality solutions, whether it’s doubt resolution, project work, or tailored academic support.
                <br></br>
                <br></br>

                Timely Delivery<br></br>
                We understand the importance of deadlines and consistently deliver all services on time without compromising quality.
                <br></br>
                <br></br>

                Comprehensive Support<br></br>
                From teaching and question-solving to project work and content creation, we provide a wide range of services to support your academic and professional success.
                <br></br>
                <br></br>

                Focus on Your Growth<br></br>
                Your success is our mission. We aim to empower you with the tools, knowledge, and resources needed to achieve your goals confidently.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button onClick={() => navigate('/service')} className="btn secondary-btn">Learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/Images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};