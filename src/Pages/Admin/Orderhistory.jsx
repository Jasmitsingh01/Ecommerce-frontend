import React from "react";

import OrderTable from "../../components/Dyaamic/orderTable";
import AdminPageHeader from "../../components/static/AdminPageHeader";

function Orderhistory() {
  return (
    <>
      <AdminPageHeader value={"Order"} />
      <OrderTable />
    </>
  );
}

export default Orderhistory;
