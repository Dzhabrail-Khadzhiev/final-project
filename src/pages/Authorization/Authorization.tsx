import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/ButtonComponent/Button";
import "../../../src/css/Authorization/Authorization.scss";
import { useAppDispatch } from "../../hooks/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { signInClient } from "../../redux/reducers/Action/UserAction";
import { IAuth } from "../../types/IUser";
import Input from "../../components/Input";

export default function Authorization() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IAuth>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IAuth> = (data) => {
    const req = dispatch(signInClient(data));

    if (req.arg) {
      navigate("/");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-content">
        <h1>Войти</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="auth-txt">
            <Input label="Электронная почта" register={register} name="mail" />
          </div>
          <div className="auth-text">
            <Input label="Пароль" register={register} name="password" />
          </div>
          <Button>
            <p>Войти</p>
          </Button>
        </form>
        <div className="auth-footer">
          <p>Нет аккаунта?</p>
          <Link to="/login/client">
            {" "}
            <span>Зарегистрироваться</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
