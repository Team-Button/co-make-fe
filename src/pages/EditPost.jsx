import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../redux/actions";
import { Layout, Edit } from "../components";

export function EditPost(props) {
  const dispatch = useDispatch();
  const thisPost = useSelector((state) => state.singlePost);
  console.log(props.match.params.id);
  console.log(thisPost);
  useEffect(() => {
    dispatch(getPostById(props.match.params.id));
  }, [dispatch, props.match.params.id]);
  return (
    <>
      <Layout>
        <Edit props={props} post={thisPost.post} />
      </Layout>
    </>
  );
}
