import React from "react";
import { useForm } from "react-hook-form"

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();{/* it is a library*/}{/*register->connect input fileds into library */}

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
  
    <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 p-0">
    {  /* container-fluid = full width container */
      /* d-flex = flex layout activate */
      /* align-items-center = vertical center */
      /* justify-content-center = horizontal center */
      /* min-vh-100 = full screen height (100vh) */
      /* p-0 = padding remove */
    }
   <div className="container pt-5 pb-2">
      {/* container->centered fixed width  py-5-> padding vertical apce 5*/}
      <h2 className="text-center fw-bold mb-5 text-warning">
       {/* font weight  margin bottem */}
        Any Queries? <br /> Contact Us Now!
      </h2>

      <div className="row g-4">
        {/*row ->row for column.}
        {/* LEFT SIDE WITH THREE BOXES g-4-
        > gap between rows */}
        <div className="col-md-6">
          {/*md-> meadium screen*/}
          <div className="row g-3">
           {/*Inner row + smaller spacing */} 
            {/* Address Box */}
            <div className="col-12 d-flex">
              <div
                className="p-4 rounded border shadow-sm bg-white w-100"
                style={{ transition: "0.3s" }}
                onMouseEnter={(e) =>
                  e.currentTarget.classList.add("border-warning", "shadow-lg")
                }
                onMouseLeave={(e) =>
                  e.currentTarget.classList.remove("border-warning", "shadow-lg")
                }
              >
                <h4 className="fw-semibold text-primary">🏢 Office Address</h4>
                <p className="text-secondary mb-0">
                  ERA MARYA GLOBAL LOGISTICS PVT. LTD. <br />
                  Signet Hub, 909, 9th Floor, <br />
                  Akshar Chowk, Vadodara, <br />
                  Gujarat, India - 390020
                </p>
              </div>
            </div>

            {/* Contact Box */}
            <div className="col-12 d-flex">
              <div
                className="p-4 rounded border shadow-sm bg-white w-100"
                style={{ transition: "0.3s" }}
                onMouseEnter={(e) =>
                  e.currentTarget.classList.add("border-warning", "shadow-lg")
                }
                onMouseLeave={(e) =>
                  e.currentTarget.classList.remove("border-warning", "shadow-lg")
                }
              >
                <h4 className="fw-semibold text-info">📞 Contact Numbers</h4>
                <p className="text-secondary mb-0">
                  (+91) 9909928018 <br />
                  (+91) 8866841444
                </p>
              </div>
            </div>

            {/* Email Box */}
            <div className="col-12 d-flex">
              <div
                className="p-4 rounded border shadow-sm bg-white w-100"
                style={{ transition: "0.3s" }}
                onMouseEnter={(e) =>
                  e.currentTarget.classList.add("border-warning", "shadow-lg")
                }
                onMouseLeave={(e) =>
                  e.currentTarget.classList.remove("border-warning", "shadow-lg")
                }
              >
                <h4 className="fw-semibold text-primary">📧 Email Address</h4>
                <p className="text-secondary mb-0">
                  info@eramarya.com <br />
                  sales@eramarya.com
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="col-md-6 d-flex">
          <div
            className="p-4 rounded border shadow-sm bg-white w-100"
            style={{ transition: "0.3s" }}
            onMouseEnter={(e) =>
              e.currentTarget.classList.add("border-warning", "shadow-lg")
            }
            onMouseLeave={(e) =>
              e.currentTarget.classList.remove("border-warning", "shadow-lg")
            }
          >
            <h3 className="text-center fw-semibold text-primary mb-4">
              Enter Your Details
            </h3>

            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Your Name"
                className="form-control mb-2"
                {...register("YourName", { required: true })}
              />
              {errors.YourName && (
                <p className="text-danger small">Your Name is required</p>
              )}

              <input
                type="text"
                placeholder="Company Name"
                className="form-control mb-2"
                {...register("CompanyName", { required: true })}
              />
              {errors.CompanyName && (
                <p className="text-danger small">Company Name is required</p>
              )}

              <input
                type="email"
                placeholder="Email Address"
                className="form-control mb-2"
                {...register("EmailAddress", { required: true })}
              />
              {errors.EmailAddress && (
                <p className="text-danger small">Email Address is required</p>
              )}

              <input
                type="text"
                placeholder="Contact Number"
                className="form-control mb-2"
                {...register("ContactNumber", { required: true })}
              />
              {errors.ContactNumber && (
                <p className="text-danger small">Contact Number is required</p>
              )}

              <textarea
                placeholder="Your Message"
                rows="4"
                className="form-control mb-2"
                {...register("YourMessage", { required: true })}
              ></textarea>
              {errors.YourMessage && (
                <p className="text-danger small">Your Message is required</p>
              )}

              <button className="btn btn-warning w-100 mt-2 fw-bold" type="submit">
                Submit
              </button>
            </form>

          </div>
        </div>

      </div>
    </div>
  </div>
  );
}
export default Contact;