import React, { useContext } from 'react'
import {
    Box,
    Flex,
    Icon,
    Text,
    Image,
    Heading,
} from '@chakra-ui/react'

import QRcode from 'qrcode.react'

import InfoUser from './InfoUser';
import QrCode from '../assets/QrCode.png'
import { CaptureIcon } from '../icons/Icon';
import { Context } from '../context/Context';
import LogoImage from '../assets/logoImage.png'

export default function TryLeftSection() {
    const { qr, visible2, changeVisibility } = useContext(Context)

    const downloadQR = () => {
        const canvas = document.getElementById("myqr");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "myqr.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <Flex
            w="70%"
            pl="15px"
            pt="25px"
            minH="100vh"
            color="#FFF"
            align="center"
            direction="column"
            justify="space-between"
            bg="linear-gradient(to bottom right, #141D37 0%, #141D37 50%, #FFF 50%, #FFF 100%)"
        >
            <Flex
                w="85%"
                justify="space-between"
            >
                <Image
                    w="15%"
                    h="48px"
                    mt="-14px"
                    src={LogoImage}
                />
                <Flex
                    justify="space-between"
                >
                    <Heading
                        as="h3"
                        px="15px"
                        size="md"
                        cursor="pointer"
                        fontFamily="Italic"
                        onClick={() => { changeVisibility(true) }}
                    >
                        Home
                    </Heading>
                    <Heading
                        as="h3"
                        px="15px"
                        size="md"
                        cursor="no-drop"
                        fontFamily="Italic"
                        textDecor={!visible2 ? "underline" : "auto"}
                    >
                        TryLifeS
                    </Heading>
                </Flex>
            </Flex>
            <Flex
                mt="-2px"
                direction="column"
                justify="space-around"
            >
                <Flex
                    align='center'
                    bgColor="#236E8B"
                    borderRadius="10px"
                    justify="space-between"
                >
                    <Box
                        p="35px"
                    >
                        {(qr && visible2) ?
                            <>
                                <QRcode
                                    id="myqr"
                                    size={260}
                                    value={qr}
                                    includeMargin={true}
                                />
                                <Box
                                    p="3px"
                                    bg="#fff"
                                    mt="10px"
                                    size={260}
                                    color="#000"
                                    cursor="pointer"
                                    borderRadius="5px"
                                    fontFamily="Normal"
                                    onClick={downloadQR}
                                    title="Click here to download the QrCode!"
                                >
                                    📥📥<span
                                        style={{
                                            fontWeight: "bold",
                                        }}
                                    >&nbsp;&nbsp;ID:</span> XY001_{JSON.parse(qr)?.fullName}
                                </Box>
                            </>
                            :
                            <Image
                                w='325px'
                                h='325px'
                                src={QrCode}
                            />
                        }
                    </Box>
                    {visible2 &&
                        <Box
                            pr="50px"
                        >
                            <Flex>
                                <InfoUser
                                    name="Name"
                                >
                                    {JSON.parse(qr)?.fullName}
                                </InfoUser>
                                <InfoUser
                                    name="Civility"
                                >
                                    {JSON.parse(qr)?.civility}
                                </InfoUser>
                            </Flex>
                            <InfoUser
                                name="Medical issues"
                            >
                                {JSON.parse(qr)?.medicalIssues}
                            </InfoUser>
                            <InfoUser
                                name="Allergy and reactions"
                            >
                                {JSON.parse(qr)?.allergyAndReactions}
                            </InfoUser>
                            <Flex>
                                <InfoUser
                                    name="Blood-type"
                                >
                                    {JSON.parse(qr)?.bloodTypes}
                                </InfoUser>
                                <InfoUser
                                    name="Weight"
                                >
                                    {JSON.parse(qr)?.weight}&nbsp;KG
                                </InfoUser>
                                <InfoUser
                                    name="Height"
                                >
                                    {JSON.parse(qr)?.height}&nbsp;m
                                </InfoUser>
                            </Flex>
                        </Box>
                    }
                </Flex>
                <Flex
                    mt="50px"
                    bg="#1E1E1E"
                    align="center"
                    w="fit-content"
                    borderRadius="10px"
                >
                    <Icon
                        py="5px"
                        boxSize='40px'
                        as={CaptureIcon}
                    />
                    <Text
                        p="15px"
                        fontWeight="bold"
                        fontFamily="Normal"
                    >
                        ABOUT MY DATAS
                    </Text>
                </Flex>
            </Flex>
            <Box></Box>
        </Flex>
    )
}
