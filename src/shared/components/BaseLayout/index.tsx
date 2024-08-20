import { Button, Layout } from "antd";
import { useUnit } from "effector-react";
import { PropsWithChildren } from "react";
import { tokenExpired } from "@shared/auth/index";

export const BaseLayout = ({ children }: PropsWithChildren) => {
  const [clearToken] = useUnit([tokenExpired]);

  return (
    <Layout>
      <Layout.Content style={{ minHeight: "100vh" }}>{children}</Layout.Content>
      <Button
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
        type="primary"
        onClick={clearToken}
      >
        Exit
      </Button>
    </Layout>
  );
};