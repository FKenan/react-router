export default function ContactPage() {
  return (
    <div id="contact">
      <h2>Contact</h2>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        ducimus expedita, animi totam facilis fugiat molestias dolores
        blanditiis recusandae sint.
      </p>
    </div>
  );
}
