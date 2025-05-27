import HomePagebanner from "@/component/HomePagebanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HomePagebanner />
      <main className="flex flex-col items-center justify-center mt-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="text-lg text-gray-700">This is your new home page. You can add more content here as needed.</p>
      </main>
    </div>
  );
} 