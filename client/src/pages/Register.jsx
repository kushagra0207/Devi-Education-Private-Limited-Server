import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { toast } from "react-toastify";


export const Register = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""

    });



    const navigate = useNavigate();


    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,

        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),

            });

            const res_data = await response.json();
            console.log("Res from Server", res_data.extraDetails);

            if (response.ok) {
                
                // localStorage.setItem("token", res_data.token);
                // storeTokenInLS(res_data.token); 
                setUser({ username: "", email: "", phone: "", password: "" });
              
                
                toast.success("Verification Email sent to your email.", {
                    autoClose: 10000, 
                    style: {
                      fontWeight: "bold",
                      color: "#FFFFFF", 
                      backgroundColor: "#001FFF", 
                      fontSize: "20px",
                      
                    },
                  });
                  
                navigate("/login");
            }
            else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            }

        }

        
        catch (error) {
            console.log("FrontEnd Client Folder Error With Register.jsx page  " + error);
        }

    }



    return <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img src="/Images/register.png" alt="Register Yourself" width="500" height="500" />
                        </div>
                        <div className="registration-form">
                            <h1 className="main-heading mb-3">Register Yourself</h1>
                            <br />
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username"> Username</label>
                                    <input type="text" name="username" placeholder="Enter Your Name" id="username" required autoComplete="off" value={user.username} onChange={handleInput} />
                                </div>

                                <div>
                                    <label htmlFor="email"> Email</label>
                                    <input type="email" name="email" placeholder="Enter Your Email" id="email" required autoComplete="off" value={user.email} onChange={handleInput} />
                                </div>

                                <div>
                                    <label htmlFor="phone"> Phone</label>
                                    <input type="number" name="phone" placeholder="Enter Your Phone Number" id="phone" required autoComplete="off" value={user.phone} onChange={handleInput} />
                                </div>

                                <div>
                                    <label htmlFor="password"> Password</label>
                                    <input type="password" name="password" placeholder="Enter Your Password" id="password" required autoComplete="off" value={user.password} onChange={handleInput} />
                                </div>

                                <br />

                                <button type="submit" className="btn btn-submit" >Register Now</button>
                                <br />
                                <br />






                            </form>

                        </div>
                    </div>
                </div>
            </main>
        </section>

    </>

}



