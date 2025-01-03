import { useState } from 'react';
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

const defaultContactFormData = {
    username: "",
    email: "",
    message: "",

}



export const Contact = () => {

    const [contact, setContact] = useState(defaultContactFormData);

    const [userData, setUserData] = useState(true);

    const { user } = useAuth();

    if (userData && user) {
        setContact({
            username: user.username,
            email: user.email,
            message: "",

        });

        setUserData(false);
    }


    const handleInput = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        setContact({ ...contact, [name]: value });

    }


    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/form/contact", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contact),

            });

            if (response.ok) {
                setContact(defaultContactFormData);
                const data = await response.json();
                toast.success("Message Sent Successfully");
                // alert(data + "  Message sent successfully");
            }
        }
        catch (error) {
            console.log(error);
        }
    };





    return <>

        <section className="section-contact">
            <div className="content-content container">
                <h1 className="main-heading">Contact Us</h1>

            </div>


            <div className="container grid grid-two-cols">
                <div className="contact-img">
                    <img src="/Images/support.png" alt="We are always ready to help" />


                </div>

                <section className="section-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">UserName</label>
                            <input type="text" name="username" id="username" value={contact.username} onChange={handleInput} autoComplete="off" required />



                        </div>

                        <div>
                            <label htmlFor="username">Email</label>
                            <input type="email" name="email" id="email" value={contact.email} onChange={handleInput} autoComplete="off" required />



                        </div>

                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" value={contact.message} onChange={handleInput} cols="30" rows="5" autoComplete="off" required >

                            </textarea>

                        </div>

                        <div>
                            <button type="submit">Submit</button>
                        </div>


                    </form>
                </section>
            </div>


            <section className='mb-3' style={{ margin: '30px' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507.8795215208225!2d77.05435487744012!3d28.564538529717193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1aff95555555%3A0xfe157c04b5e620bc!2sDwarka%20Sector%2023%20Market!5e1!3m2!1sen!2sin!4v1726404839029!5m2!1sen!2sin" width="100%" height="350" style={{ border: '2px solid black', borderRadius: '30px' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>

            <br />
            <br />
            <br />




        </section>
    </>;


}
