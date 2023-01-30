import React from 'react'
import {
    Box,
    //Stack,
    //Icon,
    //Heading,
    Text,
    //Flex,
    //Image,
} from '@chakra-ui/react'

export default function Button(props) {
    const { children, ...rest } = props;
    return (
        <Box
            h="40px"
            w="120px"
            {...rest}
            display="flex"
            cursor="pointer"
            borderRadius="20px"
            alignItems="center"
            justifyContent="center"
            fontFamily="PoppinsNormal"
        >
            <Text
                fontSize="15px"
                fontWeight="extrabold"
            >
                {children}
            </Text>
        </Box>
    )
}
