import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import UserDetail from "./UserDetail";

function User() {
  const [serachpar, setserachpar] = useSearchParams();
  const show = serachpar.get("filter") === "active";
  return (
    <>
      <div>
        User
        <h1>User 1</h1>
        <h1>User 2</h1>
        <h1>User 3</h1>
        <Outlet />
      </div>
      <button onClick={() => setserachpar({ filter: "active" })}>
        Active user
      </button>
      <button onClick={() => setserachpar()}>Reset user</button>
      {show ? <h2>Showing active user</h2> : <h1>all user</h1>}
    </>
  );
}

export default User;
