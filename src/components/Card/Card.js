import React, { useEffect, useState } from "react";
import "./Card.css";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import OneCard from "./OneCard";

// const getDataFromAPI = async () => {
//   const res = await axios.get(
//     "https://60ded6cbabbdd9001722d0b1.mockapi.io/users"
//   );
//   const data = await res.data;
//   return data.results[0];
// };

function Card({ name, avatar, adress }) {
  const [listUsers, setListUsers] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const obj = {
    Address: "6371 Alyce Prairie",
    avatar:
      "https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg",
    createdAt: "2021-12-26T21:26:11.858Z",
    id: "1",
    name: "Karla Schneider",
  };
  const fetchUser = async () => {
    const response = await axios.get(
      `https://60ded6cbabbdd9001722d0b1.mockapi.io/users?page=${page}&limit=9`
    );
    const data = await response.data;
    setListUsers(data);
    return data;
    
  };

  useEffect(() => {
    fetchUser();
  },[]);

  console.log(listUsers);
  // let listOfCards = Array(99).fill(obj);

  const fetchData = async () => {
    const usersFromAPI = await fetchUser();
    setListUsers([...listUsers, ...usersFromAPI]);
    // setHasMore(false);
    if (usersFromAPI.length === 0 || usersFromAPI.length < 9) setHasMore(false);
    setPage(page + 1);
  };

  return (
    <InfiniteScroll
      dataLength={listUsers.length} //This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className="listOfcards" style={{ background: "#F7F7F7" }}>
        {listUsers.map((el) => (
          <OneCard el={el} key={el.id} />
        ))}
      </div>
    </InfiniteScroll>

    // </div>
  );
}

export default Card;
