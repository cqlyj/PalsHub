import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn appearance={{ variables: { colorPrimary: "#3b82f6" } }}></SignIn>
    </div>
  );
};

export default SignInPage;
