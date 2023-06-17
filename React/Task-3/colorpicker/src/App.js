import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];

  return <ColorPicker colors={colors} />;
}

export default App;
