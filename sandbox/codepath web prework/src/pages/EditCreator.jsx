// equivalent of edit.jsx in react router tutorial;
// edit: name, url, description, and imageURL;

import { Form, useLoaderData, useFetcher, redirect, useNavigate } from "react-router-dom";

import { getCreators, updateCreator } from "../Creator1";



export async function action({ request, params }) {
  try {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);

    console.log(updates);

    // Attempt to create the creator and handle potential errors
    // await updateCreator(updates.id, updates.name, updates.url, updates.description, updates.imageURL);
    await updateCreator(Number(params.creatorId), updates.name, updates.url, updates.description, updates.imageURL);

    return redirect(`/`);
  } catch (error) {
    console.error("Error inserting creator:", error);
    alert("Error inserting creator: " + error.message);
    return redirect(`/`);
  }

}


export async function loader({ params }) {
  // Fetch the list of creators
  const creators = await getCreators();
  console.log(params.creatorId);
  // Check if contacts were retrieved successfully
  if (!creators) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  console.log(creators);
  // Find the contact by creatorId
  const creator = creators.find((creator) => creator.id === Number(params.creatorId));
  console.log(creator);
  // Check if the contact was found
  if (!creator) {
    throw new Response("", {
      status: 404,
      statusText: "Contact Not Found",
    });
  }

  // Return the found contact
  return { creator };

}


export default function EditCreator() {
  const { creator } = useLoaderData();
  const navigate = useNavigate();

  return (
    <Form method="post" id="contact-form">
      <label>
        <span>Name: </span>
        <input name="name" placeholder="name" defaultValue={creator?.name} />
      </label>
      <label>
        <span>URL: </span>
        <input name="url" placeholder="url" defaultValue={creator?.url} />
      </label>
      <label>
        <span>Description: </span>
        <textarea name="description" rows={6} defaultValue={creator?.description} />
      </label>
      <label>
        <span>Image URL: </span>
        <input name="imageURL" placeholder="imageURL" defaultValue={creator?.imageURL} />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button" className="cancel-button" onClick={() => navigate("/showCreators")}>Cancel</button>
      </p>
    </Form>
  );
}
