import { ReactNode } from "react";
import '../../../src/css/Button/Button.scss'

interface IButton {
  children: ReactNode;
}

const Button: React.FC<IButton> = ({ children }) => {
  return <button className="signup-btn">{children}</button>;
};

export default Button;
