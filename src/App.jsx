import { Routes, Route } from "react-router-dom";
import WebLay from "./WebLay";
import Dealers from "./pages/Dealers";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
				<Route path="/" element={<WebLay />}>
					<Route path='/' element={<Home />} />
					<Route path='/dealers' element={<Dealers />} />
					<Route path='/login' element={<Login />} />
				</Route>
			</Routes>
    </>
  )
}

export default App
