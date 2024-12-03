import { useForm } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mnnqleoa");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div
      className="h-screen fredericka-the-great-regular bg-gradient-to-br from-[#092635] to-[#0C0C0C] flex flex-col"
      id="contact"
    >
      <div className="mt-[7rem] h-auto md:mt-28 text-4xl md:text-6xl p-2 text-white flex justify-center items-center">
        Contact
      </div>

      {/* Contact Form */}
      <div className="flex justify-center items-center px-4 md:px-0">
        <form
          className="w-full max-w-lg mt-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:border-blue-500"
                type="text"
                name="name"
                placeholder="First Name"
                autoComplete="off"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input
                className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:border-blue-500"
                type="text"
                name="name"
                placeholder="Last Name"
                autoComplete="off"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <input
                className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:border-blue-500"
                type="email"
                name="email"
                placeholder="your-email@gmail.com"
                autoComplete="off"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <textarea
                className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:border-blue-500 h-32 resize-none"
                placeholder="Your Message"
                name="message"
                autoComplete="off"
                required
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline transition duration-300"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
