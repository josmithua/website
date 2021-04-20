import Layout from '../components/Layout';
import Head from 'next/head';

function Contact() {
  const labelClasses = 'block text-sm font-bold mb-2 dark:text-white';
  const inputClasses =
    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
  const textareaClasses = inputClasses + ' h-32';
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md justify-center h-10/12">
          <form className="shadow-md rounded p-6" name="contact" method="post" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="mb-4">
              <label className={labelClasses} htmlFor="email">
                Email
              </label>
              <input className={inputClasses} type="email" name="email" id="email" />
            </div>
            <div className="mb-4">
              <label className={labelClasses} htmlFor="message">
                Message
              </label>
              <textarea className={textareaClasses} name="message" id="message"></textarea>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-black dark:bg-white hover:bg-blue-700 text-white dark:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
}

export default Contact;
