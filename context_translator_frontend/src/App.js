import HomePage from './pages/Home/HomePage';
import { TranslationProvider } from './Contexts/TranslationContext';
function App() {
  return (
    <TranslationProvider>
      <HomePage />
    </TranslationProvider>
  );
}

export default App;
