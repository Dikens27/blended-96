import { useForm } from "react-hook-form";
import { userLogin } from "../../api/userApi";
import useAuth from "../../context/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setToken } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    userLogin(data).then((res) => {
      setToken(res.token);
      navigate("/contacts");
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Email" {...register("email", { required: true })} />

      <input
        placeholder="Password"
        {...register("password", { required: true })}
      />

      {(errors.password || errors.email) && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
