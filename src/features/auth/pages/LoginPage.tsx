import wallpaper from '../../../assets/images/backgrounds/wallpaperColor.svg';
import { Button } from '../../../components/ui/Button';

export function LoginPage() {
  return (
    <main 
        className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${wallpaper})`,
      }}
    >
      <h1>Login Page</h1>
      <Button>Login</Button>
      -----------
      <Button variant="secondary">Login</Button>
    </main>
  );
}