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

import { CardInfo, CardLead, GearCard } from '../components/dashboard/cards';
import { CalendarIcon, SettingsIcon } from '@chakra-ui/icons';



export default function Dashboard() {
    const { isOpen, onOpen, onClose } = useDisclosure();


    return (
        <>
            {NavBar(isOpen, onClose, onOpen)}
            <Box p={4} w="100%" >
                <SimpleGrid w={'100%'} columns={[1, 2,2, 4]} spacing={'3'}>
                    <CardLead />
                    <CardLead />
                    <GearCard />
                    <GearCard />
                    <TodaysCard />
                </SimpleGrid>
         
            </Box>
        </>
    );
}




const TodaysCard = () => {
    return (
        <Box display={'flex'} flexDir={'column'} h={'22rem'}  borderRadius={'md'} boxShadow="md" >
            <Flex justify={'space-between'} px={'3'} py={'5'}>
                <HStack>
                    <CalendarIcon />
                    <Heading size="sm" pr='1'>
                        Today
                    </Heading>
                </HStack>
                <Text fontSize={'sm'}>Fri Feb 08, 2019</Text>
            </Flex>
            <Divider />
            < TodayCardInfo />
            < TodayCardInfo />
            < TodayCardInfo />
            < TodayCardInfo bg='white' />
            < TodayCardInfo hasDivider={false} bg='white' />
        </Box>
    );
}
const TodayCardInfo = ({ hasDivider = true, bg = 'red.50' }) => {
    return (
        <Box bg={bg}>
            <HStack px={'3'} py={'5'} justify={'space-between'} h='12' >
                <Heading size="sm" pr='1'>
                    Earned
                </Heading>
                <Text fontSize={'sm'} fontWeight="bold">$345</Text>
            </HStack>
            {hasDivider && <Divider height={1} />}
        </Box>
    )
}