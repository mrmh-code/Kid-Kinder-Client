import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./JoinClass.css";
import useFireBase from "../../hooks/useFirebase";
import { FaGoogle } from "react-icons/fa";

const JoinClass = () => {
  const { user, singInGoogle } = useFireBase();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios.post("https://server-site-alpha.vercel.app/students", data).then((res) => {
      if (res.data.insertedId) {
        alert("successfully added check students Section");
        reset();
      }
    });
  };

  return (
    <div>
      {user.displayName ? (
        <div className="text-center service-form mt-4">
          <h1 className="mb-4">Enroll form</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              id="username"
              name="username"
              required
              {...register("name")}
              placeholder="your Name"
            />

            <input
              type="text"
              id="subject"
              name="subject"
              required
              {...register("subject")}
              placeholder="your Subject"
            />
            <input {...register("img")} placeholder="IMG URL" />

            <input type="submit" />
          </form>
        </div>
      ) : (
        <div className="mt-5 text-center">
          <h1>Please Login , Then Show Enroll From</h1>
          <p>
            ---------------------------sing in
            Google-------------------------------
          </p>
          <button onClick={singInGoogle} className="  btn btn-dark text-white">
            <FaGoogle />
          </button>
        </div>
      )}
    </div>
  );
};

export default JoinClass;
