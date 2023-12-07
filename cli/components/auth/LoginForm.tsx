import React from "react";
import { setCookie } from "nookies";
import styles from "./Auth.module.scss";
import { Button, Form, Input, notification } from "antd";
import { LoginFormDTO } from "@/api/dto/auth.dto";

import * as Api from "@/api";

export const LoginForm: React.FC = () => {
  const onSubmit = async (values: LoginFormDTO) => {
    try {
      const { token } = await Api.auth.login(values);

      notification.success({
        message: "Успешно!",
        description: "Переходим в админ-панель...",
        duration: 2,
      });

      setCookie(null, "_token", token, {
        path: "/",
      });

      location.href = "/dashboard";
    } catch (err) {
      console.warn("LoginForm", err);

      notification.error({
        message: "Ошибка!",
        description: "Неверный логин или пароль",
        duration: 2,
      });
    }
  };

  return (
    
    <div className={styles.formBlock}>
      <div className="text-3xl mt-[-25px] text-center">Войти в аккаунт</div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        onFinish={onSubmit}
      >
        <Form.Item
          label=""
          name="email"
          rules={[
            {
              required: true,
              message: "Укажите почту",
            },
          ]}
        >
          <Input style={{ borderRadius: '22px' }}  className=" h-10 text-2xl mt-10"/>
        </Form.Item>

        <Form.Item
          label=""
          name="password"
          rules={[
            {
              required: true,
              message: "Укажите пароль",
            },
          ]}
        >
          <Input.Password style={{ borderRadius: '22px' }} className=" h-10 text-2xl"/> 
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button htmlType="submit" className="bg-black text-white rounded-3xl w-full ml-[-60px] mt-[105px] h-14 text-2xl" style={{ width: '100%' }}>
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
