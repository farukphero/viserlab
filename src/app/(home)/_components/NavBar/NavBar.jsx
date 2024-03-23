"use client";
import React, { useContext } from "react";
import {
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import logo from "../../../../assets/image/logo-dark.png";
import Image from "next/image";
import { FaArrowRightToBracket } from "react-icons/fa6";
import {
  navListMenuItemsForDM,
  navListMenuItemsForProducts,
  navListMenuItemsForServices,
  navListMenuItemsForWeb,
} from "./_components/NavListMenuItem";
import Link from "next/link";
import { AuthContext } from "@/Contexts/AuthProvider/AuthProvider";

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItemsForServices.map(
    ({ icon, title, description, href }, key) => (
      <Link href={`/service/${href}`} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg lg:w-[250px] lg:h-[100px]">
          <div className="flex items-center justify-center rounded-lg bg-[#0088FF]/10 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-[#0088FF]/50 w-6",
            })}
          </div>
          <div className="hover:text-[#0088FF]">
            <Typography
              variant="h6"
              className="flex items-center text-sm font-bold "
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-semibold text-gray-800 text-[15px]"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
function NavListMenuProducts() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItemsForProducts.map(
    ({ icon, title, description, href }, key) => (
      <Link href={`/category/${href}`} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg lg:w-[250px] lg:h-[100px]">
          <div
            className={`flex items-center justify-center rounded-lg bg-[#0088FF]/10 p-2 `}
          >
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-[#0088FF]/50 w-6",
            })}
          </div>
          <div className="hover:text-[#0088FF]">
            <Typography
              variant="h6"
              className="flex items-center text-sm font-bold "
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-semibold text-gray-800 text-[15px]"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Products
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
function NavListMenuWeb() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItemsForWeb.map(
    ({ icon, title, description, href }, key) => (
      <Link href={`/hosting/${href}`} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg lg:w-[250px] lg:h-[100px]">
          <div className="flex items-center justify-center rounded-lg bg-[#0088FF]/10 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-[#0088FF]/50 w-6",
            })}
          </div>
          <div className="hover:text-[#0088FF]">
            <Typography
              variant="h6"
              className="flex items-center text-sm font-bold "
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-semibold text-gray-800 text-[15px]"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Web Hosting
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
function NavListMenuDM() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItemsForDM.map(
    ({ icon, title, description }, key) => (
      <Link href="/" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg lg:w-[250px] lg:h-[100px]">
          <div className="flex items-center justify-center rounded-lg bg-[#0088FF]/10 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-[#0088FF]/50 w-6",
            })}
          </div>
          <div className="hover:text-[#0088FF]">
            <Typography
              variant="h6"
              className="flex items-center text-sm font-bold "
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-semibold text-gray-800 text-[15px]"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Digital Marketing
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 font-semibold text-gray-800 text-[15px]">
          Home
        </ListItem>
      </Typography>
      <Link
        href="/about"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 font-semibold text-gray-800 text-[15px]">
          About
        </ListItem>
      </Link>
      <NavListMenu />
      <NavListMenuProducts />
      <NavListMenuWeb />
      <NavListMenuDM />
    </List>
  );
}

export function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [changeBgColor, setChangeBgColor] = React.useState(false);

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  // React.useEffect(() => {
  //   window.addEventListener(
  //     "resize",
  //     () => window.innerWidth >= 960 && setOpenNav(false)
  //   );
  // }, []);
  const handleOpenNav = () => {
    setOpenNav(!openNav);
    setChangeBgColor(!changeBgColor);
  };

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 960) {
        setChangeBgColor(false);
        setOpenNav(false);
      }
    }

    window.addEventListener("resize", handleResize);

    // Call handleResize on initial render
    handleResize();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section
      className={
        changeBgColor
          ? "w-full bg-white shadow-none py-4"
          : "w-full shadow-none py-4"
      }
    >
      <div className="flex items-center justify-between text-blue-gray-900 lg:w-[85%] mx-5 lg:mx-auto">
        <Link href="/">
          {" "}
          <Image src={logo} alt="logo" className="w-[225px] h-[54px]" />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          {user ? (
            <button
              onClick={handleLogOut}
              className="bg-[#0088FF] hover:bg-[#ecf6fe] transition duration-700 ease-in-out hover:text-[#0088FF]  border  border-[#0088FF] py-4 px-8 rounded text-white font-medium   flex gap-x-2"
            >
              <FaArrowRightToBracket className="h-4 w-4 mt-1" />{" "}
              <span className="text-sm"> LOGOUT</span>
            </button>
          ) : (
            <Link href="/user/login">
              <button className="bg-[#0088FF] hover:bg-[#ecf6fe] transition duration-700 ease-in-out hover:text-[#0088FF]  border  border-[#0088FF] py-4 px-8 rounded text-white font-medium   flex gap-x-2">
                <FaArrowRightToBracket className="h-4 w-4 mt-1" />{" "}
                <span className="text-sm">MY ACCOUNT</span>
              </button>
            </Link>
          )}
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={handleOpenNav}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <div style={{ position: "relative" }} className="lg:hidden">
        <Collapse open={openNav} className="z-50 absolute bg-white">
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden ml-2">
            {user ? (
              <button
                onClick={handleLogOut}
                className="bg-[#0088FF] hover:bg-[#ecf6fe] transition duration-700 ease-in-out hover:text-[#0088FF]  border  border-[#0088FF] py-4 px-8 rounded text-white font-medium   flex gap-x-2 mb-10"
              >
                <FaArrowRightToBracket className="h-4 w-4 mt-1" />{" "}
                <span className="text-sm">LOGOUT</span>
              </button>
            ) : (
              <Link href="/user/login">
                <button className="bg-[#0088FF] hover:bg-[#ecf6fe] transition duration-700 ease-in-out hover:text-[#0088FF]  border  border-[#0088FF] py-4 px-8 rounded text-white font-medium   flex gap-x-2 mb-10">
                  <FaArrowRightToBracket className="h-4 w-4 mt-1" />{" "}
                  <span className="text-sm">MY ACCOUNT</span>
                </button>
              </Link>
            )}
          </div>
        </Collapse>
        {/* Rest of your home page content */}
      </div>
    </section>
  );
}
