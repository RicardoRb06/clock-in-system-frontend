import wallpaper from '../../../assets/images/backgrounds/wallpaper.svg';

export function RegisterPage() {
  return (
    <main 
        className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${wallpaper})`,
      }}
    >
      <h1>Register Page</h1>
    </main>
  );
}