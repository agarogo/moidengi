import { NextPage } from "next";
import Head from "next/head";
import { LoginForm } from "@/components/auth/LoginForm";
import { Tabs } from "antd";
import { RegisterForm } from "@/components/auth/RegisterForm";

const AuthPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard / Auth</title>
      </Head>
      <div className="h-screen w-full flex mx-auto">
        <div className="h-[90%] ml-[50px] w-[1500px] rew1 my-auto rounded-3xl flex"></div>
        <div className="h-[90%] mx-auto w-[90%] my-auto flex">
          <div className="bg-[#FCFCFC] h-[75%] w-[65%] flex my-auto mx-auto rounded-3xl shadow-sm">
            <main style={{ width: 400, }} className=" my-auto mx-auto ">
              <div className="rew h-4 w-[185px] mx-auto mb-10"></div>
              <Tabs
                items={[
                  {
                    label: "Есть аккаунт",
                    key: "1",
                    children: <LoginForm />,
                  },
                  {
                    label: "Нет аккаутна ",
                    key: "2",
                    children: <RegisterForm />,
                  },
                ]}
              />
            </main>
          </div>
          
        </div>
      </div>
      
    </>
  );
};


export default AuthPage;
