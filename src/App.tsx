import { useRates } from './features/rates/useRates';
import Exchange from './pages/Exchange';

function App() {
  useRates();

  return (
    <>
      <Exchange />
    </>
  )
}

export default App