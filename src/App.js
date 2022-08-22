import Banner from "./Components/Banner";
import BooksList from "./Components/BooksList";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="lg:w-[80%] md:w-[80%] m-auto">
      <NavBar />
      <Banner />
      <BooksList />
    </div>
  );
}

export default App;
