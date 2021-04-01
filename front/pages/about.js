import React from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import { Avatar, Card } from "antd";

import AppLayout from "../components/AppLayout";
import wrapper from "../store/configureStore";
import { LOAD_USER_REQUEST } from "../reducers/user";
import { END } from "redux-saga";

function About() {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <>
      <AppLayout>
        <Head>
          <meta charSet="utf-8" />
          <title>내프로필 NodeBird</title>
        </Head>
        {userInfo ? (
          <Card
            actions={[
              <div key="twit">
                트윗
                <br />
                {userInfo.Posts.length}
              </div>,
              <div key="followings">
                팔로잉
                <br />
                {userInfo.Followings.length}
              </div>,
              <div key="followings">
                팔로워
                <br /> {userInfo.Followers.length}
              </div>,
            ]}
          >
            <Card.Meta
              avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
              title={userInfo.nickname}
            />
          </Card>
        ) : null}
      </AppLayout>
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps(async (context) => {
  context.store.dispatch({
    type: LOAD_USER_REQUEST,
    data: 1,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default About;
