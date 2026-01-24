'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Dashboard(){
  const [user,setUser]=useState(null);

  useEffect(()=>{ supabase.auth.getUser().then(({data})=>setUser(data.user)); },[]);

  if(!user) return <div className="text-white p-10">Loading...</div>;

  return(
    <main className="text-white p-10 bg-black min-h-screen">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="mt-4">Welcome, {user.email}</p>
    </main>
  );
}
