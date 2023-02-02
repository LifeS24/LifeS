import React from 'react'
import {
    Icon,
    Heading,
    Text,
    Flex,
    Image,
} from '@chakra-ui/react'
import {
    LifeSLogoIcon,
    InstagramIcon,
    FacebookIcon,
    TwitterIcon,
} from '../icons/Icon';

import QrCode from '../assets/QrCode.png'
import BgImage from '../assets/bgImage.png'

export default function LifesSection(props) {
    const { icon, children, ...rest } = props;
    return (
        <Flex
            {...rest}
            w="50%"
            p="35px"
            h="85vh"
            spacing="20px"
            color="#ffffff"
            bgImage={BgImage}
            direction="column"
            bgPosition="center"
            borderRadius="14px"
            justify="space-around"
            boxShadow="-2px 3px 6px 4.5px rgba(0, 0, 0, 0.25)"
        >
            <Icon
                as={LifeSLogoIcon}
                mt="-80px"
                ml="-50px"
                mb="-90px"
                boxSize='192px'
            />
            <Heading
                w="100%"
                fontSize="17.5px"
                textAlign="center"
                fontFamily="Normal"
            >
                <span style={{ fontFamily: "Italic" }}>Technology</span>
                &nbsp;&nbsp;
                <span style={{ fontWeight: "700" }}>for a better life</span>
            </Heading>
            <Text
                fontSize="17px"
                fontWeight="500"
                textAlign="justify"
                fontFamily="Normal"
            >
                LifeS is a connected health companion that
                offers real-time monitoring and rapid care with
                a digital watch and e-health platform. It
                features secure medical data through QR code
                and NFC identification.
            </Text>
            <Flex
                align="flex-end"
                justify="space-between"
            >
                <Image src={QrCode} boxSize='200px' />
                <Flex
                    direction="column"
                    justify="space-between"
                >
                    <Icon as={InstagramIcon} boxSize='48px' p="10px" />
                    <Icon as={FacebookIcon} boxSize='48px' p="10px" />
                    <Icon as={TwitterIcon} boxSize='48px' p="10px" />
                </Flex>
            </Flex>
        </Flex>
    )
}
