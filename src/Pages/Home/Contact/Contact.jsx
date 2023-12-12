
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xbjvnwql"); // Replace with your Formspree form id

  

  return (
    <div className="bg-[#022835] text-white p-8 py-28">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="block mb-2">
            Name:
            <input
              type="text"
              id="name"
              name="name"
              required
              className="block w-full p-2 border rounded-md bg-[#023240]"
            />
          </label>

          <label htmlFor="email" className="block mb-2">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              required
              className="block w-full p-2 border rounded-md bg-[#023240]"
            />
          </label>

          <label htmlFor="message" className="block mb-2">
            Message:
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="block w-full p-2 border rounded-md bg-[#023240]"
            ></textarea>
          </label>

          <button
            type="submit"
            className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition-colors duration-300"
          >
            Submit
          </button>
        </form>

        {state.succeeded && <p>Thanks for joining!</p>}
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
    </div>
  );
};

export default Contact;
