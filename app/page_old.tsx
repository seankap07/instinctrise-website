export default function Home(){
  return(
    <main className="flex flex-col items-center justify-center min-h-screen text-white bg-black">
      <h1 className="text-5xl font-bold">InstinctRise Enterprise</h1>
      <p className="mt-4 text-gray-300">Your platform is live.</p>
      <a href="/login" className="mt-8 px-6 py-3 bg-blue-600 rounded-lg">Login</a>
    </main>
  );
}
