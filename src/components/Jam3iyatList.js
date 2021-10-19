import React from "react";
import jam3iyatStore from "../stores/jam3iyatStore";
import Jam3iyatItem from "./Jam3iyatItem";
import { observer } from "mobx-react";

function Jam3iyatList() {
  const jam3iyatList = jam3iyatStore.jam3iyat.map((jam3iya) => {
    return <Jam3iyatItem jam3iya={jam3iya} />;
  });
  return <div className="list">{jam3iyatList}</div>;
}

export default observer(Jam3iyatList);
