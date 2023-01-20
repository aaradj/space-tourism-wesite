
import { DataProps } from "..";

const Mars = ({name,img,description,distance,travel}:DataProps) => {
    return (
        <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{distance}</p>
        <p>{travel}</p>
        <img src={img} alt="mars" />
      </div>
    );
};

export default Mars;