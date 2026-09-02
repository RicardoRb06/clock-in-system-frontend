import { Spinner } from "../components/ui/Spinner";
import SpinnerSrc from "../assets/images/estrelaAzulClaro.svg";
import { Text } from "../components/ui/Text";

export function LoadingPage() {
  return (
    <main className="min-h-screen min-w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-6 px-6 md:px-32">
        <Spinner src={SpinnerSrc} size="lg" />
        <div className="flex flex-col items-center">
          <Text variant="subtitle">Todos os dias quando acordo</Text>
          <Text variant="subtitle">Eu lembro do ifnite</Text>
        </div>
    </main>
  );
}