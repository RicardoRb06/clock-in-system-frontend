import wallpaperDesktop from '../../../assets/images/backgrounds/wallpaperColor.svg';
import wallpaperMobile from '../../../assets/images/backgrounds/wallpaper.svg';
import { LoginForm } from '../components/LoginForm';
import { Text } from '../../../components/ui/Text';

export function LoginPage() {
  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center px-6 md:px-32 bg-[image:var(--bg-mobile)] md:bg-[image:var(--bg-desktop)]"
      style={{
        '--bg-mobile': `url(${wallpaperMobile})`,
        '--bg-desktop': `url(${wallpaperDesktop})`,
      }}
    >
      <div className="w-full max-w-md flex flex-col gap-6">
        <Text variant="title">IFNITE</Text>
        <LoginForm/>
      </div>
    </main>
  );
}