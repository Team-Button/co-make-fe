import React from "react";
import { useForm } from "react-hook-form";
import { addPost } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { ErrorMessage } from "./ErrorMessage";

export function Add({ props }) {
  const { register, errors, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(addPost({ props, values }));
    console.log(props);
    props.history.push("/dashboard");
  };

  return (
    <>
      <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="add-form mx-auto form-group p-3 d-flex flex-column justify-content-center">
          <label for="topic">Topic</label>
          <input
            className="form-control"
            id="topic"
            name="topic"
            ref={register({ required: true, minLength: 3 })}
          />
          <label for="category">Category</label>
          <select
            name="category_id"
            className="form-control"
            id="category_id"
            ref={register({ required: true })}
          >
            <option value="">Select</option>
            <option value={1}>Public Safety</option>
            <option value={2}>Construction</option>
            <option value={3}>Animal Control</option>
            <option value={4}>Housing Code</option>
            <option value={5}>Public Health</option>
            <option value={6}>Illegal Activities</option>
          </select>
          <ErrorMessage error={errors.category_id} />

          <label for="description">Description</label>
          <textarea
            className="form-control"
            name="description"
            id="topic"
            rows="4"
            ref={register({ required: true })}
          />
          <ErrorMessage error={errors.description} />

          <label for="photo">Photo</label>
          <input
            className="edit-photo"
            id="photo"
            name="photo"
            ref={register({ required: true })}
          />
          <ErrorMessage error={errors.photo} />

          {/* <section className="edit-photo">
                    <div></div>
                    <button className="upload-photo btn btn-primary px-5 m-5">Upload Photo</button>
                </section>  */}
          <button className="add-btn btn btn-primary pl-5 pr-5 m-3">
            Add Post
          </button>
        </div>
      </form>
    </>
  );
}
