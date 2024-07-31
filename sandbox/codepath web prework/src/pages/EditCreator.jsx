// equivalent of edit.jsx in react router tutorial;
// edit: name, url, description, and imageURL;

export default function EditCreator() {
  return (
    <form method="post" id="contact-form">
      <label>
        <span> name: </span>
        <input placeholder="name"></input>
      </label>
      <label>
        <span> url: </span>
        <input placegolder="url"></input>
      </label>
      <label>
        <span> description: </span>
        <textarea rows={6}></textarea>
      </label>
      <label>
        <span> imageURL: </span>
        <input place="imageURL"></input>
      </label>
      <p>
        <button type="submit">Save</button>
        <button>Cancel</button>
      </p>
    </form>
  );
}
