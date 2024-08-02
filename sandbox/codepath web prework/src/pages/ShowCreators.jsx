import React from "react";
import {
  Outlet,
  NavLink,
  useLoaderData,
  Form,
  redirect,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { getCreators } from "../Creator1";

export async function loader() {
  try {
    const contacts = await getCreators();
    return { contacts };
  } catch (error) {
    console.error("Failed to load contacts:", error);
    return { contacts: [] }; // Return an empty array on error
  }
}

// export async function action() {
//   const contact = await createContact();
//   return redirect(`/contacts/${contact.id}/edit`);
// }

export default function Root() {
  const { contacts } = useLoaderData();

  return (
    <>
      <nav>
        {contacts && contacts.length ? (
        <>
          <div class="spacer"></div>

          <ul>
            {contacts.map((contact) => (
              <>
              <li key={contact.id}>
                <NavLink
                  to={`./creators/${contact.id}`}
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                >
                  <div>
                  {contact.name ? (
                    <>
                      Name:
                      {contact.name},
                      {" "}
                    </>
                    
                  ) : (
                    <>
                      Name:No Name,
                      {" "}
                    </>
                  )}
                  </div>
                  <div>
                  {contact.url ? (
                    <>
                      URL:
                      {contact.url},
                      {" "}
                    </>
                  ) : (
                    <>
                      URL:No URL,
                      {" "}
                    </>
                  )}
                  </div>
                  <div>
                  {contact.description ? (
                    <>
                      Description:
                      {contact.description},
                      {" "}
                    </>
                  ) : (
                    <>
                      Description:No Description,
                      {" "}
                    </>
                  )}
                  </div>
                </NavLink>
              </li>
              <div class="spacer"></div>
              </>
            ))}
          </ul>
        </>
        ) : (
          <p>
            <i>No contacts</i>
          </p>
        )}
      </nav>
      <Outlet />
    </>
  );
}
