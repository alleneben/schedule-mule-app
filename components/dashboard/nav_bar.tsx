import { ReactNode } from 'react';
import NextLink from 'next/link'
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon, SettingsIcon } from '@chakra-ui/icons';
import {  AiFillDashboard, AiFillSchedule } from 'react-icons/ai';
import { FaRegMoneyBillAlt, FaUserAlt } from 'react-icons/fa';
import { motion } from 'framer-motion'

const Links = [
    {
        label: 'Dashboard',
        icon: <AiFillDashboard fontSize={'1.4rem'} />,
        path: '/settings'
    },
    {
        label: 'Schedule',
        icon: <AiFillSchedule fontSize={'1.4rem'} />,
        path: '/settings'
    },
    {
        label: 'Customer',
        icon: <FaUserAlt fontSize={'1.4rem'} />,
        path: '/settings'

    },
    {
        label: 'My Money',
        icon: <FaRegMoneyBillAlt fontSize={'1.4rem'} />,
        path: '/settings'
    },
    {

        label: 'Settings',
        icon: <SettingsIcon fontSize={'1.4rem'} />,
        path: '/settings'
    },
];


const NavLink = ({ children , href}: { children: ReactNode, href: string }) => (
    <Link
        as={motion.div}
        px={2}
        py={1}
        color={useColorModeValue('white', 'gray.700')}
        fontSize="xs"
        display={'flex'}
        flexDir="column"
        alignItems={'center'}
        _hover={{
            textDecoration: 'none',
        }}

        whileHover={{
            scale: 1.1,
            borderBottom: '1px solid white',

        }}>
        {children}
    </Link>
);

function NavBar(isOpen: boolean, onClose: () => void, onOpen: () => void) {
    return <Box bg={useColorModeValue('primary', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={isOpen ? onClose : onOpen} />
            <HStack spacing={8} alignItems={'center'}>

                <HStack
                    as={'nav'}

                    spacing={4}
                    display={{ base: 'none', md: 'flex' }}>
                    {Links.map((link, key) => (
                        <NextLink key={`link-${key}`} href={link.path} passHref>
                            <Link
                                as={motion.div}
                                px={2}
                                py={1}
                                fontSize="xs"
                                display={'flex'}
                                flexDir="column"
                                alignItems={'center'}
                                _hover={{
                                    textDecoration: 'none',
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    borderBottom: '1px solid white',

                                }}>
                                <Box display={'block'}>{link.icon}</Box>
                                {link.label}
                            </Link>
                        </NextLink>
                    ))}
                </HStack>
            </HStack>
            <Flex alignItems={'center'}>
                <Button
                    variant={'solid'}
                    colorScheme={'blue'}
                    size={'sm'}
                    borderRadius={'sm'}
                    mr={4}
                    display={{ base: 'none', md: 'flex' }}
                    leftIcon={<AddIcon />}>
                    New
                </Button>
                <Button
                    variant={'solid'}
                    colorScheme={'red'}
                    borderRadius={'sm'}
                    size={'sm'}
                    mr={4}
                    display={{ base: 'none', md: 'flex' }}
                >
                    HCP LOG OUT
                </Button>
                {/* <Avatar
                    size={'sm'}
                    src={'../public/employees.png'} /> */}
            </Flex>
        </Flex>

        {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
                <Stack as={'nav'} spacing={4}>
                    {Links.map((link) => (
                        <NavLink key={link.label} href={link.path}>
                            {link.label}
                        </NavLink>
                    ))}
                </Stack>
            </Box>
        ) : null}
    </Box>;
}



export default NavBar