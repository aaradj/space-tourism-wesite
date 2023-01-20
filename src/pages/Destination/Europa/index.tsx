import { DataProps } from "..";

const Europa = ({name,img,description,distance,travel}:DataProps) => {
    return (
        <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{distance}</p>
        <p>{travel}</p>
        <img src={img} alt="europa" />
      </div>
    );
};

export default Europa;