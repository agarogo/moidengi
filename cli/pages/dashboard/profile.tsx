import { GetServerSidePropsContext, NextPage } from "next";
import { User } from "@/api/dto/auth.dto";
import { Button } from "antd";

import styles from "@/styles/Profile.module.scss";
import { checkAuth } from "@/utils/checkAuth";
import * as Api from "@/api";
import React from "react";
import { Layout } from "@/layouts/Layout";
import DashboardPage from "@/pages/dashboard/index";

interface Props {
  userData: User;
}

const DashboardProfilePage: NextPage<Props> = ({ userData }) => {
  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      Api.auth.logout();
      location.href = "/";
    }
  };

  return (
    <main className="w-full">
      <div className="h-[850px] flex">
        <div className="w-1/5 h-full mr-auto bg-black rounded-[22px]">
          <div className="h-1/3 ">
            <div className="h-1/2 flex">
              <p className="text-transparent text-xl ml-auto">
                ID: <b>{userData.id}</b>
              </p>
              <div className="h-[100px] w-[100px] bg-white rounded-full mt-auto mx-auto border-2 border-[#B328F6]"></div>
              <p className="text-white mt-auto mr-auto">
                ID: <b>{userData.id}  </b>
              </p>
            </div>
            <div className="h-1/2">
              <p className="text-white text-xl text-center mt-5">
                <b>{userData.fullName}</b>
              </p>
              <p className="text-white text-xl mt-1 text-center">
                <b>{userData.email}</b>
              </p>
            </div>
          </div>
          <div className="h-1/3 ">
            <p className="text-white ml-10 text-xl">Мои интересы</p>
          </div>
          <div className="h-1/3">
            <Button onClick={onClickLogout} className="ml-10 mt-[200px] w-[150px] h-[50px] text-white border-2 text-xl rounded-[22px]">
              Выйти
            </Button>
          </div>
        </div>
        <div className="h-[850px] w-[78%] ml-auto ">
          <div className="h-[30%] flex">
            <div className="h-full bg-[#86F37D] w-[30%] rounded-[22px]">
              <p className="text-3xl font-semibold ml-10 mt-5">кошелек</p>
              <div className="h-[100px] bg-white w-8/12 ml-10 mt-16 rounded-[22px] flex">
                <p className="text-4xl my-auto mx-auto font-semibold">0 A</p>
              </div>
            </div>
            <div className="h-full ml-auto bg-[#F9E35D] rounded-[22px] w-[67%]">
              <p className="text-3xl font-semibold ml-10 mt-5">корзина</p>
            </div>
          </div>
          <div className="h-[66%] mt-8 flex">
            <div className="h-full w-[24%] bg-[#F5F5F5] rounded-[22px]">
              <p className="text-3xl font-semibold ml-10 mt-5">достижения</p>
              <div className="h-[100px] bg-[#D9D9D9] w-8/12 mx-auto mt-10 rounded-[22px] flex "></div>
              <div className="h-[100px] bg-[#D9D9D9] w-8/12 mx-auto mt-5 rounded-[22px] flex "></div>
            </div>
            <div className="h-full w-[73%] bg-[#5C47FD] ml-auto rounded-[22px]">
              <p className="text-3xl font-semibold ml-10 mt-5 text-white">задания</p>
              <div className="w-11/12 h-20 bg-[#AEA4FB] mt-10 mx-auto rounded-[22px] flex">
                <div className="h-full w-1/2 flex">
                  <p className="text-2xl ml-8 my-auto font-semibold">тест по основам Figma</p>
                </div>
                <div className="h-full w-1/2 flex">
                  <div className="h-[40%] w-1/2 my-auto ml-auto mr-6 flex">
                    <div className="h-full bg-white w-28 rounded-[22px] flex">
                      <p className="text-xl font-semibold mx-auto my-auto">100/100</p>
                    </div>
                    <div className="h-full bg-[#5C47FD] w-20 ml-5 rounded-[22px] flex">
                     <p className="text-xl font-semibold mx-auto my-auto text-white">50A</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

DashboardProfilePage.getLayout = (page: React.ReactNode) => {
  return <Layout title="Dashboard / Профиль">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ("redirect" in authProps) {
    return authProps;
  }

  const userData = await Api.auth.getMe();

  return {
    props: {
      userData,
    },
  };
};

export default DashboardProfilePage;
