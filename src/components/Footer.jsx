import React from 'react'
import {
    Flex,
    Icon,
    Text,
    Heading
} from '@chakra-ui/react'
import { LifeSLogoIcon } from '../icons/Icon';

export default function Footer() {
    return (
        <Flex
            zIndex="1"
            bg="#131D37"
            color="#ffffff"
            fontFamily="Normal"
            justify="space-between"
        >
            <Flex
                w="32%"
                direction="column"
                justify="space-around"
            >
                <Icon
                    as={LifeSLogoIcon}
                    ml="-17px"
                    mt="-30px"
                    mb="-50px"
                    boxSize='175px'
                />
                <Text
                    ml="30px"
                    mt="-25px"
                    fontSize="13px"
                >
                    LifeS is your digital health companion.
                </Text>
                <Text
                    mt="20px"
                    ml="30px"
                    mb="20px"
                    fontSize="11px"
                >
                    LifeS © 2023 Privacy Policy Terms of Use
                </Text>
            </Flex>
            <Flex
                w="23%"
                pt="27px"
                direction="column"
            >

                <Heading as='h5' size='md' pb="5px">
                    Featured
                </Heading>
                <Text
                    fontSize="13px"
                    cursor="pointer"
                >
                    TryLifes
                </Text>
                <Text
                    fontSize="13px"
                    cursor="pointer"
                >
                    LifeSFund
                </Text>
            </Flex>
            <Flex
                w="23%"
                pt="27px"
                direction="column"
            >
                <Heading as='h5' size='md' pb="5px">
                    Informations
                </Heading>
                <Text
                    fontSize="13px"
                    cursor="pointer"
                >
                    About Us
                </Text>
                <Text
                    fontSize="13px"
                    cursor="pointer"
                >
                    Security of datas
                </Text>
                <Text
                    fontSize="13px"
                    cursor="pointer"
                >
                    How it works
                </Text>
                <Text
                    fontSize="13px"
                    cursor="pointer"
                >
                    Careers
                </Text>
            </Flex>
            <Flex
                w="23%"
                pt="27px"
                direction="column"
            >
                <Heading as='h5' size='md' pb="5px">
                    Stay in touch
                </Heading>
                <Text
                    fontSize="13px"
                    cursor="pointer"
                >
                    Stay informed of upcoming features.
                </Text>
                <Text
                    fontSize="13px"
                    cursor="pointer"
                >
                    Security of datas
                </Text>
            </Flex>
        </Flex>
    )
}
