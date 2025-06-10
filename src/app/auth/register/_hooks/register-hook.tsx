import { useMutation } from "@tanstack/react-query";


import { RegisterInputs } from "@/lib/schemes/auth-schemes";
import { toast } from "sonner";
import { registerUser } from "../_actions/register-action";

export default function useRegister() {
  const handleSuccess = () => {
    toast.success("Register success");
    setTimeout(() => {
      window.location.href = "/auth/login";
    }, 1000);
  };
  const handleError = (error: Error) => {
    toast.error(error.message);
    console.log(error.message);
  };

  const { isPending, error, mutate } = useMutation({
    mutationFn: async (registerInputs: RegisterInputs) =>
      await registerUser(registerInputs),
    onSuccess: handleSuccess,
    onError: handleError,
  });

  const register = (Inputs: RegisterInputs) => {
    mutate(Inputs);
  };
  return { error, register, isPending };
}