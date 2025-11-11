import React from "react";
import { useForm } from "react-hook-form";
import "./Contact.css"; // Import the CSS

function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="contact-container">
      <h2>Any Queries? <br />
        Contact Us Now!</h2>

      <div className="Address">
        <h3>Office Address</h3>
        <p>
          ERA MARYA GLOBAL LOGISTICS PRIVATE LIMITED <br />
          Signet Hub, 909, 9th Floor, <br />
          Akshar Chowk, Vadodara, <br />
          Gujarat, India - 390020
        </p>

        <h3>Telephone Number</h3>
        <p>
          (+91) 9909928018 <br />
          (+91) 8866841444
        </p>

        <h3>Mail Address</h3>
        <p>
          info@eramarya.com <br />
          sales@eramarya.com
        </p>
      </div>

      <h3 >Enter Your Details</h3>

      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Your Name"
          {...register("YourName", { required: true })}
        />
        {errors.YourName && <p className="error-message">Your Name is required</p>}

        <input
          type="text"
          placeholder="Company Name"
          {...register("CompanyName", { required: true })}
        />
        {errors.CompanyName && <p className="error-message">Company Name is required</p>}

        <input
          type="text"
          placeholder="City"
          {...register("City", { required: true })}
        />
        {errors.City && <p className="error-message">City is required</p>}

        <input
          type="text"
          placeholder="State"
          {...register("State", { required: true })}
        />
        {errors.State && <p className="error-message">State is required</p>}

        <input
          type="text"
          placeholder="Country"
          {...register("Country", { required: true })}
        />
        {errors.Country && <p className="error-message">Country is required</p>}

        <input
          type="email"
          placeholder="Email Address"
          {...register("EmailAddress", { required: true })}
        />
        {errors.EmailAddress && <p className="error-message">Email Address is required</p>}

        <input
          type="text"
          placeholder="Contact Number"
          {...register("ContactNumber", { required: true })}
        />
        {errors.ContactNumber && <p className="error-message">Contact Number is required</p>}

        <input
          type="text"
          placeholder="Content Of Inquiry"
          {...register("ContentOfInquiry", { required: true })}
        />
        {errors.ContentOfInquiry && <p className="error-message">Content Of Inquiry is required</p>}

        <textarea
          placeholder="Your Message"
          {...register("YourMessage", { required: true })}
        />
        {errors.YourMessage && <p className="error-message">Your Message is required</p>}

        <button type="submit" className="mybutton">Submit</button>
      </form>
    </div>
  );
}
export default Contact;