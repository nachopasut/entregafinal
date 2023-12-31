import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

    
const ItemDetailContainer = () => {
	const [data, setData] = useState({});
	const { detalleId } = useParams();

	useEffect(() => {
		const querydb = getFirestore();
		const queryDoc = doc(querydb, "products", "AjvcI0ysJALqaA6sAGNk");
		getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
	}, [detalleId]);

	return <ItemDetail data={data} />;
};

export default ItemDetailContainer;