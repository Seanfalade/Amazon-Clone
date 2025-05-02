import React from "react";
import NavBar1 from "../Components/NavBar1";
import NavBar2 from "../Components/NavBar2";
import Carosel from "../Components/Carosel";
import ImageBoxes from "../Components/ImageBoxes";
import InformationBar from "../Components/InformationBar";
import SubFooter from "../Components/SubFooter";
import "../styles/Home.css";
import { useSelector } from "react-redux";
import ImageSlider from "../Components/ImageSlider";

const Home = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const product = [
    {
      image: "Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg",
      label: "Headsets",
      link: "/headsets",
    },

    {
      image: "Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg",
      label: "Keyboards",
      link: "/keyboard",
    },
    {
      image: "Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg",
      label: "Mice",
      link: "",
    },
    {
      image: "Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg",
      label: "Chairs",
      link: "",
    },
  ];

  const productTwo = [
    {
      image: "CleaningTool_1x._SY116_CB563137408_.jpg",
      label: "Cleaning Tools",
      link: "",
    },
    {
      image: "HomeStorage_1x._SY116_CB563137408_.jpg",
      label: "Home Storage",
      link: "",
    },
    {
      image: "HomeDecor_1x._SY116_CB563137408_.jpg",
      label: "Home Decor",
      link: "",
    },
    {
      image: "Bedding_1x._SY116_CB563137408_.jpg",
      label: "Bedding",
      link: "",
    },
  ];

  const productThree = [
    {
      image: "Fuji_BTF_Quad_Cards_1x_Make-up._SY116_CB558654384_.jpg",
      label: "Makeup",
      link: "",
    },
    {
      image: "Fuji_BTF_Quad_Cards_1x_Brushes._SY116_CB558654384_.jpg",
      label: "Brushes",
      link: "",
    },
    {
      image: "Fuji_BTF_Quad_Cards_1x_Sponges._SY116_CB558654384_.jpg",
      label: "Sponges",
      link: "",
    },
    {
      image: "Fuji_BTF_Quad_Cards_1x_Mirrors._SY116_CB558654384_.jpg",
      label: "Mirrors",
      link: "",
    },
  ];

  const productFour = [
    {
      image: "Smartphone_2x._SY232_CB566164844_.jpg",
      label: "Smartphones",
      link: "",
    },
    {
      image: "Watches_2x._SY232_CB566164844_.jpg",
      label: "Watches",
      link: "",
    },
    {
      image: "Headphone_2x._SY232_CB566164844_.jpg",
      label: "Headphones",
      link: "",
    },
    {
      image: "Tablet_2x._SY232_CB566164844_.jpg",
      label: "Tablets",
      link: "",
    },
  ];

  const productFive = [
    {
      image: "Backpack_2x._SY232_CB566100767_.jpg",
      label: "Backpacks",
      link: "",
    },
    {
      image: "TravelBag_2x._SY232_CB566100767_.jpg",
      label: "Suitcases",
      link: "",
    },
    {
      image: "Accessories_2x._SY232_CB566100767_.jpg",
      label: "Accesories",
      link: "",
    },
    {
      image: "Handbags_2x._SY232_CB566100767_.jpg",
      label: "Handbags",
      link: "",
    },
  ];
  const productSix = [
    {
      image: "Fuji_BTF_Quad_Cards_2x_Kitchen._SY232_CB558654384_.jpg",
      label: "Kitchen",
      link: "",
    },
    {
      image: "Fuji_BTF_Quad_Cards_2x_Home_decor._SY232_CB558654384_.jpg",
      label: "Home Decor",
      link: "",
    },
    {
      image: "Fuji_BTF_Quad_Cards_2x_Dining._SY232_CB558654384_.jpg",
      label: "Dining",
      link: "",
    },
    {
      image: "Fuji_BTF_Quad_Cards_2x_Smart_home._SY232_CB558654384_.jpg",
      label: "Smart Home",
      link: "",
    },
  ];


  const images = [
    "61OseHapCUL._AC_SY400_.jpg",
    "51Gz7IimgoL._AC_SY400_.jpg",
    "81NaJ5Xd6SL._AC_SY400_.jpg",
    "81mdc6bcbNL._AC_SY400_.jpg",
    "715w7purSbL._AC_SY400_.jpg",
    "718TLhNbG-L._AC_SY200_.jpg",
    "616klipzdtL._AC_SY200_.jpg",
    "81qrHDKBgRL._AC_SY200_.jpg",
    "81R23PTBdeL._AC_SY200_.jpg",
    "616klipzdtL._AC_SY200_.jpg",
    "913yCtno5EL._AC_SY200_.jpg",
  ];
  return (
    <>
      <NavBar1 cartItems={cartItems} />
      <NavBar2 />
      <Carosel />
      <ImageBoxes
        product={product}
        productTwo={productTwo}
        productThree={productThree}
        productFour={productFour}
        productFive={productFive}
        productSix={productSix}
      />
      <ImageSlider images={images}/>
      <InformationBar />
      <SubFooter />
    </>
  );
};

export default Home;
