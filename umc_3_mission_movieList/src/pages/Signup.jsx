import React from 'react';

const Signup = () => {
  return (
    <div>
      <h2>회원가입</h2>
      <form>
        <input type="text" placeholder="이름" />
        <input type="email" placeholder="이메일" />
        <input type="password" placeholder="비밀번호" />
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
};

export default Signup;
