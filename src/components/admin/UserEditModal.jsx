import Rodal from "rodal";
import "rodal/lib/rodal.css";
import "../../assets/scss/components/admin/UserEditModal.scss";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { toast } from "react-toastify";

const initState = {
  email: "",
  name: "",
  role: "",
};

const UserEditModal = ({ visible, setVisible, userID }) => {
  const [user, setUser] = useState(initState);

  useEffect(() => {
    const fetchUser = async () => {
      const q = query(collection(db, "users"), where("uid", "==", userID));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    };
    if (userID) {
      fetchUser();
    }
  }, [userID,visible]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setVisible(false);
    setUser(initState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const q = query(collection(db, "users"), where("uid", "==", userID));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (docu) => {
        const userRef = doc(db, "users", docu.id);
        await updateDoc(userRef, {
          name: user.name,
          role: user.role,
        });
      });
      setVisible(false);
      setUser(initState);
      toast.success("Update user successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="edit-user-form">
      <Rodal visible={visible} onClose={handleClose}>
        <h3>Edit user info</h3>
        <form action="POST" onSubmit={handleSubmit}>
          <div className="input-field">
            <input type="text" defaultValue={user.email} disabled />
          </div>
          <div className="input-field">
            <input
              type="text"
              value={user.name || ""}
              onChange={handleChange}
              name="name"
              required
            />
          </div>
          <div className="input-field">
            <select name="role" value={user.role} onChange={handleChange}>
              <option value="user">user</option>
              <option value="admin">admin</option>
            </select>
          </div>
          <button type="submit">save</button>
        </form>
      </Rodal>
    </div>
  );
};

UserEditModal.propTypes = {
  userID: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};

export default UserEditModal;
