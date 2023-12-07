import React from "react";
import styles from "@/styles/Home.module.scss";
import { useRouter } from "next/router";
import { UploadButton } from "@/components/UploadButton";
import { Menu } from "antd";
import {
  DeleteOutlined,
  FileImageOutlined,
  FileOutlined,
} from "@ant-design/icons";

export const DashboardLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  return (
    <main className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        <Menu/>
        <div className="h-20 bg-green-200 "></div>
      </div>
    </main>
  );
};
