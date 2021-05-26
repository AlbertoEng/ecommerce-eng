import React from 'react'

const Section = () => {
    return (
        <>
            <div className='section'>
                <div className='card'>
                    <div className='card-title'>
                        Camiseta Java
                    </div>
                    <img src="/java.jpg" alt="" className='card-image'/>
                    <p className='card-description'>
                        Camiseta color Blanco del buen lenguaje Java hace rato que lo aprendi a usar
                    </p>
                    <div className='comprar'>
                        <span className='card-precio'>249.90 $</span>
                        <button className='btn-primary'>
                            Agregar al carrito
                        </button>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-title'>
                        Camiseta Python
                    </div>
                    <img src="/python.jpg" alt="" className='card-image'/>
                    <p className='card-description'>
                        Camiseta color Blanco del buen lenguaje Python hace rato que lo aprendi a usar y fue el primero
                    </p>
                    <div className='comprar'>
                        <span className='card-precio'>249.90 $</span>
                        <button className='btn-primary'>
                            Agregar al carrito
                        </button>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-title'>
                        Camiseta Javascript
                    </div>
                    <img src="/javascript.jpg" alt="" className='card-image'/>
                    <p className='card-description'>
                        Camiseta color Blanco del buen lenguaje Python hace rato que lo aprendi a usar y fue el primero
                    </p>
                    <div className='comprar'>
                        <span className='card-precio'>249.90 $</span>
                        <button className='btn-primary'>
                            Agregar al carrito
                        </button>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-title'>
                        Camiseta nasa
                    </div>
                    <img src="/nasa.jpg" alt="" className='card-image'/>
                    <p className='card-description'>
                        Camiseta de la nasa, algun dia tendre que ir de viaje
                    </p>
                    <div className='comprar'>
                        <span className='card-precio'>249.90 $</span>
                        <button className='btn-primary'>
                            Agregar al carrito
                        </button>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-title'>
                        Camiseta spiderman
                    </div>
                    <img src="/spiderman.jpg" alt="" className='card-image'/>
                    <p className='card-description'>
                        Camiseta de Spiderman, algun dia sere spiderman
                    </p>
                    <div className='comprar'>
                        <span className='card-precio'>249.90 $</span>
                        <button className='btn-primary'>
                            Agregar al carrito
                        </button>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-title'>
                        Camiseta spiderman
                    </div>
                    <img src="/kotlin.jpg" alt="" className='card-image'/>
                    <p className='card-description'>
                        Camiseta de Spiderman, algun dia sere spiderman
                    </p>
                    <div className='comprar'>
                        <span className='card-precio'>249.90 $</span>
                        <button className='btn-primary'>
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section
