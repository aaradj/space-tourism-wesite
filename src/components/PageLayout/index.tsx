import { ReactNode } from "react";
import Navbar from "../Navbar";

type PageLayoutProps = {
  children: ReactNode;
};
const PageLayout = (props: PageLayoutProps) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default PageLayout;
