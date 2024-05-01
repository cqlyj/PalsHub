import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignUp appearance={{ variables: { colorPrimary: "#3b82f6" } }}></SignUp>
    </div>
  );
};

export default SignUpPage;
