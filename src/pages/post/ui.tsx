import { BaseLayout } from "@shared/components/BaseLayout";
import { routes } from "@shared/config/router";
import { Button, Card, Flex, Form, Input } from "antd";
import { Link } from "atomic-router-react";
import { useUnit } from "effector-react";
import { $post, getPostFx, updatePostFx } from "./model";

export const Post = () => {
  const [post, isLoading, update, updateLoading] = useUnit([
    $post,
    getPostFx.pending,
    updatePostFx,
    updatePostFx.pending,
  ]);

  return (
    <BaseLayout>
      <Flex justify="center" align="middle" style={{ height: "100%" }}>
        <Card
          title="Edit Post"
          loading={isLoading}
          style={{ maxWidth: "500px", width: "100%" }}
          extra={<Link to={routes.private.posts}>Back</Link>}
        >
          {post && (
            <Form
              initialValues={post || undefined}
              onFinish={update}
              layout="vertical"
            >
              <Form.Item hidden name="id"></Form.Item>
              <Form.Item hidden name="total"></Form.Item>
              <Form.Item hidden name="userId"></Form.Item>
              <Form.Item name="title" label="Title">
                <Input />
              </Form.Item>
              <Form.Item name="body" label="Body">
                <Input.TextArea />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={updateLoading}
                >
                  Save
                </Button>
              </Form.Item>
            </Form>
          )}
        </Card>
      </Flex>
    </BaseLayout>
  );
};
