import React from 'react'
import {
    Box,
    Text,
    Heading
} from '@chakra-ui/react'

export default function InfoUser(props) {
    const { name, children, ...rest } = props;
    return (
        <Box
            p="15px"
            {...rest}
            fontFamily="PoppinsItalic"
        >
            <Text
                fontSize="sm"
            >
                {name}
            </Text>
            <Heading
                as="h3"
                fontSize="md"
                fontFamily="Normal"
            >
                {children}
            </Heading>
        </Box>
    )
}
