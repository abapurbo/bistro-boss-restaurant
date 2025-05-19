import { useEffect, useState } from "react"

const UseMenu = () => {
    const [menu, setMenu] = useState([])
    const [loading,setLoading]=useState(true)
    useEffect(() => {
          fetch('http://localhost:5000/menus')
          .then(res=>res.json())
          .then(data=>{
            setLoading(false)
            setMenu(data)
          }
        )
    }, [])
    return {menu,loading}
}
export default UseMenu;