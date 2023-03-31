import React from "react";
import classes from "./login.module.scss";
import { Button, Input } from "antd";

function Login() {
  return (
    <>
      <section className={classes.login}>
        <main className={classes.login__main}>
          <form className={classes.login__form}>
            <Input type="text" name="username" placeholder="enter username" />
            <Input
              type="password"
              name="password"
              placeholder="enter password"
            />
            <Button>Login</Button>
          </form>
          <div className={classes.login__welcome}>
            <h1>Welcome to our dashboard</h1>
          </div>
        </main>
      </section>
    </>
  );
}

export default Login;
