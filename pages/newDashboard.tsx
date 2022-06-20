import { ReactNode } from 'react';
import {
    Box,
    Flex,
    useDisclosure,
    Text,
    Heading,
    HStack,
    Divider,
    VStack,
    Button,
    Tag,
    TagLabel,
    Center,
    Avatar,
    SimpleGrid

} from '@chakra-ui/react';

import NavBar from '../components/dashboard/nav_bar';

import {CardLead, GearCard } from  '../components/dashboard/cards';



export default function Dashboard() {
    const { isOpen, onOpen, onClose } = useDisclosure();


    return (
        <>
            {NavBar(isOpen, onClose, onOpen)}
            <Box p={4} w="100%" >



                <SimpleGrid w={'100%'} columns={[1, 2, 4]} spacing={'3'}>
                    <CardLead />
                    <CardLead />
                    <GearCard />
                    <GearCard />
                    <CardLead />
               
                </SimpleGrid>
            </Box>
        </>
    );
}




