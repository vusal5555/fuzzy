import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {props.children}
    </div>
  );
};

export default AuthLayout;
