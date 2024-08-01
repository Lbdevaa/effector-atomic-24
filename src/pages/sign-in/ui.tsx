import { routes } from "@shared/config/router";
import { Button, Card, Form, Input, Row } from "antd";
import { Link } from "atomic-router-react";
import { signInFx } from "./model";
import { useUnit } from "effector-react";

export const SignIn = () => {
  const [signIn, loading] = useUnit([signInFx, signInFx.pending]);

  return (
    <Row justify="center">
      <Card
        extra={<Link to={routes.auth.signUp}>Don’t have an account?</Link>}
        title="Sign In"
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={signIn}
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
