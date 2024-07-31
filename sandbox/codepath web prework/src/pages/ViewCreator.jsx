// equivalent of contact.jsx in react router tutorial;

import { Form, useLoaderData, useFetcher } from "react-router-dom";

export default function ViewCreator() {
  const contact = {
    id: "2", // Unique identifier for the contact
    imageURL: "", // URL to the avatar image
    first: "john", // Last name
    last: "doe", // First name
    createdAt: Date.now(), // Timestamp of creation
    url: "https://x.com/home?lang=en",
    description: "hei hei ehi",
  };
  // name, url, description, and imageURL

  return (
    <>
      <div id="contact">
        <div>
          <img
            key={contact.imageURL}
            src={
              contact.imageURL ||
              `https://robohash.org/${contact.id}.png?size=200x200`
            }
          />
        </div>
        <div>
          <h1>Name:</h1>
          <p>
            {contact.first || contact.last ? (
              <>
                {contact.first} {contact.last}
              </>
            ) : (
              <i>No Name</i>
            )}{" "}
          </p>
          <h1>url:</h1>
          {contact.url && (
            <p>
              <a target="_blank" href={`${contact.url}`}>
                {contact.url}
              </a>
            </p>
          )}
          <h1>description:</h1>
          {contact.description && <p>{contact.description}</p>}
          <div>
            <form action="edit">
              <button type="submit">Edit</button>
            </form>
            <form
              method="post"
              action="destroy"
              onSubmit={(event) => {
                if (
                  !confirm("Please confirm you want to delete this record.")
                ) {
                  event.preventDefault();
                }
              }}
            >
              <button type="submit">Delete</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
