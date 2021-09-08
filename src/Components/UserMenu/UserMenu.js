import { useDispatch, useSelector } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selectors";
import defaultAvatar from "../../icons/defaultAvatar.jpg";
import styles from "./UserMenu.module.css";
import Button from "@material-ui/core/Button";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => authSelectors.getUserName(state));
  return (
    <div className={styles.container}>
      <img src={defaultAvatar} alt="avatar" className={styles.avatar} />
      <span className={styles.text}>
        Wellcome
        {name}
      </span>
      <Button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        variant="outlined"
        size="small"
        color="primary"
      >
        LOG OUT
      </Button>
    </div>
  );
};

export default UserMenu;