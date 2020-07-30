import React from "react";
import biedit from "../../assets/biedit.svg";
import bidelete from "../../assets/bidelete.svg";
import DeleteModal from "./DeleteModal";

export default function BottomPart({ props, post, userInfo }) {
  return (
    <>
      <section className="row bottom-half d-flex p-2">
        <div className="image-wrap p-2 col-sm mr-5 rounded">
          <img src={post.photo} alt={`${post.topic}`} />
        </div>
        <div className="description p-2 col-sm">
          <h3>Description</h3>
          <p className="py-3">{post.description}</p>
          <div className="d-flex justify-content-end">
            {userInfo.user.id === post.reported_id ? (
              <>
                <img
                  src={biedit}
                  className="m-2 btn btn-light"
                  alt="Edit Icon"
                  href="/edit-post"
                />
                <button
                  type="button"
                  className="m-2 btn btn-light"
                  data-toggle="modal"
                  data-target="#deleteModal"
                >
                  <img src={bidelete} alt="delete icoon" />
                </button>
                <DeleteModal props={props} post={post} />
              </>
            ) : (
              <div></div>
            )}
          </div>
          {/* <Link to={`/edit/${post.id}`}>
            <button className="btn btn-primary">Edit Post</button>
          </Link> */}
        </div>
      </section>
    </>
  );
}
