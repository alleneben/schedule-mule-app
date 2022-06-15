import { Text, Box, Button, chakra, CloseButton, Flex, Heading, HStack, Icon, IconButton, Link, useColorMode, useColorModeValue, useDisclosure, VStack } from '@chakra-ui/react'
import { useViewportScroll } from 'framer-motion';
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';

const SettingsHeader = () => {
    const mobileNav = useDisclosure();
    const { toggleColorMode: toggleMode } = useColorMode();
    const text = useColorModeValue("dark", "light");
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);
    const bg = useColorModeValue("primary", "gray.800");
    const ref = React.useRef(null);
    const [y, setY] = React.useState(0);
    const height = ref.current ? ref.current.getBoundingClientRect() : 0;
    const { scrollY } = useViewportScroll();
    React.useEffect(() => {
        return scrollY.onChange(() => setY(scrollY.get()));
    }, [scrollY]);


    return (
        <Box pos="relative">
            <chakra.header
                ref={ref}
                shadow={y > height ? "sm" : undefined}
                transition="box-shadow 0.2s"
                bg={bg}
                borderTop="6px solid"
                borderTopColor="#CBD5E0"
                w="full"
                overflowY="hidden"
            >
                <chakra.div h="4rem" mx="auto" maxW="1200px">
                    <Flex w="full" h="full" px="6" align="center" justify="space-between">
                        <Flex align="center">
                            <Link href="/">
                                <HStack>
                                    <Text fontSize='xl' color="white">Settings</Text>
                                    {/* <Logo /> */}
                                </HStack>
                            </Link>
                        </Flex>

                        <Flex
                            justify="flex-end"
                            w="full"
                            maxW="824px"
                            align="center"
                            color="gray.400"
                        >


                            <IconButton
                                size="md"
                                fontSize="lg"
                                aria-label={`Switch to ${text} mode`}
                                variant="ghost"
                                color="current"
                                ml={{
                                    base: "0",
                                    md: "3",
                                }}
                                onClick={toggleMode}
                                icon={<SwitchIcon />}
                            />
                            < HideButton bg={bg} />

                        </Flex>
                    </Flex>

                </chakra.div>
            </chakra.header>
        </Box>
    );
};

const HideButton = ({ bg }) => {
    return (
        <Box

            alignItems="center"
            as="a"
            aria-label="Sponsor Choc UI on Open Collective"
            target="_blank"
            rel="noopener noreferrer"
            // borderWidth="1px"
            borderLeftColor="grey.400"
            borderLeftWidth='1px'

            borderColor={'whiteAlpha.300'}

            px="1em"
            minH="36px"

            fontSize="sm"
            color="grey.50"

            transition="all 0.3s"
            ml={5}
        >
            <CloseButton
                aria-label="Close menu"
                justifySelf="self-start"

            />
        </Box>
    );
}

export default SettingsHeader

