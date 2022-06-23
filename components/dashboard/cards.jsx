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

import { CalendarIcon, SettingsIcon } from '@chakra-ui/icons';
import { AiTwotoneMail } from 'react-icons/ai';
import { FaDollarSign } from 'react-icons/fa';

export const CardInfo = () => {
    return (
        <Flex justify={'space-evenly'} px={'3'} py="3">
            <VStack align="start">
                <Text fontSize={'sm'} fontWeight="bold">8:00am</Text>
                <Tag borderRadius={'1'}> <TagLabel fontSize={'10px'}>SCHEDULED</TagLabel> </Tag>
            </VStack>

            <Divider h={'60px'} orientation='vertical' mx='2' ml="2" />
            <VStack align={'start'}>
                <Heading size={'xs'} noOfLines={1}>Flat Rate Clean - 180/QA</Heading>
                <Text fontSize={'xs'}>Jennifer Pratt, 90 East Accra, Pothole Drive</Text>
            </VStack>
            <Avatar size={'sm'} />
        </Flex>
    )
};


export const CardLead = () => {
    return (
        <Box display={'flex'} flexDir={'column'} h={'xs'} borderRadius={'md'} boxShadow="md" justifyContent={'space-evenly'}>
            <Flex justify={'space-between'} px={'3'} py={'5'}>
                <HStack>
                    <CalendarIcon />
                    <Heading size="sm" pr='1'>
                        Upcoming Job
                    </Heading>
                </HStack>
                <SettingsIcon />
            </Flex>
            <Divider />
            <Text px={'3'} pt={'2'} fontSize={'sm'}>Fri Feb 08, 2019</Text>
            <CardInfo />
            <Divider w={'90%'} mx='3' />
            <CardInfo />
            <Text fontSize={'xs'} fontWeight="bold" align={'center'}>SEE ALL JOBS</Text>
        </Box>
    )
};

export const GearCard = () => {
    return (
        <Box display={'flex'} flexDir={'column'} h={'xs'} borderRadius={'md'} boxShadow="md" justifyContent={'space-evenly'}>
            <Flex px={'3'}>

                <FaDollarSign />
                <Heading size="sm" pr='1'>
                    Invoicing
                </Heading>

            </Flex>
            <Divider />
            <Flex justify={'space-evenly'} px={'3'} h="1">
                <Text fontSize={'sm'} fontWeight="bold">Due</Text>
                <Divider h={'100%'} orientation='vertical' mx='2' ml="2" bgColor={'white'} />
                <Text fontSize={'sm'} fontWeight="bold">Paid</Text>
            </Flex>
            <Divider w={'90%'} mx='3' />
            <HStack justify={'space-evenly'}>
                <VStack justify={'space-evenly'}>
                    <Text fontSize={'lg'} fontWeight="bold" align={'center'} color="red">$3,606</Text>
                    <Divider w={'90%'} mx='3' />

                    <Heading size={'xs'}>14</Heading>
                    <Text fontSize={'xs'} align="center">Invoices<br />currently due</Text>
                   
                </VStack>
                <Divider h={'100%'} orientation='vertical' mx='2' ml="2" />
                <VStack justify={'space-evenly'}>
                    <Text fontSize={'lg'} fontWeight="bold" align={'center'} color="red">$3,606</Text>
                    <Divider w={'90%'} mx='3' />

                    <Heading size={'xs'}>14</Heading>
                    <Text fontSize={'xs'} align="center">Invoices<br />currently due</Text>
         
                </VStack>
            </HStack>
            <Flex justify={'space-evenly'} px={'3'} h="1">
            <Text fontSize={'xs'} fontWeight="bold" align={'center'}>SEE REPORT</Text>
                <Divider h={'100%'} orientation='vertical' mx='2' ml="2" bgColor={'white'} />
                <Text fontSize={'xs'} fontWeight="bold" align={'center'}>SEE REPORT</Text>
            </Flex>
        </Box>
    )
}