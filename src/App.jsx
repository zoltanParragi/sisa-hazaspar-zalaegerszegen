import './App.css'

function App() {
  
  return (
    <div className='m-0 p-0'>
      <div className='intro container-fluid pt-5 pb-5'>
        <div className="row">
          <h2 className='text-center display-5'>Szeretettel várunk minden kedves érdeklődőt</h2>
        </div>
      </div>
      <div className='main container-fluid p-0 m-0'>
        <div className="row m-0">
          <div className='col-12 col-md-6 m-0'>
            <h1 className='display-3 fw-bold'>Sisa Attila és Andrea interaktív előadására!</h1>
            <h3 className='h2'>- felnőtteknek és gyerekeknek -</h3>
          </div>
          <div className='col-12 col-md-6 m-0 p-0'>
            <img src="https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/53674839_2266405450047915_1778231192005378048_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=Mr9617xpSnUAX_gUnwW&_nc_ht=scontent-vie1-1.xx&oh=00_AfDYRREhFHul4Y4d5BKS_f_kLue4-Fu23L53GN3Q3JGdRA&oe=6549E7E7" width="100%" alt="sisa házaspár" />
          </div>
        </div>
      </div>
      <div className='details container-fluid p-0'>
        <div className='row m-0'>
          <div className='col-lg-10 mx-auto p-5 mt-4'>
            <p className='mb-4'><span className="me-3 fw-bold">Időpont:</span> 2023.10.14. (szombat) 14:00</p>
            <p className='mb-4'><span className='me-3 fw-bold'>Helyszín:</span> Zalaegerszeg, Závodszky István utca 1. (A volt nyomda irodáinak épülete.)</p>
            <p><span className="me-3 fw-bold">Szervező:</span> Egerszegi Keresztény Gyülekezet</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
