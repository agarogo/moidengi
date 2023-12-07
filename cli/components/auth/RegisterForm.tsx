import React from "react";
import { setCookie } from "nookies";
import styles from "./Auth.module.scss";
import { Button, Form, Input, notification } from "antd";
import { RegisterFormDTO } from "@/api/dto/auth.dto";

import * as Api from "@/api";

export const RegisterForm: React.FC = () => {
  const onSubmit = async (values: RegisterFormDTO) => {
    try {
      const { token } = await Api.auth.register(values);

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
      console.warn(err);

      notification.error({
        message: "Ошибка!",
        description: "Ошибка при регистрации",
        duration: 2,
      });
    }
  };

  return (
    <div className={styles.formBlock}>
      <div className="text-3xl mt-[-25px] text-center">Создать аккаунт</div>
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
          name="fullName"
          rules={[
            {
              required: true,
              message: "Укажите полное имя",
            },
          ]}
        >
          <Input style={{ borderRadius: '22px' }}  className=" h-10 text-2xl"/>
        </Form.Item>

        <Form.Item
          
          name="password"
          rules={[
            {
              required: true,
              message: "Укажите пароль",
            },
          ]}
        >
          <Input.Password style={{ borderRadius: '22px' }}  className=" h-10 text-2xl"/>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button  htmlType="submit" className="bg-black text-white rounded-3xl w-full ml-[-60px] mt-10 h-14 text-2xl" style={{ width: '100%' }}>
            Регистрация
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
