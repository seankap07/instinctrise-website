'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Signup(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  async function handleSignup(){
    await supabase.auth.signUp({email,password});
    window.location.href='/dashboard';
  }
  return(
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
      <input className="p-3 text-black mb-3" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input className="p-3 text-black mb-3" placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={handleSignup} className="px-6 py-3 bg-blue-600 rounded">Create Account</button>
    </main>
  );
}
