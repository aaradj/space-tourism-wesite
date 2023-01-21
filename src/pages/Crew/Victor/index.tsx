import React from "react";

const Victor = ({ data }: any) => {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
      <img src={data.image} alt={data.name} />
    </div>
  );
};

export default Victor;