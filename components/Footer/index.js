import { getFontDefinitionFromNetwork } from 'next/dist/next-server/server/font-utils'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
                    Projeto desenvolvido por: 
                    Jean Lima Rodovalho / 
                    <a className='hover:underline' href='https://linkedin.com/in/jean-lima-rodovalho-550342131'> Linkedin</a> / 
                    <a className='hover:underline' href='https://github.com/jeanlr16'> Github </a>
                <div className='mt-2'>
                    <img className='inline p-4' src='/logo_semana_fsm.png'/>
                    <img className='inline p-4' src='/logo_devpleno.png'/>
                </div>
            </div>

        </div>
    )
}

export default Footer
