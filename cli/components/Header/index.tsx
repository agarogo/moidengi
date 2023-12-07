import React from "react";
import { Layout, Avatar, Menu, Popover, Button } from "antd";
import styles from "./Header.module.scss";
import { CloudOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

import * as Api from "@/api";

export const Header: React.FC = () => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      Api.auth.logout();
      location.href = "/";
    }
  };

  return (
    <Layout.Header className={styles.root}>
      <div className="h-[15px]"></div>
      <div className="h-[60px] bg-[#F5F5F5] rounded-[20px] flex">
        <div className="h-[60px] w-1/3 mr-auto flex">
          <a href="/dashboard" className=" w-[184.26px] my-auto rew h-[16px] ml-10"></a>
        </div>
        <div className="h-[60px] w-1/3 mx-auto ">
          <Menu
            className={styles.topMenu}
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={[selectedMenu]}
            onSelect={({ key }) => router.push(key)}
            items={[
              { key: "/dashboard/ZAD", label: "Задания" },
              { key: "/dashboard/magazin", label: "Магазин" },
              { key: "/dashboard/cha", label: "Виртуальный учитель" },
            ]}
          />
        </div>
        <div className="h-[60px] w-1/3 ml-auto flex">
          <form action="/dashboard/profile" className="flex ml-auto mr-10 ">
            <button className="w-[171px] h-[39px] rounded-full border-black  border-2 my-auto align-top"><p className="mt-[-15px]">Личный кабинет</p></button> 
          </form>
        </div>

      </div>
    </Layout.Header>
  );
};
