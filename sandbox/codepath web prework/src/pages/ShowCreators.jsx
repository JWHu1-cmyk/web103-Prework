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
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <NavLink
                  to={`./creators/${contact.id}`}
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                >
                  {contact.name ? (
                    <>
                      {contact.name}
                    </>
                  ) : (
                    <i>No Name</i>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
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
