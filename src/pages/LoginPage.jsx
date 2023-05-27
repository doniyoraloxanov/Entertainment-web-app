import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useMovies from "../hooks/use-movies";
import { useLocaleStorage } from "../hooks/useLocalStorage";

const LoginPage = () => {
  const { signIn } = useMovies();
  const navigate = useNavigate();
  const [isAuth, setIsAuthenticated] = useLocaleStorage("isAuth", false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    try {
      await signIn(e.email, e.password);
      setIsAuthenticated(true);
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="bg-gray-800 py-10 px-8  my-24 rounded-lg  max-w-md mx-auto">
      <h2 className="text-white text-2xl mb-8">Login</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3  mb-4"
      >
        <input
          type="text"
          name="email"
          placeholder="Email address"
          className="pl-4 py-3 outline-none bg-black text-white"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Email is not valid",
            },
          })}
        />

        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="pl-4 py-3 outline-none bg-black text-white"
          {...register("password", {
            required: true,
            validate: {
              checkLength: (value) => value.length >= 6,
              matchPattern: (value) =>
                /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                  value
                ),
            },
          })}
        />

        {errors.password?.type === "required" && (
          <p className="text-red-500">Password is required</p>
        )}

        {errors.password?.type === "checkLength" && (
          <p className="text-red-500">
            Password should be at least 6 charcters
          </p>
        )}

        {errors.password?.type === "matchPattern" && (
          <p className="text-red-500">
            Password should contain at least one upperace letter, lowercase
            letter,digit, and special symbol
          </p>
        )}

        <button
          type="submit"
          className="block  text-white font-semibold px-4 py-3 bg-red-500 hover:bg-white hover:text-gray-500 cursor-pointer"
        >
          Login to your account
        </button>
      </form>
      <div className="flex space-x-4 px-11  justify-center ">
        <p className="text-white">Don't have a account?</p>
        <Link to="/signup">
          <p className="text-red-500 font-semibold">Sign Up</p>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
