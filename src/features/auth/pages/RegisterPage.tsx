import wallpaperDesktop from '../../../assets/images/backgrounds/wallpaperColor.svg';
import wallpaperMobile from '../../../assets/images/backgrounds/wallpaper.svg';
import { RegisterForm } from '../components/RegisterForm';
import { Text } from '../../../components/ui/Text';
import { Button } from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export function RegisterPage() {
  const navigate = useNavigate();

  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center px-6 md:px-32 bg-[image:var(--bg-mobile)] md:bg-[image:var(--bg-desktop)]"
      style={{
        '--bg-mobile': `url(${wallpaperMobile})`,
        '--bg-desktop': `url(${wallpaperDesktop})`,
      }}
    >
      <div className="w-full max-w-md flex flex-col">
        <Text variant="title" className="text-center">IFNITE</Text>
        <RegisterForm />
        <Button type="button" variant="ghost" onClick={() => navigate("/login")}>
          Cancelar
        </Button>
      </div>
    </main>
  );
}