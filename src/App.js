import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Attendance Predictor
          </h1>
          <p className="text-lg text-gray-600">
            Welcome to your attendance tracking application
          </p>
        </header>
        
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
          <div className="flex items-center justify-center mb-4">
            <img src={logo} className="App-logo h-16 w-16" alt="logo" />
          </div>
          <p className="text-center text-gray-700 mb-4">
            Edit <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/App.js</code> and save to reload.
          </p>
          <a
            className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg text-center transition-colors duration-200"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;