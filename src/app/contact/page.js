export default function Contact() {


  return (
    <main className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-center mb-6">Contact us!</h1>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-grey-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="border-grey-300 focus:ring-2 focu:ring-blue-500 "
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="border-grey-300 focus:ring-2 focu:ring-blue-500 "
            required
          ></textarea>
        </div>
        <button className="text-white bg-blue-600 rounded-md p-3" type="submit">
          Send Message
        </button>
      </form>
    </main>
  );
}
