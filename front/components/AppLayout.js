import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Input, Menu, Row, Col } from "antd";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Router from "next/router";

import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import useInput from "../hooks/useInput";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const Global = createGlobalStyle`
    .ant-row {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }

    .ant-col:first-child{
        padding-left:0 !important;
    }

    .ant-col:last-child{
        padding-right:0 !important;
    }
`;

function AppLayout({ children }) {
  const [searchInput, onChangeSearchInput] = useInput("");
  const { me } = useSelector((state) => state.user);

  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);

  return (
    <div>
      <Global />
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput
            enterButton
            value={searchInput}
            onChange={onChangeSearchInput}
            onSearch={onSearch}
          />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://www.naver.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by GGYU
          </a>
        </Col>
      </Row>
    </div>
  );
}

AppLayout.protoType = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
