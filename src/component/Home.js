import React, { useEffect, useState } from 'react';
import '../css/App.css';
function Home() {
  const savePosts = JSON.parse(localStorage.getItem('posts')) || [];

  const [posts, setPosts] = useState(savePosts);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
    document.title = `BikiniBottom`;
  }, [posts]);

  //게시글 추가함수
  const addPost = () => {
    setPosts([...posts, newPost]);
    setNewPost('');
    localStorage.setItem('posts', JSON.stringify([...posts, newPost]));
  };
  //게시글 삭제
  const deletePost = (index) => {
    const removePost = [...posts];
    removePost.splice(index, 1);
    setPosts(removePost);
    localStorage.setItem('posts', JSON.stringify(removePost));
  };

  return (
    <div>
      <h1>방명록</h1>
      <div>
        <textarea
          row="4"
          cols="50"
          placeholder="방명록을 입력하세요"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        ></textarea>
        <br />
        <button onClick={addPost}>등록</button>
      </div>
      <div>
        <h3>방명록 목록</h3>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              {post}
              <button onClick={() => deletePost(index)}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Home;
