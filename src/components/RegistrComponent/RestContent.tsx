import { Link } from "react-router-dom";
import '../../../src/css/Registration/SignupClient.scss'

const RestContent = () => {
  return (
    <div className="client-content">
      <div className="header-btn">
        <Link to="/login/client">
          {" "}
          <button>Стать клиентом</button>
        </Link>
        <Link to="/login/rest">
          <button>Для ресторана</button>
        </Link>
      </div>
      <div className="header-auth">
        <p>Уже есть аккаунт?</p>
        <Link to='/login/enter'> <span>Войти</span></Link>
      </div>
      <div className="header-p">
        <p>СТАТЬ ПАРТНЕРОМ</p>
      </div>
    </div>
  );
};

export default RestContent;
