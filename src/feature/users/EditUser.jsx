import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "./UserSlice";

const EditUser = () => {
  const users = useSelector((store) => store.users);

  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const existingUser = users.filter((user) => user.id === param.id);

  const { name, email } = existingUser[0];

  const [values, setValues] = useState({
    name,
    email,
  });
  console.log(existingUser[0]);
  const handleEditUser = () => {
    dispatch(
      editUser({
        id: param.id,
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
    console.log(values);
  };
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        inputProps={{ type: "text", placeholder: "John Doe" }}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        inputProps={{ type: "email", placeholder: "johndoe@gmail.com" }}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;
