import { DataProps } from "..";
import { Container, Image, Text } from "../destinationstyle";
const Titan = ({ name, img, description, distance, travel }: DataProps) => {
  return (
    <Container>
      <Image>
        <img loading="lazy" src={img} alt={name} />
      </Image>
      <Text>
        <div className="description">
          <div className="title">
            <h2>{name}</h2>
          </div>
          <div className="text">
            <p>{description}</p>
          </div>
        </div>
        <div className="times">
          <div className="distance">
            <p>AVG. DISTANCE</p>
            <p className="bold">{distance}</p>
          </div>
          <div className="travel">
            <p>EST. TRAVEL TIME</p>
            <p className="bold">{travel}</p>
          </div>
        </div>
      </Text>
    </Container>
  );
};

export default Titan;
