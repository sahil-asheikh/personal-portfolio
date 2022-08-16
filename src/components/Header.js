import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton, useDisclosure } from '@chakra-ui/react';
import { Text, Flex, Box, Stack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ themeToggler, theme, toContact }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const currentUrl = window.location.href;
  const pageName = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);

  return (
    <>
      <Box
        px={3}
        overflow="hidden"
        background-color="#333"
        position="fixed"
        top={0}
        width="100%"
        // bg={theme === 'light' ? '#F2F2F2' : '#0B0F13'}
        opacity={0.9}
      >
        <Flex
          as="nav"
          align="center"
          // justify="space-between"
          wrap="wrap"
          paddingY={3}
          fontFamily={'Montserrat'}
          overflow={'hidden'}
          mx={{ base: 1, md: 6 }}
          top={0}
        >
          <Flex align="center" mr={5}>
            <Link to={'/'}>
              <Text fontSize={'2xl'} fontWeight={'bold'}>
                Sahil Sheikh
              </Text>
            </Link>
          </Flex>

          <Box
            display={{ base: 'block', md: 'none' }}
            onClick={handleToggle}
            mx={3}
            ms={'auto'}
          >
            <HamburgerIcon />
          </Box>

          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            mt={{ base: 4, md: 0 }}
            textAlign={'center'}
            ms={'auto'}
          >
            <Text
              fontWeight={'semibold'}
              px={3}
              _hover={{ color: '#27AE60' }}
              color={pageName === 'Work' ? '#27AE60' : ''}
            >
              <Link to={'/Work'}>Work</Link>
            </Text>
            <Text
              fontWeight={'semibold'}
              px={3}
              _hover={{ color: '#27AE60' }}
              color={pageName === 'About' ? '#27AE60' : ''}
            >
              <Link to={'/About'}>About</Link>
            </Text>
            <Text
              fontWeight={'semibold'}
              px={3}
              _hover={{ color: '#27AE60' }}
              color={pageName === 'Contact' ? '#27AE60' : ''}
            >
              {/* <Link to={'/Contact'}>Contact</Link> */}
              <a
                href="/"
                onClick={e => {
                  e.preventDefault();
                  toContact &&
                    toContact.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                }}
              >
                Contact
              </a>
            </Text>
          </Stack>
          <IconButton
            onClick={themeToggler}
            bg={'transparent'}
            _hover={'none'}
            _active={'none'}
          >
            {theme === 'light' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#0B0F13"
                stroke="#0B0F13"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#F2F2F2"
                stroke="#F2F2F2"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </IconButton>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
