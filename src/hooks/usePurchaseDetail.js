import { useEffect, useState } from "react";

const usePurchaseDetail = productId => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId]);
    return [product]
}
export default usePurchaseDetail;