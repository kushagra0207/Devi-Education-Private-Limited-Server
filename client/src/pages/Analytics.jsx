import React, { useState, useEffect } from 'react';


export const Analytics = () => {

    const [companies, setCompanies] = useState(0);
    const [clients, setClients] = useState(1000);
    const [developers, setDevelopers] = useState(100);


    useEffect(() => {
        const companiesInterval = setInterval(() => {
            setCompanies((prev) => {
                if (prev >= 50) {
                    clearInterval(companiesInterval);
                    return prev;
                }
                return prev + 1;
            });
        }, 55); 

       
        const clientsInterval = setInterval(() => {
            setClients((prev) => {
                if (prev >= 10000) {
                    clearInterval(clientsInterval);
                    return prev;
                }
                return prev + 100;
            });
        }, 30); 

      
        const developersInterval = setInterval(() => {
            setDevelopers((prev) => {
                if (prev >= 500) {
                    clearInterval(developersInterval);
                    return prev;
                }
                return prev + 10;
            });
        }, 70); 

        return () => {
            clearInterval(companiesInterval);
            clearInterval(clientsInterval);
            clearInterval(developersInterval);
        };
    }, []);

    return <>

        <section className="section-analytics">
            <div className=".container grid grid-four-cols">
                <div className="div1">
                    <h2>{companies}+</h2>
                    <p>Experienced Faculty</p>

                </div>
                <div className="div1">
                    <h2>{clients}+</h2>
                    <p>Projects Delivered</p>
                </div>
                <div className="div1">
                    <h2>{developers}+</h2>
                    <p>Subject Matter Experts</p>
                </div>
                <div className="div1">
                    <h2>24/7</h2>
                    <p>Service</p>
                </div>
            </div>

        </section>


    </>
}

