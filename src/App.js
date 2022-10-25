import { DnDProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from './components/DragDrop';

function App() {
	return (
		<DnDProvider backend={HTML5Backend}>
			<div className="app">
				<DragDrop />
			</div>
		</DnDProvider>
	);
}

export default App;
