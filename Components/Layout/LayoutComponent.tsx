import React from 'react'
import FooterComponent from './Footer/FooterComponent'
import HeaderComponent from './Header/HeaderComponent'


export default function LayoutComponent({children}) {
    return (
        <>
        <HeaderComponent />
        {children}
        <FooterComponent />
        </>
    )
}
