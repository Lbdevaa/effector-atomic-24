import { routes } from "@shared/config/router";
import { Button, Form, Input, Row } from "antd";
import Card from "antd/es/card/Card";
import { Link } from "atomic-router-react";
import { useUnit } from "effector-react";
import { signUpFx } from "./model";

export const SignUp = () => {
  const [signUp, loading] = useUnit([signUpFx, signUpFx.pending]);

  return (
    <Row justify="center">
      <Card
        extra={<Link to={routes.auth.signIn}>Already have account?</Link>}
        title="Sign Up"
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          autoComplete="off"
          onFinish={signUp}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
};
