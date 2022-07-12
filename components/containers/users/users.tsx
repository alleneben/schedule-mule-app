
import { useState } from 'react';
import type { NextPage } from 'next';
import { 
    Container, 
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
    Select
 } from '@chakra-ui/react';
 import useSWR from "swr";

import { DataTable, LoadingSpinner } from "../../";


const initConfig={
    name:'Users',
    header: ['Email', 'Role','Email',],
    fieldnames:[{name:'email',format:'t'},{name:'role',format:'t'}],
    actions:[{function:'view',path:'/app/dashboard/case/thread'},{function:'view',path:'/app/dashboard/case/thread'}]
}
const fetcher = (url: string) => fetch(url,{ method: 'post', body: JSON.stringify({anem: 'allen'})}).then((res) => res.json());

const Users: NextPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [message, setMessage] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { data, mutate, error } = useSWR(
        "http://localhost:3000/api/hello",
        fetcher
      );
        console.log(data)

    const save = () => {
        mutate()

        setTimeout(()=>{
            
            onClose()
        },5000)
    }
    return (
        <Container maxW='container.2xl'>
            <Button colorScheme='blue' marginBottom={5} onClick={onOpen}>Create</Button>
            {/* { data ? <DataTable config={initConfig} data={ data } /> : <h2>{ message }</h2> } */}
            {/* { isSubmitting && <LoadingSpinner width={80} height={80}/>} */}
            
            <Modal
                isOpen={isOpen}
                onClose={() => null}
                size={"xl"}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create a user account</ModalHeader>
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>First name</FormLabel>
                            <Input placeholder='First name' />
                        </FormControl>
                        { isSubmitting && <LoadingSpinner width={80} height={80}/>}
                        <FormControl mt={4}>
                            <FormLabel>Last name</FormLabel>
                            <Input placeholder='Last name' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='Email' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Password</FormLabel>
                            <Input type={'password'} placeholder='Password' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Confirm Password</FormLabel>
                            <Input type={'cpassword'} placeholder='Confirm Password' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Branch</FormLabel>
                            <Select placeholder='Select option'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Department</FormLabel>
                            <Select placeholder='Select option'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} display="flex" onClick={save}>
                             Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Container>
    )

}

export default Users;