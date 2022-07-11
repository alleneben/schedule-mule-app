import { ReactNode } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import { Container, SimpleGrid,Text,Slide } from '@chakra-ui/react';
import { AiFillBank, AiFillCustomerService, AiOutlineBranches } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';



import SettingsHeader from "../components/SettingsHeader";



// Detail components has all the list detail we are rendring on the screen
class CompanyDetails {
    title: String;
    label: String;
    icon: ReactNode;
    path: String;

    constructor(title: String, label: String, icon: ReactNode, path: String) {
        this.title = title;
        this.label = label;
        this.icon = icon;
        this.path = path
    }
}

// Data array for populating on the screen
const data = [
    new CompanyDetails(
        "Company Profile",
        "Information about your company",
        <AiFillBank size={30}/>,
        "companuy"
    ),
    new CompanyDetails(
        "Users",
        "Users of the system",
        <FaUsers size={30}/>,
        "users"
    ),
    new CompanyDetails(
        "Customers",
        "Customers of your company",
        <AiFillCustomerService size={30}/>,
        "customers"
    ),
    new CompanyDetails(
        "Branches",
        "Branches of your company",
        <AiOutlineBranches size={30}/>,
        "branches"
    ),

]


// Our main setting screen..
// Rendering of the list we have  with some special components
const Settings: NextPage = () => {
    const listCards = data.map((data,key) =>
        <Card key={`settins-card-${key}`} title={data.title} label={data.label} icon={data.icon} path={data.path}/>
    );
    return (
        <Slide direction='right' in={true} style={{ zIndex: 10 }}>
            <SettingsHeader title={"Settings"}/>
            <SimpleGrid columns={[1, 3, 4]} spacing={'3'} marginStart={'5'} marginEnd={5} marginTop={10}>
                {listCards}
            </SimpleGrid>
        </Slide>
    )
}


export default Settings


// props for our card component
type CardProps = {
    title: any,
    label: any,
    icon: any,
    path: any
}



// Our card 
const Card = ({ title, label, icon, path }: CardProps) => {
    const router = useRouter()

    const navigate = (path: string): void => {
        router.push(`/containers/${path}`);
    }
    return (
        <Container 
            centerContent 
            justifyContent='center' 
            _hover={{ bg: '#ebedf0', borderRadius: 'sm' }} 
            h='52' 
            alignContent="center" 
            alignItems={"center"} 
            alignSelf="center" 
            cursor={"pointer"}
            onClick={() => navigate(path) }
        > 
                { icon }
                <Text mt='1' fontWeight='semibold' as='h4' textAlign='center'>
                    {title}
                </Text>
                <Text as='span' color='gray.600' fontSize='sm' textAlign='center'>
                    {label}
                </Text>
        </Container>
    );
}




