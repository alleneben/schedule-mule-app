import { ReactNode } from 'react';
import {
    Box,
    useDisclosure,

} from '@chakra-ui/react';

import NavBar from '../components/dashboard/nav_bar';


export default function Dashboard() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            {NavBar(isOpen, onClose, onOpen)}
            <Box p={4}>Main Content Here</Box>
        </>
    );
}


