import wallpaper from '../../../assets/images/backgrounds/wallpaperColor.svg';
import { LoginForm } from '../components/LoginForm';

export function LoginPage() {
  return (
    <main 
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center px-6 md:px-32"
      style={{
        backgroundImage: `url(${wallpaper})`,
      }}
    >
      <div className="w-full max-w-md">
        <LoginForm/>
      </div>
    </main>
  );
}