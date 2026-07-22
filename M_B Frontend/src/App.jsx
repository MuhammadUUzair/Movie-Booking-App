import { Route, Routes } from "react-router-dom"

import Header from "./Components/Shared/Header"
import Footer from "./Components/Shared/Footer"
import Home from "./Pages/Home"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/profile/:id" element={<h1>Profile Page</h1>}/>
          <Route path="/movies" element={<h1>Movies Page</h1>}/>
        </Routes>
      </main>
        <Footer/>
    </div>
  )
}

export default App