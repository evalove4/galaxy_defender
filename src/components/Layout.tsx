import { Outlet } from 'react-router-dom';
import { TopBar, BottomNav } from './Navigation';
import Background from './Background';

export default function Layout() {
  return (
    <div className="min-h-screen w-full relative pt-20 pb-24 md:pt-28 md:pb-12 flex flex-col items-center">
      <TopBar />
      <Background />
      <main className="flex-1 w-full max-w-container-max flex items-center justify-center">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
