import "./Footer.css"
import { useNavigate } from 'react-router-dom';


export const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer>
            <p style={{backgroundColor:"#646cff", color:"white"}}>© 2025 Devi Education Private Limited. All Rights Reserved.</p>
            <div style={{backgroundColor:"#646cff", color:"white"}}>
                <button style="color:black; font-weight: bold; font-size:1.5rem;border-radius: 15px;" onClick={() => navigate('/team')}>
                    About Developer Team
                </button>
                <button style="color:black; font-weight: bold; font-size:1.5rem;border-radius: 15px;" onClick={() => navigate('/contact')}>
                    Contact Us
                </button>
                <button style="color:black; font-weight: bold; font-size:1.5rem;border-radius: 15px;" onClick={() => navigate('/admin/users')}>
                    Admin
                </button>
            </div>
        </footer>
    );
};

