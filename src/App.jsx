import { Route, Routes } from "react-router-dom";
import { GlobalContextProvider } from "./context/global-context";
import CarDetail from "./Pages/CarsPage/Carsinfo";
import CarsRent from "./Pages/CarsPage/CarsRent";
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import About from "./Pages/About/About";
import Contacts from "./Pages/Contacts/Contacts";
import Blog from "./Pages/Blog/Blog";
import Cars from "./Pages/Cars/Cars";


function App() {

	return (

		<>
			<Navbar />

			<section className="select-none">
				<GlobalContextProvider>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/" element={<Cars />} />
						<Route path="/carinfo/:id" element={<CarDetail />} />
						<Route path="/cars/:id" element={<CarsRent />} />
						<Route path="/services" element={<Services />} />
						<Route path="/about" element={<About />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/blog" element={<Blog />} />
					</Routes>
				</GlobalContextProvider>
			</section>
			<Footer />
		</>
	);
}

export default App;
