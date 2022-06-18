import { Container, SimpleGrid, Box, Text, Center, Fade, ScaleFade, Slide } from '@chakra-ui/react';
import type { NextPage } from 'next'
import SettingsHeader from "../components/SettingsHeader";
import Image from 'next/image'
import profilePic from '../public/companyprofile.png'
import employees from '../public/employees.png';
import price from '../public/price.png';
import priceTag from '../public/pricetag.png';
import message from "../public/message.png";
import service from "../public/service.png";
import hour from "../public/hour.png";
import tag from "../public/tag.png";
import bill from '../public/bill.png';
import payout from '../public/payout.png';
import referrals from '../public/referrals.png';


// Detail components has all the list detail we are rendring on the screen
class CompanyDetails {
    title: String;
    label: String;
    image: any;
    constructor(title: String, label: String, image: any) {
        this.title = title;
        this.label = label;
        this.image = image;
    }
}

const data = [
    new CompanyDetails(
        "Company Profile",
        "Update Information about your company",
        profilePic,
    ),
    new CompanyDetails(
        "Employees",
        "Employees roles and permissions",
        employees,
    ),
    new CompanyDetails(
        "My price list",
        "Category, name and descripttion of your services",
        price,
    ),
    new CompanyDetails(
        "House Call app Price",
        "A common set of flat rate services for online and booking",
        priceTag,
    ),
    new CompanyDetails(
        "Text messages",
        "Set up custom numbers and personalize your text",
        message,
    ),
    new CompanyDetails(
        "Service area",
        "Geographical area you serve",
        service,
    ),
    new CompanyDetails(
        "Business Hour",
        "Hours of operation and time slots",
        hour,
    ),
    new CompanyDetails(
        "Tags",
        "Tags you use through out the system",
        tag,
    ),
    new CompanyDetails(
        "Billing",
        "HouseCall pro billing plan and monthly charges",
        bill,
    ),
    new CompanyDetails(
        "Payouts",
        "Credit card payments you process will deposit to this account",
        payout,
    ),
    new CompanyDetails(
        "Referrals",
        "We run on refraals tool",
        referrals,
    ),

]


// Our main setting screen..
// Rendering of the list we have  with some special components
const Settings: NextPage = () => {
    const listCards = data.map((data) =>
        <Card key={data.toString()} title={data.title} label={data.label} image={data.image} />
    );
    return (
        <Slide direction='right' in={true} style={{ zIndex: 10 }}>
            <SettingsHeader />
            <SimpleGrid columns={[1, 3, 4]} spacing={'3'} marginStart={'5'} marginEnd={5}>
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
    image: any,

}



// Our card 
const Card = ({ title, label, image, }: CardProps) => {
    return (
        <Container centerContent justifyContent='center' _hover={{ bg: '#ebedf0', borderRadius: 'sm' }} h='52' alignContent="center" alignItems={"center"} alignSelf="center">
            <Image
                src={image}
                alt="Picture of the author"
                width={130}
                height={80} />
            <Text mt='1' fontWeight='semibold' as='h4' textAlign='center'>
                {title}
            </Text>
            <Text as='span' color='gray.600' fontSize='sm' textAlign='center'>
                {label}
            </Text>
        </Container>
    );
}




