import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import { LogoutButtonBox, LogoutButtonIcon } from "./styles";

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);

  return (
    <LogoutButtonBox onClick={() => logout()}>
      <LogoutButtonIcon className="bi bi-box-arrow-right" />
    </LogoutButtonBox>
  );
};

export default LogoutButton;
