import React, { useEffect, useState } from "react";
import { db } from "../../../config/firebase";
import {
  collection,
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

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [sort, setSort] = useState(options[0]);
  const [isLoading, setIsLoading] = useState(false);

  let lastVisible = null;

  const itemsPerPage = 10; // The number of items per page

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "users"),
        orderBy(sort.value1, sort.value2),
        startAfter(page !== 0 ? lastVisible : null),
        limit(itemsPerPage),
        where("role", "==", "user")
      );

      onSnapshot(q, (querySnapshot) => {
        setUsers(querySnapshot.docs.map((doc) => doc.data()));
        lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
      });

      const totalDocs = await getDocs(collection(db, "users"));
      setPageCount(Math.ceil(totalDocs.size / itemsPerPage));
    };
    fetchData();
  }, [page, sort]);

  const handlePageClick = (data) => {
    let selected = data.selected;
    setPage(selected);
  };

  return (
    <div className="users-list-container">
      <div className="control-container">
        <div className="left-control">
          <div style={{ width: 200 }}>
            <Select
              options={options}
              placeholder="Sort by"
              value={sort}
              onChange={(e) => setSort(e)}
            />
          </div>
          <input
            className="search-input"
            type="text"
            placeholder="Search for users"
          />
        </div>
        <div className="right-control">
          {/* <Link to={"/articles/create"} className="primary-btn">
              <i className="fa-solid fa-plus"></i>Create
            </Link> */}
        </div>
      </div>
      <div className={`users-table-container ${isLoading ? "loading" : null}`}>
        {isLoading ? (
          <ReactLoading type="bars" color="#f2f2f2" />
        ) : (
          <table>
            <thead>
              <tr>
                <th>email</th>
                <th>name</th>
                <th>role</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 &&
                users.map((user, i) => {
                  return (
                    <tr key={i}>
                      <td>{user.email}</td>
                      <td>{user.name}</td>
                      <td>{user.role}</td>
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
          pageCount={pageCount}
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
