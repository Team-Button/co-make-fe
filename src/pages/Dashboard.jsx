import React, { useEffect } from "react";
import { Layout, Links, Posts } from "../components";
import {getPosts} from "../redux/actions";
import { useDispatch, useSelector} from "react-redux";

export function Dashboard() {

  const { allPosts, login } = useSelector(state => state)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
   }, [dispatch]) 

  return (
    <>
      <Layout>
        <Links />
        <h2 className="text-center" id="topIssue">Top Issues</h2>
        <Posts postsProps={ allPosts } userInfo={ login } />
      </Layout>
    </>
  );
}
