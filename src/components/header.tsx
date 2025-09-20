import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/react";
import { Icon } from '@iconify/react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  
  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <Navbar 
      maxWidth="xl" 
      isBordered={false}
      isBlurred
      className="bg-white/90 backdrop-blur-md shadow-md border-b border-default-100 sticky top-0 z-50"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-primary p-1.5 rounded-md">
              <Icon icon="lucide:book-open" width={20} height={20} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-lg serif-font tracking-wide">E.P.E.S</p>
              <p className="text-[10px] text-default-500 -mt-1 tracking-widest uppercase">Est. 2058 BS</p>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {navigationItems.map((item) => (
          <NavbarItem key={item.path} isActive={isActive(item.path)}>
            <Link 
              to={item.path}
              className={`text-sm ${isActive(item.path) 
                ? 'text-primary font-medium border-b-2 border-primary pb-1' 
                : 'text-default-600 hover:text-primary transition-colors'}`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button 
            as={Link} 
            to="/contact" 
            color="primary" 
            variant="solid" 
            size="sm"
            className="hidden sm:flex font-medium"
            startContent={<Icon icon="lucide:phone" width={14} />}
          >
            Get in Touch
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-6 bg-white/95 backdrop-blur-md">
        {navigationItems.map((item) => (
          <NavbarMenuItem key={item.path}>
            <Link 
              to={item.path}
              className={`w-full py-3 ${isActive(item.path) 
                ? 'text-primary font-medium' 
                : 'text-default-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="mt-4">
          <Button 
            as={Link} 
            to="/contact" 
            color="primary" 
            variant="solid" 
            size="sm"
            className="w-full"
            startContent={<Icon icon="lucide:phone" width={14} />}
            onClick={() => setIsMenuOpen(false)}
          >
            Get in Touch
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;