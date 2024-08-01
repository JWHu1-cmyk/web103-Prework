import React from "react";
import {
  Outlet,
  NavLink,
  Link,
  useLoaderData,
  Form,
  redirect,
  useNavigation,
  useSubmit,
} from "react-router-dom";

export default function Root() {
  return (
    <div id="detail" className="creatorverse">
      <h1>CREATORVERSE</h1>
      <div className="buttons">
        <Link to="showCreators">
          <button type="button">VIEW ALL CREATORS</button>
        </Link>
        <Link to="addCreator">
          <button type="button">ADD A CREATOR</button>
        </Link>
      </div>
    </div>
  );
}
