import React from 'react'
import Product_Card from '../components/Product_Card'
import { useState ,useEffect} from 'react'
import Navbar from '../components/Navbar'

var data=import ("../Datas/shoesdata.json")

function Home() {


   
const [Shoesdataset, setShoesdataset] = useState([])

useEffect(() => {
    if(data.then((result)=>{
        console.log(result.ShoesData)
        setShoesdataset(result.ShoesData)
    }));

 
}, [])


  return (
    
    <div className='container'>

          <body>
        
             <Navbar/>
              <h1 class="title-shop">SHOP</h1>
              <main class="main bd-grid">
                  {
                    
                    Shoesdataset.map((data)=>(
                        <div key={data.Key}>
                        <Product_Card  Price={data.Price} Discount={data.Discount} ShoesName={data.Name} ImgUrl={data.ImgUrl}  /> 
                         </div>

                    ))}
              </main>
              <footer>
                  <a href="https://github.com/bedimcode">CR : Bedimcode </a>
              </footer>
              
              <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
          </body>

    </div>
  )
}

export default Home
