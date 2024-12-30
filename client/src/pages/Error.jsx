import { NavLink } from "react-router-dom"


export const Error = () => {

    return <>

        <section id="error-page">
            <div className="content">
                <h2 className="header">
                    404
                </h2>
                <h4>
                    Sorry! page not found
                </h4>
                <p>
                    Oops Sorry , the page you are looking for does not exist


                </p>
                <div className="btns">
                    <NavLink to="/"> Back to Home</NavLink>
                    <NavLink to="/contact"> Report Problem</NavLink>

                </div>


            </div>
        </section>
    </>

}