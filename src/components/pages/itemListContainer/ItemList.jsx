import { Skeleton } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({items}) => {
    // if con return temprano
    // ternario
    // operador and &&
  
    if (items.length === 0) {
      return (
        <>
          <Skeleton variant="rectangular"  height={"500x"} />
          <Skeleton variant="text" sx={{ fontSize: "4rem" }}  />
          <Skeleton variant="text" sx={{ fontSize: "2rem" }}  />
          <Skeleton variant="text" sx={{ fontSize: "2rem" }}/>
          <Skeleton
            variant="rounded"
            sx={{ fontSize: "2rem", borderRadius: "50px" }}
          />
        </>
      );
    }


  return (
    <div
      style ={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "50px"
      }}
    >
      {items.map((item)=> {
        return <ProductCard key={item.id} {...item} />
      })}
    </div>
  );
};

export default ItemList