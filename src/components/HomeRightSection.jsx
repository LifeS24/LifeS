import React from 'react'
import {
    Box,
    Text,
    Flex,
    Image,
    ButtonGroup,
} from '@chakra-ui/react'
import Button from './Button';
import Homme from '../assets/homme.png'
import Femme from '../assets/femme.png'
import LifeSLogo from '../assets/logoLifeS.png';
import HealthMonitoring from '../assets/healthM.png'

export default function HomeRightSection() {
    return (
        <Flex
            w="50%"
            h="100vh"
            pt="30px"
            direction="column"
            justify="space-between"
        >
            <Box>
                <ButtonGroup
                    pr="20px"
                    spacing={2}
                    display="flex"
                    justifyContent="flex-end"
                >
                    <Button
                        color="#085FCE"
                        border="2px solid #085FCE"
                    >
                        Try it now
                    </Button>
                    <Button
                        bg="#0B49A0"
                        color="#fff"
                        border="2px solid #0B49A0"
                    >
                        Contacts
                    </Button>
                </ButtonGroup>
            </Box>
            <Flex
                px="35px"
                align="baseline"
            >
                <Image src={LifeSLogo} w='120px' h="70px" />
                <Image src={HealthMonitoring} w='200px' h="45px" />
            </Flex>
            <Box
                px="45px"
            >
                <Text
                    py="15px"
                    fontSize="17px"
                    fontFamily="Normal"
                >
                    We work to make life easier.
                </Text>
                <Button
                    bg="#0B49A0"
                    color="#fff"
                    border="2px solid #0B49A0"
                >
                    Try it now
                </Button>
            </Box>
            <Box>
                <Flex>
                    <Image
                        w="100%"
                        ml="-10px"
                        zIndex="1"
                        src={Femme}

                    />
                    <Image
                        w="100%"
                        ml="-90px"
                        zIndex="2"
                        src={Homme}
                    />
                </Flex>
            </Box>
        </Flex>
    )
}
