import React, { useState, useEffect } from 'react';
import { Card } from '../Card/Card';
import { Repos } from '../Repos/Repos';
import { Error } from '../Error/Error';
import s from './Form.module.scss';

const GITHUB_API_URL = 'https://api.github.com/users/';
const USER_NOT_FOUND_MESSAGE = 'There no user with this name';
const LAST_REPOS_QUANTITY = 5;

export function Form() {
  const [text, setText] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setIsError(false);
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${GITHUB_API_URL}${text}`)
      .then((res) => {
        if (res.ok) {
          setIsError(false);
          return res.json();
        }
        throw new Error(`There are no user ${text}`);
      })
      .then((json) => setUserInfo(json))
      .catch(() => setIsError(true));
  };

  useEffect(() => {
    userInfo &&
      fetch(userInfo.repos_url)
        .then((res) => res.json())
        .then((json) => setUserRepos(json));
  }, [userInfo]);

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2 className={s.title}>Search github user</h2>
          <input
            className={s.input}
            value={text}
            onChange={handleChange}
            placeholder="Enter github profile name"
          />
          {isError && <Error errorMessage={USER_NOT_FOUND_MESSAGE} />}
        </form>
      </div>
      {userInfo && <Card userInfo={userInfo} />}
      {userRepos && (
        <Repos userRepos={userRepos} reposQuantity={LAST_REPOS_QUANTITY} />
      )}
    </>
  );
}
