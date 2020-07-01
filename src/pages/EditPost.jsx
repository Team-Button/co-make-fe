import React from "react";
import { Layout, Edit } from "../components";

export function EditPost(props) {
  return (
    <>
      <Layout>
        <Edit props={props} />
      </Layout>
    </>
  );
}
