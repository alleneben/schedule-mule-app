
import type { NextPage } from 'next';

import {
    Container,
    Table,
    TableContainer,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td
} from '@chakra-ui/react';




const Users: NextPage = () => {


    return (
        <Container width={'100vw'}>
            <button>Create Button</button>
            <TableContainer>
                <Table size='sm'>
                    <Thead>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td isNumeric>0.91444</Td>
                    </Tr>
                    </Tbody>
                    <Tfoot>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </Container>
    )

}

export default Users;