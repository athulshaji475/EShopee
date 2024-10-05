import React from 'react'

function Home() {
  return (
    <div className='container'>

          <body>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div class="navbar-nav">
                          <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                          <a class="nav-item nav-link" href="#">Features</a>
                          <a class="nav-item nav-link" href="#">Pricing</a>
                          <a class="nav-item nav-link disabled" href="#">Disabled</a>
                      </div>
                  </div>
              </nav>
              <h1 class="title-shop">SHOP</h1>
              <main class="main bd-grid">
                  <article class="card">
                      <div class="card__img">
                          <img src="https://i.postimg.cc/8PkwdTYd/image.png" alt=""/>
                      </div>
                      <div class="card__name">
                          <p>AIR ZOOM PEGASUS</p>
                      </div>
                      <div class="card__precis">
                          <a href="" class="card__icon" ><ion-icon name="heart-outline"></ion-icon></a>

                          <div>
                              <span class="card__preci card__preci--before">$990.00</span>
                              <span class="card__preci card__preci--now">$749.00</span>
                          </div>
                          <a href="" class="card__icon"><ion-icon name="cart-outline"></ion-icon></a>
                      </div>
                  </article>

                  <article class="card">
                      <div class="card__img">
                          <img src="https://i.postimg.cc/4dBHXR1Z/image.png" alt=""/>
                      </div>
                      <div class="card__name">
                          <p>AIR ZOOM PEGASUS</p>
                      </div>
                      <div class="card__precis">
                          <a href="" class="card__icon" ><ion-icon name="heart-outline"></ion-icon></a>
                          <div>
                              <span class="card__preci card__preci--before">$990.00</span>
                              <span class="card__preci card__preci--now">$749.00</span>
                          </div>
                          <a href="" class="card__icon"><ion-icon name="cart-outline"></ion-icon></a>
                      </div>
                  </article>

                  <article class="card">
                      <div class="card__img">
                          <img src="https://i.postimg.cc/DfRL0nTy/image.png" alt=""/>
                      </div>
                      <div class="card__name">
                          <p>AIR ZOOM PEGASUS</p>
                      </div>
                      <div class="card__precis">
                          <a href="" class="card__icon" ><ion-icon name="heart-outline"></ion-icon></a>

                          <div>
                              <span class="card__preci card__preci--before">$990.00</span>
                              <span class="card__preci card__preci--now">$749.00</span>
                          </div>
                          <a href="" class="card__icon"><ion-icon name="cart-outline"></ion-icon></a>
                      </div>
                  </article>

                  <article class="card">
                      <div class="card__img">
                          <img src="https://i.postimg.cc/DfRL0nTy/image.png" alt=""/>
                      </div>
                      <div class="card__name">
                          <p>AIR ZOOM PEGASUS</p>
                      </div>
                      <div class="card__precis">
                          <a href="" class="card__icon" ><ion-icon name="heart-outline"></ion-icon></a>

                          <div>
                              <span class="card__preci card__preci--before">$990.00</span>
                              <span class="card__preci card__preci--now">$749.00</span>
                          </div>
                          <a href="" class="card__icon"><ion-icon name="cart-outline"></ion-icon></a>
                      </div>
                  </article>
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
