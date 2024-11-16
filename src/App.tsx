import Home from "./Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { TodoListsProvider } from "./context/TodoListsContext";
import "./App.css";

function App() {
  return (
    <body className="grid grid-rows-page-layout grid-cols-[1fr] justify-center w-screen h-screen bg-background gap-10">
      <TodoListsProvider>
        <Header />
        <Home />
        <Footer />
      </TodoListsProvider>
    </body>
  );
}

export default App;
