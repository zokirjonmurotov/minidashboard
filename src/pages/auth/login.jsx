import React from "react";
import classes from "./login.module.scss";
import { Button, Input, Form } from "antd";
import { API_URL, AUTH } from "../../service/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useMutationHook from "../../hooks/useMutationHook";
import qs from "query-string";

function Login() {
  // const { mutate, data, isSuccess, isLoading } = useMutationHook({
  //   method: "post",
  //   url: AUTH.login,
  // });
  // const newData = data?.data?.data[0] || {};

  const onFinish = (values) => {
    // console.log("Success:", values);

    const data = {
      ...values,
      _subdomain: "toko",
    };

    console.log(data);

    API_URL.post(AUTH.login, qs.stringify(data))
      .then((response) => {
        localStorage.setItem("token", response?.data?.token);
        console.log(response?.data?.token);
      })
      .catch((error) => console.log(error));

    // const encodedData = qs.stringify(data);
    // mutate(data)
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <section className={classes.login}>
        <main className={classes.login__main}>
          <Form
            className={classes.login__form}
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="_username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="_password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <div className={classes.login__welcome}>
            <h1>Welcome to our dashboard</h1>
          </div>
        </main>
      </section>
    </>
  );
}

export default Login;
