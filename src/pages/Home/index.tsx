import PageLayout from "../../components/PageLayout";
import { Div, ExploreLogo, Texts } from "./homestyle";
const Home = () => {
  return (
    <PageLayout>
      <Div>
        <Texts>
          <div>
          <p className="text">So, you want to travel to</p>
          </div>
          <div>
          <h1 className="title">Space</h1>
          </div>
          <div>
          <p className="paragraph">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
          </div>
        </Texts>
        <ExploreLogo>
          <div>Explore</div>
        </ExploreLogo>
      </Div>
    </PageLayout>
  );
};

export default Home;
