'use client';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
// import axios  from 'axios';

export default function LoginPage() {
  const [user, setUser] = React.useState({
    password: '',
    email: '',
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login</h1>
      <hr />

      <label htmlFor="email">Email</label>
      <input
        className="p-2 mb-4 focus:outline-none focus:border-gray-600 border border-gray-400 rounded"
        id="email"
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />
      <label htmlFor="password">Password</label>
      <input
        className="p-2 mb-4 focus:outline-none focus:border-gray-600 border border-gray-400 rounded"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
      />
      <button
        onClick={onLogin}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none "
      >
        Login
      </button>
      <Link href="/signup">Register here</Link>
    </div>
  );
}
