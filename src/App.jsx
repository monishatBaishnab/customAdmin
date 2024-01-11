import Home from "./components/Home"
import SideNav from "./components/Navbar/SideNav"

function App() {

  return (
    <>
      <div className="flex items-center max-w-screen-2xl">
        <div className="w-14 basis-14 bg-white">
          <SideNav />
        </div>
        <div className="w-[calc(100vw_-_56px)] basis-[calc(100vw_-_56px)]">
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
