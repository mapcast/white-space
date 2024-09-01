'use client'


import { signIn, useSession } from "next-auth/react";

export default function Login() {
  const {data: session} = useSession();
  return (
    <div>
      <button onClick={() => signIn('google')}>Google</button>
      {session ? '로그인 완료!' : '로그인을 해보세요. OAuth2 정보는 일체 수집하지 않습니다.'}
    </div>
  )
}