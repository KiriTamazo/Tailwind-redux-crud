import "./App.css";
import UserList from "./feature/users/UserList";
import { Routes, Route } from "react-router-dom";
import AddUser from "./feature/users/AddUser";
import EditUser from "./feature/users/EditUser";
import DeleteUser from "./feature/users/DeleteUser";
function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">
        CRUD with Redux Toolkit
      </h1>

      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
