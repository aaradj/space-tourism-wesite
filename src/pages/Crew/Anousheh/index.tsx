import { Container } from "../crewstyle";

const Anousheh = ({ data }: any) => {
  const { name, image, role, bio } = data;
  return (
    <Container>
      <div className="description">
        <div>
          <p className="role">{role}</p>
        </div>
        <div>
          <h3>{name}</h3>
        </div>
        <div>
          <p className="bio">{bio}</p>
        </div>
      </div>
      <div className="image">
        <img src={image} alt={name} />
      </div>
    </Container>
  );
};

export default Anousheh;
