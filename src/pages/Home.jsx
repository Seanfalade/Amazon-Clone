import React from 'react'
import NavBar1 from '../Components/NavBar1'
import NavBar2 from '../Components/NavBar2'
import Carosel from '../Components/Carosel'
import ImageBoxes from '../Components/ImageBoxes'
import InformationBar from '../Components/InformationBar'
import SubFooter from '../Components/SubFooter'
import '../styles/Home.css'
import { useSelector } from 'react-redux'

const Home = () => {
  const cartItems = useSelector((state => state.cart.cartItems))
  
  const product = [
    {
        image: 'Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg',
        label: 'Headsets',
        link: '/headsets'
    },

    {
        image: 'Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg',
        label: 'Keyboards',
        link: ''
    },
    {
        image: 'Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg',
        label: 'Mice',
        link: ''

    },
    {
        image: 'Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg',
        label: 'Chairs',
        link: ''

    } 
]


  const productTwo = [
    {
      image: 'CleaningTool_1x._SY116_CB563137408_.jpg',
      label: 'Cleaning Tools',
      link: ''
    },
    {
      image: 'HomeStorage_1x._SY116_CB563137408_.jpg',
      label: 'Home Storage',
      link: ''
    },
    {
      image: 'HomeDecor_1x._SY116_CB563137408_.jpg',
      label: 'Home Decor',
      link: ''
    },
    {
      image: 'Bedding_1x._SY116_CB563137408_.jpg',
      label: 'Bedding',
      link: '' 
    }
  ]
  return (
    <>
      <NavBar1 cartItems={cartItems}/>
      <NavBar2/>
      <Carosel/>
      <ImageBoxes product={product} productTwo={productTwo}/>
      <InformationBar/>
      <SubFooter/>  
      
    </>
  )
}

export default Home