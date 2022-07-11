import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import {  SimpleGrid,Slide } from '@chakra-ui/react';


// custom imports
import { Users } from '../../components/containers';
import SettingsHeader from "../../components/SettingsHeader";



// Our main setting screen..
// Rendering of the list we have  with some special components
const AppContainer: NextPage = () => {

    const router = useRouter()

    const { query } = router;

    const renderPage = (pageId: any) => {
        const pages: any = {
            users: <Users />,
            customers: <h1>customers</h1>,
        }

        return pages[pageId];
    }
    return (
        <Slide direction='right' in={true} style={{ zIndex: 10 }}>
            <SettingsHeader title= {query.pageId}/>
            <SimpleGrid columns={[1, 3, 4]} spacing={'3'} marginStart={'5'} marginEnd={5} marginTop={10}>
                { renderPage(query?.pageId) }
            </SimpleGrid>
        </Slide>
    )
}


export default AppContainer


