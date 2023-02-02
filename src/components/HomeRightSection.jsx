import React, { useContext } from 'react'
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
import { Context } from '../context/Context';
import LifeSLogo from '../assets/logoLifeS.png';
import HealthMonitoring from '../assets/healthM.png'

export default function HomeRightSection() {
    const { changeVisibility, changeVisibility2 } = useContext(Context)
    const tryLifes = () => {
        changeVisibility(false);
        changeVisibility2(false);
    }

    return (
        <Flex
            w="50%"
            pt="8vh"
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
                        onClick={() => tryLifes()}
                    //_hover={{ bg: "#085FCE", color: "#fff", }}
                    >
                        Try it now
                    </Button>
                    <Button
                        bg="#0B49A0"
                        color="#fff"
                        border="2px solid #0B49A0"
                        _hover={{ bg: "#fff", color: "#0B49A0", }}
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
                    onClick={() => tryLifes()}
                    _hover={{ bg: "#fff", color: "#0B49A0", }}
                >
                    Try it now
                </Button>
            </Box>
            <Box>
                <Flex>
                    <Image
                        w="100%"
                        ml="-10px"
                        src={Femme}

                    />
                    <Image
                        w="100%"
                        ml="-90px"
                        src={Homme}
                    />
                </Flex>
            </Box>
        </Flex>
    )
}
