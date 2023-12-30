import { useEffect, useState } from "react";
import { db } from "../../../config/firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import ReactPaginate from "react-paginate";
import Select from "react-select";
import "../../../assets/scss/pages/admin/UserListPage.scss";
import UserEditModal from "../../../components/admin/UserEditModal";
import ReactLoading from "react-loading";
import Modal from "../../../components/Modal";
import { toast } from "react-toastify";

const options = [
  {
    label: "Email ascending",
    value: "email asc",
    value1: "email",
    value2: "asc",
  },
  {
    label: "Email descending",
    value: "email desc",
    value1: "email",
    value2: "desc",
  },
  { label: "Name ascending", value: "name asc", value1: "name", value2: "asc" },
  {
    label: "Name descending",
    value: "name desc",
    value1: "name",
    value2: "desc",
  },
];

const initState = {
  users: [],
  page: 0,
  pageCount: 0,
  isLoading: false,
  sort: options[0],
  visible: false,
  edit: false,
  delete: false,
  userID: null,
};

const UserListPage = () => {
  const [pageState, setPageState] = useState(initState);

  let LAST_VISIBLE = null;

  const USERS_PER_PAGE = 10;

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "users"),
        orderBy(pageState.sort.value1, pageState.sort.value2),
        startAfter(pageState.page !== 0 ? LAST_VISIBLE : null),
        limit(USERS_PER_PAGE)
        // where("role", "==", "user")
      );

      onSnapshot(q, (querySnapshot) => {
        handleChange(
          "users",
          querySnapshot.docs.map((doc) => doc.data())
        );
        LAST_VISIBLE = querySnapshot.docs[querySnapshot.docs.length - 1];
      });

      const totalDocs = await getDocs(collection(db, "users"));
      handleChange("pageCount", Math.ceil(totalDocs.size / USERS_PER_PAGE));
    };
    fetchData();
  }, [pageState.page, pageState.sort]);

  const handleChange = (name, value) => {
    setPageState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePageClick = (data) => {
    handleChange("page", data.selected);
  };

  const handleOpenEditForm = (userID) => {
    handleChange("edit", true);
    handleChange("userID", userID);
  };

  const handleOpenDeleteForm = (userID) => {
    handleChange("delete", true);
    handleChange("userID", userID);
  };

  const handleDeleteUser = async () => {
    const q = query(
      collection(db, "users"),
      where("uid", "==", pageState.userID)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (docc) => {
      await deleteDoc(doc(db, "users", docc.id));
    });
    toast.success("Delete user successfully");
  };

  return (
    <div className="users-list-container">
      <UserEditModal
        visible={pageState.edit}
        setVisible={() => handleChange("edit", false)}
        userID={pageState.userID}
      />
      <Modal
        customFunction={handleDeleteUser}
        visible={pageState.delete}
        setVisible={() => handleChange("delete", false)}
      />
      <div className="control-container">
        <div className="left-control">
          <div style={{ width: 200 }}>
            <Select
              options={options}
              placeholder="Sort by"
              value={pageState.sort}
              onChange={(e) => handleChange("sort", e)}
            />
          </div>
          <input
            className="search-input"
            type="text"
            placeholder="Search for users"
          />
        </div>
        <div className="right-control"></div>
      </div>
      <div
        className={`users-table-container ${
          pageState.isLoading ? "loading" : null
        }`}
      >
        {pageState.isLoading ? (
          <ReactLoading type="bars" color="#f2f2f2" />
        ) : (
          <table>
            <thead>
              <tr>
                <th>email</th>
                <th>name</th>
                <th>auth provider</th>
                <th>role</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              {pageState.users.length > 0 &&
                pageState.users.map((user, i) => {
                  return (
                    <tr key={i}>
                      <td>{user.email}</td>
                      <td>{user.name}</td>
                      <td>{user.authProvider}</td>
                      <td>{user.role}</td>
                      <td>
                        <button
                          className="edit-btn"
                          type="button"
                          onClick={() => handleOpenEditForm(user.uid)}
                        >
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        {/* <button
                          className="delete-btn"
                          type="button"
                          onClick={() => handleOpenDeleteForm(user.uid)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button> */}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </div>
      <div className="paginate-container">
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageState.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default UserListPage;
