import { useUnit } from "effector-react";
import {
  $pagination,
  $posts,
  getPostsFx,
  paginationChanged,
  queryChanged,
} from "./model";
import { Card, Flex, Input, Pagination, Space, Spin } from "antd";
import { Link } from "atomic-router-react";
import { routes } from "@shared/config/router";
import { BaseLayout } from "@shared/components/BaseLayout";

export const Posts = () => {
  const [posts, isLoading, page, pageChanged, searchChanged] = useUnit([
    $posts,
    getPostsFx.pending,
    $pagination,
    paginationChanged,
    queryChanged,
  ]);

  return (
    <BaseLayout>
      <Flex justify="center">
        <Space
          direction="vertical"
          style={{ paddingTop: "20px" }}
          styles={{ item: { width: "500px" } }}
        >
          <Input.Search onSearch={searchChanged} />
          {isLoading ? (
            <Flex justify="center">
              <Spin />
            </Flex>
          ) : (
            posts.map((item) => (
              <Card
                title={item.title}
                key={item.id}
                extra={
                  <Link
                    params={{ postId: item.id.toString() }}
                    to={routes.private.post}
                  >
                    Open
                  </Link>
                }
              >
                {item.body}
              </Card>
            ))
          )}
          <Pagination
            onChange={pageChanged}
            showSizeChanger={false}
            total={posts[0]?.total}
            current={page}
            style={{ justifyContent: "center" }}
          />
        </Space>
      </Flex>
    </BaseLayout>
  );
};
