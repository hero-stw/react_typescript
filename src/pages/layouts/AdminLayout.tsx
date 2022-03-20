import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const AdminLayout = (props: Props) => {
  return (
    <div>
      <header>Admin Header</header>
      <div className="row">
        <div className="col-2">
          <aside>Aside</aside>
        </div>
        <div className="col-10">
          <main>
            Content Main
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
