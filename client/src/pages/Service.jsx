import { useAuth } from "../store/auth";

export const Service = () => {
  const { services } = useAuth();

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services </h1>
      </div>

      <div className="container grid grid-three-cols">
        {services.map((curElem, index) => {
          const { Images, price, description, provider, service } = curElem;
          

          return (
            <div className="card" key={index}>
              <div className="card-img">
                <img
                  src={Images}
                  alt="our services info"
                  width="200"
                />
              </div>

              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p style="color:#fc03c2;">{provider}</p>
                  <p style="color:#ddf77c;">{price}</p>
                </div>
                <h2 style="color:#7260f7;">{service}</h2>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};