import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  const infoCards = [
    {
      title: "🏢 Office Address",
      content: `ERA MARYA GLOBAL LOGISTICS PVT. LTD.
Signet Hub, 909, 9th Floor,
Akshar Chowk, Vadodara,
Gujarat, India - 390020`
    },
    {
      title: "📞 Contact Numbers",
      content: `(+91) 9909928018
(+91) 8866841444`
    },
    {
      title: "📧 Email Address",
      content: `info@eramarya.com
sales@eramarya.com`
    }
  ];

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      
      
      {/* Main content */}
      <div className="container py-5 flex-grow-1" style={{ maxWidth: "1400px" }}>
        <h2 className="text-center fw-bold mb-5 text-warning" style={{ fontSize: "2.5rem" }}>
          Any Queries? <br /> Contact Us Now!
        </h2>

        <div className="row g-4 align-items-stretch">

          {/* LEFT INFO CARDS */}
          <div className="col-12 col-lg-6 d-flex flex-column gap-4 contact-left">
            {infoCards.map((card, idx) => (
              <div
                key={idx}
                className="card shadow-sm"
                style={{ transition: "0.3s" }}
                onMouseEnter={(e) => e.currentTarget.classList.add("border-warning", "shadow-lg")}
                onMouseLeave={(e) => e.currentTarget.classList.remove("border-warning", "shadow-lg")}
              >
                <div className="card-body">
                  <h4 className="card-title text-primary" style={{ fontSize: "1.35rem" }}>
                    {card.title}
                  </h4>
                  <p className="card-text text-secondary" style={{ fontSize: "1rem" }}>
                    {card.content.split("\n").map((line, i) => (
                      <span key={i}>{line}<br /></span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT FORM SIDE */}
          <div className="col-12 col-lg-6 d-flex contact-right">
            <div
              className="card shadow-sm w-100 d-flex flex-column p-4"
              style={{ transition: "0.3s" }}
              onMouseEnter={(e) => e.currentTarget.classList.add("border-warning", "shadow-lg")}
              onMouseLeave={(e) => e.currentTarget.classList.remove("border-warning", "shadow-lg")}
            >
              <h4 className="text-primary text-center mb-4 fw-bold card-title" style={{ fontSize: "1.35rem" }}>
                Enter Your Details
              </h4>

              <form
                className="d-flex flex-column gap-3 flex-grow-1"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  className="form-control"
                  placeholder="Your Name"
                  {...register("YourName", { required: "Name is required" })}
                />
                {errors.YourName && <small className="text-danger">{errors.YourName.message}</small>}

                <input
                  className="form-control"
                  placeholder="Company Name"
                  {...register("CompanyName", { required: "Company is required" })}
                />
                {errors.CompanyName && <small className="text-danger">{errors.CompanyName.message}</small>}

                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  {...register("EmailAddress", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                  })}
                />
                {errors.EmailAddress && <small className="text-danger">{errors.EmailAddress.message}</small>}

                <input
                  type="tel"
                  className="form-control"
                  placeholder="Contact Number"
                  {...register("ContactNumber", { required: "Contact number is required" })}
                />
                {errors.ContactNumber && <small className="text-danger">{errors.ContactNumber.message}</small>}

                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="Your Message"
                  {...register("YourMessage", { required: "Message is required" })}
                />
                {errors.YourMessage && <small className="text-danger">{errors.YourMessage.message}</small>}

                <button type="submit" className="btn btn-warning fw-bold mt-auto">
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
