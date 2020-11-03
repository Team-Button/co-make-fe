import React, { useEffect } from "react";
import { Layout, Links, Posts } from "../components";
import {getMyPosts} from "../redux/actions";
import { useDispatch, useSelector} from "react-redux";

export function MyPosts() {

  const { myPosts, login } = useSelector(state => state)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyPosts())
   }, [dispatch]) 

  return (
    <>
      <Layout>
        <Links />
        <h2 className="text-center" id="topIssue">My Posts</h2>
        <Posts postsProps={ myPosts } userInfo={ login } />
      </Layout>
    </>
  );
}
