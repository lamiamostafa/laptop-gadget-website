import { useEffect, useState } from "react";

const usePurchaseDetail = productId => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://safe-wildwood-22478.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId]);
    return [product]
}
export default usePurchaseDetail;