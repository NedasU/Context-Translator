import HomePage from './pages/HomePage/HomePage';
import { TranslationProvider } from './Contexts/TranslationContext';
function App() {
  return (
    <TranslationProvider>
      <HomePage />
    </TranslationProvider>
  );
}

export default App;
