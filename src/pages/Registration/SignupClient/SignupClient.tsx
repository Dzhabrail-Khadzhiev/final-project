import "../../../../src/css/Registration/SignupClient.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../../components/Input";
import Button from "../../../components/ButtonComponent/Button";
import RegistrContent from "../../../components/RegistrComponent/ClientContent";
import { IReg } from "../../../types/IUser";
import { useAppDispatch } from "../../../hooks/hooks";
import { signUpClient } from "../../../redux/reducers/Action/UserAction";

export default function SignupClient() {
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IReg>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IReg> = (data) => {
    dispatch(signUpClient(data));
    console.log(data);
  };

  return (
    <div className="client-wrapper">
      <div className="client-up">
        <RegistrContent />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="Имя" register={register} name="name" />

          <div>
            <span>{errors?.name?.message as React.ReactNode}</span>
          </div>

          <Input label="Номер телефона" register={register} name="phone" />
          <div>
            <span>{errors?.phone?.message as React.ReactNode}</span>
          </div>

          <Input label="Город" register={register} name="city" />
          <div>
            <span>{errors?.city?.message as React.ReactNode}</span>
          </div>

          <Input label="Адрес" register={register} name="address" />
          <div>
            <span>{errors?.address?.message as React.ReactNode}</span>
          </div>

          <Input label="Электронная почта" register={register} name="mail" />
          <div>
            <span>{errors?.mail?.message as React.ReactNode}</span>
          </div>

          <Input label="Пароль" register={register} name="password" />
          <div>
            <span>{errors?.password?.message as React.ReactNode}</span>
          </div>
          <Button>
            <p>Регистрация</p>
          </Button>
        </form>
      </div>
    </div>
  );
}
