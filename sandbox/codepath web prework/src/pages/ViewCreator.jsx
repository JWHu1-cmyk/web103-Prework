// equivalent of contact.jsx in react router tutorial;


import { Form, useLoaderData, useFetcher, redirect, useNavigate } from "react-router-dom";
import { getCreators, deleteCreator } from "../Creator1";

export async function action({ params }) {
  await deleteCreator(params.creatorId);
  return redirect("/");
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



export default function ViewCreator() {
  const { creator } = useLoaderData();
  // id, created_at, name, url, description, imageURL
  const navigate = useNavigate();

  // Handler function for editing
  const handleEdit = () => {
    navigate(`/showCreators/creators/${creator.id}/edit`); // Redirect to the edit page for the specific creator
  };

  console.log(creator);

  console.log(creator.imageURL);

  return (
    <>
      <div id="contact" >
        <div>
        <img
  key={creator.imageURL}
  src={creator.imageURL || `https://robohash.org/${creator.id}.png?size=200x200`}
/>

          
        </div>
        <div>
          <h1>Name:</h1>
          <p>
            {creator.name ? (
              <>
                {creator.name}
              </>
            ) : (
              <i>No Name</i>
            )}
          </p>
          <h1>url:</h1>
          {creator.url && (
            <p>
              <a target="_blank" href={`${creator.url}`}>
                {creator.url}
              </a>
            </p>
          )}
          <h1>description:</h1>
          {creator.description && <p>{creator.description}</p>}
          <div>

            <button type="submit" onClick={handleEdit}>Edit</button>

            <Form
              method="post"
              onSubmit={(event) => {
                if (
                  !confirm("Please confirm you want to delete this record.")
                ) {
                  event.preventDefault();
                }
              }}
            >
              <button type="submit">Delete</button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
