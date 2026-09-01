import { AppProviders } from './providers/appProviders.tsx';
import { AppRoutes } from './routes/routes.tsx'; 

function App() {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  )
}

export default App
