import { Analytics } from "./Analytics"

export const Home = () => {
    return <>

        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>Shaping Futures with Expertise and Excellence in Education</p>
                        <h1>Providing Services & Projects</h1>
                        <p>We specialize in delivering a range of academic and professional services, including teaching, doubt resolution, and comprehensive question-solving support. Additionally, we excel in project work, ensuring timely delivery and uncompromising quality.
                        <br></br>Our team comprises highly experienced and certified subject matter experts who are dedicated to supporting your success by providing reliable and effective solutions tailored to your needs. With a commitment to excellence, we aim to make a meaningful contribution to your academic and professional growth.</p>

                        <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn">Connect Now</button>
                            </a>
                            <a href="/service">
                                <button className="btn secondary-btn">Learn More</button>
                            </a>


                        </div>
                    </div>


                    <div className="hero-image">
                        <img src="/Images/home.png" alt="Coding Together" width="400" height="500" />
                    </div>
                </div>

            </section>
        </main>

        

        <Analytics />


        {/* Department Of Home 3 section */}

        <section className="section-hero">
            <div className="container grid grid-two-cols">
                <div className="hero-image">
                    <img src="/Images/design.png" alt="Coding Together" width="400" height="500" />
                </div>
                <div className="hero-content">
                    <p>Online Smart Classes & Courses</p>
                    <h1></h1>
                    <p>
                    Our team consists of highly skilled content writers, certified subject matter experts, and experienced faculty who bring unparalleled expertise and dedication to their work. <br></br><br></br>We provide innovative online smart classes that offer a dynamic, interactive learning experience designed to meet modern educational demands. From personalized academic support to professional-quality solutions, we deliver excellence across a broad spectrum of services. With a steadfast commitment to quality, reliability, and innovation, we aim to empower your success and help you achieve your goals with confidence.
                    </p>

                    <div className="btn btn-group">
                        <a href="/contact">
                            <button className="btn">Connect Now</button>
                        </a>
                        <a href="/service">
                            <button className="btn secondary-btn">Learn More</button>
                        </a>


                    </div>
                </div>



            </div>

        </section>



    </>

}



