import { ReactNode } from "react";

type Props = {
  Navigation: React.FC;
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ Navigation, children }: Props) => {
  return (
    <div>
      <Navigation />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
