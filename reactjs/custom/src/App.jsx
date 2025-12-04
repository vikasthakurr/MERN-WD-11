import React from "react";
import Custom from "./Custom";
const App = () => {
  const [data] = Custom("https://dummyjson.com/products");
  // console.log(data);
  return (
    <div>
      {data &&
        data.products.map((products) => {
          return (
            <div>
              <p key={products.id}>{products.title}</p>
            </div>
          );
        })}
    </div>
  );
};

export default App;
