
import { DataProps } from "..";



const Moon = ({name,img,description,distance,travel}:DataProps) => {
  return (
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{distance}</p>
        <p>{travel}</p>
        <img src={img} alt="moon" />
      </div>
  );
};

export default Moon;
