import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <section id="contact" className="pb-16">
      <div className="container ">
        <h2 className="text-black font-[700] text-[2.5rem] mb-8">
          Get in touch
        </h2>
        <div className="md:flex justify-between items-center ">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[500px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.526340653!2d76.76357358202375!3d28.643684624447115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1687858520034!5m2!1sen!2sin"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div
            className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[500px] lg:flex items-center bg-indigo-100 px-4
          lg:px-8 py-8"
          >
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3 mt-1 ">
                <label htmlFor="text">Name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none
                  rounded-[5px]"
                  {...register("fullname", { required: true, minLength: 4 })}
                />
                <p className="text-base text-red-700 ">
                  {errors.fullname?.type === "required" &&
                    "this field is required"}
                </p>
                <p className="text-base text-red-700 ">
                  {errors.fullname?.type === "minLength" &&
                    "please enter minimum 4 characters"}
                </p>
              </div>

              <div className="mb-3">
                <label htmlFor="text">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-3 focus:outline-none
                    rounded-[5px]"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                />
                <p className="text-base text-red-700 ">
                  {errors.email?.type === "required" &&
                    "this field is required"}
                </p>
                <p className="text-base text-red-700 ">
                  {errors.email?.type === "pattern" && "please enter valid email id"}
                </p>
              </div>

              <div className="mb-3">
                <label htmlFor="text">Password:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  className="w-full p-3 focus:outline-none
                    rounded-[5px]"
                    {...register("password",{required:true, minLength: 6 , pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})}
                />
                <p className="text-base text-red-700 ">{errors.password?.type === "required" && "please enter your password "}</p>
                <p className="text-base text-red-700 ">{errors.password?.type === "minLength" && "please enter minimum 6 characters "}</p>
              </div>

              <div className="mb-3">
                <label htmlFor="text">Message:</label>
                <textarea
                  type="text"
                  rows={3}
                  placeholder="Write your message"
                  className="w-full p-3 focus:outline-none
                    rounded-[5px]"
                />
              </div>

              <button
                className="w-full p-3 focus:outline-none rounded-[5px] bg-green-700 text-white
              hover:bg-green-800 text-center ease-linear duration-150"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
