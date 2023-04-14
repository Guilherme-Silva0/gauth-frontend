import { Link as A } from "react-router-dom";

const Link = ({ children, to }) => {
  return (
    <A to={to} className="text-third hover:underline">
      {children}
    </A>
  );
};

export default Link;
