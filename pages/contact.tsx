import Layout from '../components/Layout';

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md justify-center h-10/12">
          <form
            className="shadow-md rounded p-6"
            name="contact"
            method="post"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                name="message"
                id="message"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
