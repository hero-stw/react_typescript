import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const ClientLayout = (props: Props) => {
  return (
    <div>
      <header>Client Header</header>
      <main>
        Client main content
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default ClientLayout;
