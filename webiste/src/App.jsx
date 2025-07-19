import './App.css'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Home from './PAGES/Home';



function App() {

  // Env function
  // async function showApi() {
  //   console.log(`${import.meta.env.VITE_BASE_URL}/users`)
  //   const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/users`)
  //   console.log(res)
  // }
  // useEffect(() => {  
  //   showApi()
  // }, [])
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
