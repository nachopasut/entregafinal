import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import Title from "../Title/Index";
import { getDocs, collection, query, where, getFirestore } from "firebase/firestore";

export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "products");

        const queryFilter = categoriaId
          ? query(queryCollection, where("category", "==", categoriaId))
          : queryCollection;

        const res = await getDocs(queryFilter);
        setData(res.docs.map((product) => ({ id: product.id, ...product.data() })));
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    fetchData();
  }, [categoriaId]);

  return (
    <>
      <Title greeting={texto} />
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
