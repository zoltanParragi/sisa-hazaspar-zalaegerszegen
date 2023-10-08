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
            <img src="sisa-hazaspar.jpg" width="100%" alt="sisa házaspár" />
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
