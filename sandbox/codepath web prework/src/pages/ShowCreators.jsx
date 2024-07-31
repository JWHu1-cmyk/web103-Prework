import React from "react";
import { Link } from "react-router-dom";

export default function Root() {
  console.log("Root component is rendering");

  return (
    <>
      <div id="detail">
        <h1>CREATORVERSE</h1>
        <form>
          <Link to="showCreators">
            <button type="button">VIEW ALL CREATORS</button>
          </Link>
        </form>
        {/* <form>
          <Link to="/addCreator">
            <button type="button">ADD A CREATOR</button>
          </Link>
        </form> */}
      </div>
    </>
  );
}
