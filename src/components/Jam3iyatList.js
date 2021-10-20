import React, { useState } from "react";
import jam3iyatStore from "../stores/jam3iyatStore";
import Jam3iyatItem from "./Jam3iyatItem";
import { observer } from "mobx-react";
import SearchBar from "./SearchBar";

function Jam3iyatList() {
  const [query, setQuery] = useState("");
  const jam3iyatList = jam3iyatStore.jam3iyat
    .filter((jam3iya) =>
      jam3iya.title.toLowerCase().includes(query.toLowerCase())
    )
    .map((jam3iya) => {
      return <Jam3iyatItem jam3iya={jam3iya} />;
    });
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <div className="list">{jam3iyatList}</div>
    </>
  );
}

export default observer(Jam3iyatList);
