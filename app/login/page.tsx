'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Login(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  async function handleLogin(){
    await supabase.auth.signInWithPassword({email,password});
    window.location.href='/dashboard';
  }
  return(
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <input className="p-3 text-black mb-3" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input className="p-3 text-black mb-3" placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={handleLogin} className="px-6 py-3 bg-blue-600 rounded">Login</button>
    </main>
  );
}
