
import { useState, useEffect } from 'react';
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
    Select,
    useToast
 } from '@chakra-ui/react';

import { DataTable, LoadingSpinner } from "../../";


const initConfig={
    name:'Users',
    header: ['Firstname', 'Lastname','Email',],
    fieldnames:[{name:'firstname',format:'t'},{name:'lastname',format:'t'},{name:'email',format:'t'}],
    actions:[{function:'view',path:'/app/dashboard/case/thread'},{function:'view',path:'/app/dashboard/case/thread'}]
}


interface UserData {
    firstname: string
    lastname: string
    email: string
    password: string
    branchId: string
    departmentId: string
    roleId: string
}


const Users: NextPage = () => {
    const [isSubmitting, setIsSubmitting] = useState<Boolean>(false)
    const [message, setMessage] = useState<String>('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [user, setUser] = useState<UserData>({firstname:'', lastname: '', email:'', password:'', branchId:'', departmentId:'', roleId:''})
    const [data, setData] = useState([])
    const toast = useToast()

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        try {
            setIsSubmitting(true)
            let response:any = await fetch('http://localhost:3000/api/read')
            response = await response.json()
            setData(response.data)
            setIsSubmitting(false)
        } catch (error) {
            setIsSubmitting(false)
            toast({
                title: 'Error',
                description: "Some went wrong",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
    }
    const save = async () => {
        let key: keyof typeof user;
        for(key in user){
            if(user[key] === ''){
                toast({
                    title: 'Form Error',
                    description: `${key} is required`,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
                return
            }
        }
        try {
            setIsSubmitting(true)
            let response = await fetch('http://localhost:3000/api/create', { 
                method: 'POST', 
                body: JSON.stringify(user), 
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            response = await response.json()
            setUser({firstname:'', lastname: '', email:'', password:'', branchId:'', departmentId:'', roleId:''})
            setIsSubmitting(false)
            onClose()
            fetchData()
            toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
              console.log(response)
        } catch (error) {
            setIsSubmitting(false)
            toast({
                title: 'Error',
                description: "Some went wrong",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }

    }

    const onChange = (e: any) => {
        setUser({ ...user, [e.target.name]: e.target.value})
    }

    return (
        <Container maxW='container.2xl'>
            <Button colorScheme='blue' marginBottom={5} onClick={onOpen}>Create</Button>
            { data ? <DataTable config={initConfig} data={ data } /> : <h2>{ message }</h2> }
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
                            <Input placeholder='First name' name='firstname'  onChange={onChange}/>
                        </FormControl>
                        { isSubmitting && <LoadingSpinner width={80} height={80}/>}
                        <FormControl mt={4}>
                            <FormLabel>Last name</FormLabel>
                            <Input placeholder='Last name' name='lastname'  onChange={onChange}/>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='Email' name='email' onChange={onChange}/>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Password</FormLabel>
                            <Input type={'password'} placeholder='Password' name='password'  onChange={onChange}/>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Confirm Password</FormLabel>
                            <Input type={'cpassword'} placeholder='Confirm Password' name='cpassword'  onChange={onChange}/>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Branch</FormLabel>
                            <Select placeholder='Select option' name='branchId'  onChange={onChange}>
                                <option value='1'>Accra</option>
                                <option value='2'>Kumasi</option>
                                <option value='3'>Takoradi</option>
                            </Select>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Department</FormLabel>
                            <Select placeholder='Select option' name='departmentId'  onChange={onChange}>
                                <option value='2'>Customer Service</option>
                                <option value='3'>Sales</option>
                                <option value='4'>Operations</option>
                            </Select>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Role</FormLabel>
                            <Select placeholder='Select option' name='roleId'  onChange={onChange}>
                                <option value='2'>Customer Service</option>
                                <option value='3'>Sales</option>
                                <option value='4'>Operations</option>
                            </Select>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} display="flex" onClick={() => save()}>
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