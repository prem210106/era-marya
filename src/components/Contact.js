import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">

      {/* max-w-6xl → maximum width 
          mx-auto → center align
          p-6 → padding */}
      
      <h2 className="text-4xl font-bold text-center mb-8 text-orange-400">
        Any Queries? <br /> Contact Us Now!
      </h2>

      {/* GRID layout: Left info + Right form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE SECTION */}
        <div className="space-y-8 hover:bg-orange-400 transition p-6 rounded-2xl shadow-lg border">

          {/* space-y-8 → vertical gap */}

          {/* Address */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-blue-700">🏢 Office Address</h3>
            <p className="text-gray-700 leading-relaxed">
              {/* leading-relaxed → line height */}
              ERA MARYA GLOBAL LOGISTICS PRIVATE LIMITED <br />
              Signet Hub, 909, 9th Floor, <br />
              Akshar Chowk, Vadodara, <br />
              Gujarat, India - 390020
            </p>
          </div>

          {/* Contact Numbers */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-blue-500">📞 Telephone Number</h3>
            <p className="text-gray-700 leading-relaxed">
              (+91) 9909928018 <br />
              (+91) 8866841444
            </p>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-blue-700">📧 Mail Address</h3>
            <p className="text-gray-700 leading-relaxed">
              info@eramarya.com <br />
              sales@eramarya.com
            </p>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="w-full p-8 rounded-xl shadow-lg hover:bg-orange-400 transition">

          {/* w-full → width full
              p-8 → padding 
              rounded-xl → curve corners */}

          <h3 className="text-2xl font-semibold mb-6 text-center text-blue-700">
            Enter Your Details
          </h3>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

            <input
              type="text"
              placeholder="Your Name"
              {...register("YourName", { required: true })}
              className="w-full p-3 border border-gray-300 rounded"
            />
            {errors.YourName && <p className="text-red-500 text-sm">Your Name is required</p>}

            <input
              type="text"
              placeholder="Company Name"
              {...register("CompanyName", { required: true })}
              className="w-full p-3 border border-gray-300 rounded"
            />
            {errors.CompanyName && <p className="text-red-500 text-sm">Company Name is required</p>}

            <input
              type="email"
              placeholder="Email Address"
              {...register("EmailAddress", { required: true })}
              className="w-full p-3 border border-gray-300 rounded"
            />
            {errors.EmailAddress && <p className="text-red-500 text-sm">Email Address is required</p>}

            <input
              type="text"
              placeholder="Contact Number"
              {...register("ContactNumber", { required: true })}
              className="w-full p-3 border border-gray-300 rounded"
            />
            {errors.ContactNumber && <p className="text-red-500 text-sm">Contact Number is required</p>}

            <textarea
              placeholder="Your Message"
              {...register("YourMessage", { required: true })}
              className="w-full p-3 border border-gray-300 rounded min-h-[100px]"
            />
            {errors.YourMessage && <p className="text-red-500 text-sm">Your Message is required</p>}

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-orange-600 transition w-full"
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
