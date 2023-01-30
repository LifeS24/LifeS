import React from 'react'
import {
    Flex,
} from '@chakra-ui/react'
import LifesSection from '../../components/LifesSection';
import HomeRightSection from '../../components/HomeRightSection';

export default function Home() {
    return (
        <Flex
            w="100%"
            m="auto"
            align="center"
            justify="space-between"
        >
            <LifesSection />
            <HomeRightSection />
        </Flex>
    )
}
