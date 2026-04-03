import React, { useState, useEffect } from 'react';

import SaleItem from '../components/SaleItem';
import BlockItemsGroup from '../components/BlockItemsGroup';
import BlockItemsElectronics from '../components/BlockItemsElectronics';
import ItemHomeSm from '../components/ItemHomeSm';
import ItemCountry from '../components/ItemCountry';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

/* SECTION MAIN */
import AvatarSVG from '../assets/Avatar.svg';
import MaskGroupSVG from '../assets/Mask-group.svg';

/* SECTION SALE */
import watchImg from '../assets/watch.png';
import laptopImg from '../assets/laptop.png';
import goproImg from '../assets/gopro.png';
import headphoneImg from '../assets/headphone.png';
import canonImg from '../assets/canon.png';

/* SECTION BLOCK ITEM GROUP */
import bannerInterior from '../assets/LeftBanner.svg';
import chair from '../assets/chair.png';
import lamp from '../assets/lamp.png';
import mattress from '../assets/matress.png';
import pot from '../assets/pot.png';
import juicer from '../assets/juicer.png';
import coffee from '../assets/coffemaker.png';
import stand from '../assets/stand.jpg';
import plant from '../assets/plant.png';

/* SECTION BLOCK ITEM GROUP Electronics */
import watch from '../assets/watch.png';
import gopro from '../assets/gopro.png';
import headphoneWhite from '../assets/headphoneWhite.png';
import phones from '../assets/phones.png';
import laptop from '../assets/laptop.png'; 
import tablets from '../assets/tablets.png';
import headphone from '../assets/headphone.png'; 
import kattle from '../assets/kattle.png';
import bannerElec from '../assets/bannerElec.svg';

/* SECTION INQUIRY */
import ExpandMoreIcon from '../assets/expand_more.svg';
import ResizerIcon from '../assets/Resizer.svg';
import Group982SVG from '../assets/Group-982.svg'; 
import BgCardSVG from '../assets/bg-card.svg';    

/* SERVICE SECTION */
import serviceImg1 from '../assets/image1.png';
import serviceImg2 from '../assets/image_2.png';
import serviceImg3 from '../assets/image_3.png';
import serviceImg4 from '../assets/image_4.png';
import searchIcon from '../assets/search_icon.svg';
import inventoryIcon from '../assets/inventory_2_icon.svg';
import sendIcon from '../assets/send_icon.svg';
import securityIcon from '../assets/security_icon.svg';

/* SECTION COUNTRY*/
import flagAE from '../assets/flags/AE.png';
import flagAU from '../assets/flags/AU.png';
import flagUS from '../assets/flags/US.png';
import flagRU from '../assets/flags/RU.png';
import flagIT from '../assets/flags/IT.png';
import flagDK from '../assets/flags/DK.png';
import flagFR from '../assets/flags/FR.png';
import flagCN from '../assets/flags/CN.png';
import flagGB from '../assets/flags/GB.png';
import flagA from '../assets/flags/A.png';


// -----------------------------------------------------------------------------------------------------------------------------------------
//                                         SECTION MAIN
// -----------------------------------------------------------------------------------------------------------------------------------------

const SectionMain = () => {
  return (
    <section className="w-[1180px] h-[400px] mx-auto mt-[20px] bg-[#FFFFFF] border border-[#DEE2E7] rounded-[6px] flex p-[20px] gap-[20px] shadow-sm">
      
      {/*Menu Group (Left Sidebar)*/}
<div className="w-[250px] h-[360px] flex flex-col pt-[10px]">
  <ul className="flex flex-col">
    {[
      { name: "Automobiles", active: true },
      { name: "Clothes and wear", active: false },
      { name: "Home interiors", active: false },
      { name: "Computer and tech", active: false },
      { name: "Tools, equipments", active: false },
      { name: "Sports and outdoor", active: false },
      { name: "Animal and pets", active: false },
      { name: "Machinery tools", active: false },
      { name: "More category", active: false },
    ].map((category, index) => (
      <li
        key={index}
        className={`
          w-[250px] h-[40px] flex items-center px-[10px] cursor-pointer rounded-[6px] transition-colors
          ${category.active 
            ? "bg-[#E5F1FF] text-[#1C1C1C] font-medium" 
            : "bg-transparent text-[#505050] hover:bg-[#F7F7F7]"}
        `}
      >
        <span className="font-['Inter'] text-[16px] leading-[19px]">
          {category.name}
        </span>
      </li>
    ))}
  </ul>
</div>

      {/*Banner Group (Center) */}
<div 
  className="relative w-[665px] h-[360px] border border-white rounded-[6px] overflow-hidden"
  style={{ 
    backgroundImage: `url(${MaskGroupSVG})`, // This is your Mask-group.svg
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  {/* Text Group */}
  <div className="absolute top-[53px] left-[45px] flex flex-col gap-[0px]">
    <span className="font-['Inter'] font-normal text-[28px] leading-[34px] text-[#1C1C1C]">
      Latest trending
    </span>
    <h1 className="font-['Inter'] font-bold text-[32px] leading-[39px] text-[#1C1C1C]">
      Electronic items
    </h1>
  </div>

  {/* Button/btn-basic (Learn more) */}
  <button 
    className="absolute top-[143px] left-[46px] w-[119px] h-[40px] bg-white border border-white rounded-[6px] shadow-[0px_1px_2px_0px_#38383814] flex items-center justify-center transition-transform active:scale-95"
  >
    <span className="font-['Inter'] font-medium text-[16px] text-[#1C1C1C]">
      Learn more
    </span>
  </button>
</div>

      {/* Right Sidebar (User & Blocks) */}
      <div className="w-[200px] flex flex-col gap-[10px]">
        
        {/* --- Top User Block --- */}
        <div className="w-[200px] h-[150px] bg-[#E3F0FF] rounded-[6px] p-[10px] flex flex-col items-center">
          
          
          <div className="flex items-center gap-[10px] w-full mb-[10px]">
            <img 
              src={AvatarSVG} 
              alt="Avatar" 
              className="w-[44px] h-[44px] rounded-full"
            />
            <p className="font-['Inter'] text-[16px] leading-[19px] text-[#1C1C1C]">
              Hi, user <br /> let's get started
            </p>
          </div>

          {/* Button/btn-basic-2 (Join Now) */}
          <button 
            className="w-[180px] h-[30px] rounded-[6px] text-white font-medium text-[13px] mb-[7px] transition-transform active:scale-95"
            style={{ background: 'linear-gradient(180deg, #127FFF 0%, #0067FF 100%)' }}
          >
            Join now
          </button>

          {/* Button/btn-basic-1 (Log In) */}
          <button 
            className="w-[180px] h-[30px] bg-white border border-[#DEE2E7] rounded-[6px] text-[#0D6EFD] font-medium text-[13px] transition-all hover:bg-gray-50"
          >
            Log in
          </button>
        </div>

        {/* block-2 (Orange Promo) */}
        <div className="relative w-[200px] h-[95px] bg-[#F38332] rounded-[6px] p-[16px]">
          <p className="font-['Inter'] text-white text-[16px] leading-[19px] w-[144px]">
            Get US $10 off with a new supplier
          </p>
        </div>

        {/* block-1 (Teal Promo) */}
        <div className="relative w-[200px] h-[95px] bg-[#55BDC3] rounded-[6px] p-[16px]">
          <p className="font-['Inter'] text-white text-[16px] leading-[19px] w-[140px]">
            Send quotes with supplier preferences
          </p>
        </div>

      </div>
    </section>
  );
};

// -----------------------------------------------------------------------------------------------------------------------------------------
//                                         SECTION SALE
// -----------------------------------------------------------------------------------------------------------------------------------------


const SectionSale = () => {
  const timerData = [
    { label: "Days", value: "04" },
    { label: "Hour", value: "13" },
    { label: "Min", value: "34" },
    { label: "Sec", value: "56" },
  ];

  const saleItems = [
    { id: 1, title: "Smart watches", discount: "-25%", img: watchImg },
    { id: 2, title: "Laptops", discount: "-15%", img: laptopImg },
    { id: 3, title: "GoPro cameras", discount: "-40%", img: goproImg },
    { id: 4, title: "Headphone", discount: "-20%", img: headphoneImg },
    { id: 5, title: "Canon cameras", discount: "-25%", img: canonImg },
  ];

  return (
    <section className="w-[1180px] h-[240px] mx-auto mt-[30px] bg-[#FFFFFF] border border-[#DEE2E7] rounded-[6px] flex overflow-hidden shadow-sm">
      
      {/* Left Column: Countdown */}
      <div className="w-[280px] h-full border-r border-[#DEE2E7] p-[20px] flex flex-col">
        <h2 className="font-['Inter'] font-semibold text-[20px] leading-[28px] tracking-[-0.2px] text-[#1C1C1C]">
          Deals and offers
        </h2>
        <p className="font-['Inter'] font-normal text-[16px] text-[#8B96A5] mb-[18px]">
          Hygiene equipments
        </p>

        <div className="flex gap-[6px]">
          {timerData.map((item, index) => (
            <div 
              key={index} 
              className="w-[45px] h-[50px] bg-[#606060] rounded-[4px] flex flex-col items-center justify-center"
            >
              <span className="font-['Inter'] font-bold text-[16px] text-white leading-[1]">
                {item.value}
              </span>
              <span className="font-['Inter'] font-normal text-[12px] text-white leading-[1]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Items Grid */}
      <div className="flex-1 flex">
        {saleItems.map((item, index) => (
          <SaleItem 
            key={item.id}
            title={item.title}
            discount={item.discount}
            image={item.img} 
            showLine={index !== saleItems.length - 1} 
          />
        ))}
      </div>
    </section>
  );
};

// -----------------------------------------------------------------------------------------------------------------------------------------
//                                         SECTION BLOCK ITEMS GROUP Interior
// -----------------------------------------------------------------------------------------------------------------------------------------

const BlockItem = () => {
  // Data array 
  const interiorItems = [
    { title: "Soft chairs", price: "19", img: chair },
    { title: "Sofa & Lamps", price: "19", img: lamp },
    { title: "Kitchen mattress", price: "19", img: mattress },
    { title: "Flower pots", price: "19", img: pot },
    { title: "Kitchen juicer", price: "19", img: juicer },
    { title: "Coffee maker", price: "19", img: coffee },
    { title: "Soft chairs", price: "19", img: stand },
    { title: "Soft chairs", price: "19", img: plant },
  ];

  return (
    
    <section className="w-[1180px] h-[257px] mx-auto mt-[20px] bg-[#FFFFFF] border border-[#E0E0E0] rounded-[6px] flex overflow-hidden shadow-sm">

    <BlockItemsGroup 
      categoryTitle="Home and outdoor" 
      bannerImage={bannerInterior} 
      itemsData={interiorItems} 
      bannerBg="#FFE0B0"
    />
    </section>
  );
};

// -----------------------------------------------------------------------------------------------------------------------------------------
//                                         SECTION BLOCK ITEMS GROUP Electronics
// -----------------------------------------------------------------------------------------------------------------------------------------

const ElectronicItem = () => {
  // Data array 
  const electronicItems = [
    { title: "Watches", price: "19", img: watch}, 
    { title: "Cameras", price: "89", img: gopro },
    { title: "Headphones", price: "10", img: headphoneWhite},
    { title: "Smart phones", price: "19", img: phones},
    { title: "Laptops & PC", price: "19", img: laptop },
    { title: "Smart tablets", price: "19", img: tablets },
    { title: "Gaming sets", price: "19", img: headphone},
    { title: "Cameras", price: "89", img: kattle },
  ];

  return (
    <section>

    <BlockItemsElectronics 
      categoryTitle="Consumer electronics" 
      bannerImage={bannerElec} 
      itemsData={electronicItems} 
      bannerBg="#FFE0B0"
    />
    </section>
  );
};

// -----------------------------------------------------------------------------------------------------------------------------------------
//                                         SECTION INQUIRY
// -----------------------------------------------------------------------------------------------------------------------------------------

const SectionInquiry = () => {
  return (
    /* Section-inquiry - Root Container */
    <section 
      className="relative w-[1180px] h-[420px] mx-auto flex items-center justify-between px-[40px] rounded-[6px] overflow-hidden border border-[#E0E0E0] mt-[40px]"
      style={{ 
        backgroundImage: `url(${Group982SVG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      
      {/* LEFT SIDE: info (group) */}
      <div className="relative z-10 w-[440px] flex flex-col gap-[13px]">
        <h2 className="font-['Inter'] font-semibold text-[32px] leading-[39px] tracking-[-0.2px] text-white">
          An easy way to send requests to all suppliers
        </h2>
        <p className="w-[390px] font-['Inter'] font-normal text-[16px] leading-[24px] tracking-[-0.2px] text-white opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
        </p>
      </div>

      {/* RIGHT SIDE: Form-block */}
      <div 
        className="relative z-10 w-[491px] h-[346px] flex flex-col pt-[22px] px-[20px] pb-[25px] rounded-[6px] shadow-lg"
        style={{ 
          backgroundImage: `url(${BgCardSVG})`,
          backgroundSize: '100% 100%'
        }}
      >
        <h3 className="font-['Inter'] font-semibold text-[20px] leading-[28px] tracking-[-0.2px] text-[#1C1C1C] mb-[18px]">
          Send quote to suppliers
        </h3>

        <div className="flex flex-col gap-[16px]">
          <input 
            type="text"
            placeholder="What item do you need?"
            className="w-[440px] h-[40px] px-[10px] border border-[#DEE2E7] rounded-[6px] text-[16px] placeholder-[#8B96A5] focus:outline-none focus:border-[#127FFF]"
          />

          <div className="relative w-[440px] h-[73px]">
            <textarea 
              placeholder="Type more details"
              className="w-full h-full p-[11px] border border-[#DEE2E7] rounded-[6px] text-[16px] placeholder-[#8B96A5] focus:outline-none focus:border-[#127FFF] resize-none overflow-hidden"
            />
            <img src={ResizerIcon} alt="" className="absolute bottom-[6px] right-[6px] w-[8px] h-[8px]" />
          </div>

          <div className="flex gap-[8px]">
            <input 
              type="text" 
              placeholder="Quantity"
              className="w-[206px] h-[40px] px-[10px] border border-[#DEE2E7] rounded-[6px] text-[16px] focus:outline-none"
            />
            <div className="relative w-[111px] h-[40px]">
              <select className="w-full h-full appearance-none bg-white border border-[#DEE2E7] rounded-[6px] pl-[10px] pr-[35px] text-[16px] cursor-pointer focus:outline-none">
                <option>Pcs</option>
                <option>Kg</option>
              </select>
              <img src={ExpandMoreIcon} alt="" className="absolute right-[8px] top-1/2 -translate-y-1/2 w-[24px] h-[24px] pointer-events-none" />
            </div>
          </div>
        </div>

        <button 
          className="mt-[20px] w-[128px] h-[40px] rounded-[6px] text-white font-medium text-[16px] transition-all hover:brightness-110 active:scale-95"
          style={{ background: 'linear-gradient(180deg, #127FFF 0%, #0067FF 100%)' }}
>
          Send inquiry
        </button>
      </div>

    </section>
  );
};

// -----------------------------------------------------------------------------------------
//                               SECTION RECOMMENDED ITEMS
// -----------------------------------------------------------------------------------------

const SectionRecomended = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // ADDED: The flexible API link
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchRecommended = async () => {
      try {
        // UPDATED: Now uses the base URL
        const res = await fetch(`${API_BASE_URL}/api/products`);
        const data = await res.json();
        setItems(data.slice(0, 10)); 
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecommended();
  }, [API_BASE_URL]);

  if (loading) return <div className="w-[1180px] mx-auto py-10 text-center">Loading...</div>;

  return (
    <section className="w-[1180px] mx-auto mt-[30px] mb-[40px]">
      <h2 className="font-['Inter'] font-semibold text-[24px] text-[#1C1C1C] mb-[24px]">
        Recommended items
      </h2>

      {/* THE GRID: 5 columns*/}
      <div className="grid grid-cols-5 gap-[20px]">
        {items.map((product) => (
          <ItemHomeSm 
            key={product._id}
            title={`$${product.price}`} 
            info={product.name}    
            image={product.image}  
          />
        ))}
      </div>
    </section>
  );
};


// -----------------------------------------------------------------------------------------------------------------------------------------
//                                         SECTION SERVICES
// -----------------------------------------------------------------------------------------------------------------------------------------

const ServiceCard = ({ image, icon, title }) => {
  return (
    <section className="w-[1180px] mx-auto mt-[10px] mb-[10px]">
    <div className="relative w-[280px] h-[200px] bg-white border border-[#E0E0E0] rounded-[6px] overflow-hidden group">
      {/* Image with BG Mask */}
      <div className="relative h-[120px] w-full bg-[#1C1C1C] overflow-hidden">
        <img 
          src={image} 
          alt="service" 
          className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-300"
        />
        {/* The "BG (mask)"*/}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Elipse 12 + Icon/instance */}
      <div className="absolute top-[100px] right-[20px] w-[55px] h-[55px] bg-[#D1E7FF] border-[2px] border-white rounded-full flex items-center justify-center shadow-sm">
        <img src={icon} alt="icon" className="w-[24px] h-[24px]" />
      </div>

      {/*the Service Title */}
      <div className="p-[16px] pt-[20px]">
        <h4 className="font-['Inter'] font-medium text-[16px] text-[#1C1C1C] leading-[22px] pr-[40px]">
          {title}
        </h4>
      </div>
    </div>
    </section>
  );
};

// --- MAIN SECTION ---
const ExtraServices = () => {
  const services = [
  { 
    title: "Source from Industry Managers", 
    image: serviceImg1, 
    icon: searchIcon 
  },
  { 
    title: "Customized Stationery Products", 
    image: serviceImg2, 
    icon: inventoryIcon 
  },
  { 
    title: "Fast, reliable shipping by ocean or air", 
    image: serviceImg3, 
    icon: sendIcon 
  },
  { 
    title: "Product monitoring and inspection", 
    image: serviceImg4, 
    icon: securityIcon 
  }
];

  return (
    <section className="w-[1180px] mx-auto mt-[10px] mb-[10px]">
      {/* Title (group) */}
      <div className="mb-[24px]">
        <h2 className="font-['Inter'] font-semibold text-[24px] text-[#1C1C1C]">
          Our extra services
        </h2>
      </div>

      {/* 1, 2, 3, 4 (groups) inside a container */}
      <div className="flex justify-between gap-[20px]">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title}
            image={service.image}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

// -----------------------------------------------------------------------------------------------------------------------------------------
//                                         SECTION COUNTRY
// -----------------------------------------------------------------------------------------------------------------------------------------

const SectionCountry = () => {
  const countries = [
    { name: "Arabic Emirates", site: "shopname.ae", flag: flagAE },
    { name: "Australia", site: "shopname.au", flag: flagAU },
    { name: "United States", site: "shopname.us", flag: flagUS },
    { name: "Russia", site: "shopname.ru", flag: flagRU },
    { name: "Italy", site: "shopname.it", flag: flagIT },
    { name: "Denmark", site: "shopname.dk", flag: flagDK },
    { name: "France", site: "shopname.fr", flag: flagFR },
    { name: "China", site: "shopname.co", flag: flagCN },
    { name: "Great Britain", site: "shopname.uk", flag: flagGB },
    { name: "Arabic", site: "shopname.a", flag: flagA },
  ];

  return (
    <section className="w-[1180px] mx-auto mt-[10px] mb-[10px]">
      {/* Title (group) */}
      <div className="mb-[24px]">
        <h2 className="font-['Inter'] font-semibold text-[24px] text-[#1C1C1C] leading-[32px]">
          Suppliers by region
        </h2>
      </div>

      {/* items-block (group) - 5 columns, 2 rows */}
      <div className="grid grid-cols-5 gap-y-[18px] gap-x-[10px]">
        {countries.map((country, index) => (
          <ItemCountry 
            key={index}
            name={country.name}
            site={country.site}
            flag={country.flag}
          />
        ))}
      </div>
    </section>
  );
};

// --- THE MAIN EXPORT (The only default) ---
const Home = () => {
  return (
    <main className="flex flex-col items-center pb-20">
      <SectionMain />
      <SectionSale />
      <BlockItem />
      <ElectronicItem />
      <SectionInquiry />
      <SectionRecomended />
      <ExtraServices />
      <SectionCountry />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Home;