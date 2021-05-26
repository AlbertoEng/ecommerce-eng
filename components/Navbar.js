import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul className='flex list-none menu'>
                <li className='item-menu'>Tecnologia</li>
                <li className='item-menu'>Ver Carrito <span className='items-carrito'>3 items</span></li>
            </ul>
            <div className='mensaje-bienvenida'>
                <p className='pl-5 text-bold'>Hola, <span>Jesus Eng</span></p>
                <button className='btn ghost text-bold'>
                    Cerrar Sesion
                </button>
            </div>
            
        </div>
    )
}

export default Navbar
