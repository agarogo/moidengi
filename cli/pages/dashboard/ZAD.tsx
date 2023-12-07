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
      <div className="h-">
        <div className="h-[200px] bg-green-400">
          <div className="w-1/4 h-full bg-[#F5F5F5] rounded-l-3xl"></div>
        </div>
      </div>
      
      <div className={styles.root}>
        <h1>Мой профиль</h1>
        <br />
        <p>
          ID: <b>{userData.id}</b>
        </p>
        <p>
          Полное имя: <b>{userData.fullName}</b>
        </p>
        <p>
          E-Mail: <b>{userData.email}</b>
        </p>
        <br />
        <Button onClick={onClickLogout} type="primary" danger>
          Выйти
        </Button>
      </div>
    </main>
  );
};

DashboardProfilePage.getLayout = (page: React.ReactNode) => {
  return <Layout title="Dashboard / Задание">{page}</Layout>;
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
