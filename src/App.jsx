import './App.css'
import Cursor from './Components/Cursor'
import { useEffect, useState } from "react";
import Loader from './Components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <Cursor />
    </>
  )
}
export default App
