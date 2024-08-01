// ***
// equivalent of EditCreator.jsx;
// basically the same I feel;
// edit: name, url, description, and imageURL;

import {
  Outlet,
  NavLink,
  Link,
  useLoaderData,
  Form,
  redirect,
  useNavigation,
  useSubmit,
  useNavigate,
} from "react-router-dom";

import { createCreator } from "../Creator1.js";

export async function action({ request }) {
  try {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);

    // Attempt to create the creator and handle potential errors
    await createCreator(updates);

    return redirect(`/`);
  } catch (error) {
    console.error("Error inserting creator:", error);
    alert("Error inserting creator: " + error.message);
    return redirect(`/`);
  }

}

export default function AddCreator() {
  const navigate = useNavigate();

  return (
    <Form method="post" id="contact-form">
      <label>
        <span>Name: </span>
        <input name="name" placeholder="name" />
      </label>
      <label>
        <span>URL: </span>
        <input name="url" placeholder="url" />
      </label>
      <label>
        <span>Description: </span>
        <textarea name="description" rows={6} />
      </label>
      <label>
        <span>Image URL: </span>
        <input name="imageURL" placeholder="imageURL" />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button" className="cancel-button" onClick={() => navigate(-1)}>Cancel</button>
      </p>
    </Form>
  );
}

// <form> works not <Form>