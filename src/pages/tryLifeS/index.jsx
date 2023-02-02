import React from 'react'
import {
    Flex,
} from '@chakra-ui/react'

import TryLeftSection from '../../components/TryLeftSection';
import TryRightSection from '../../components/TryRightSection';

export default function TryLifeS() {
    return (
            <Flex
                w="100%"
                m="auto"
                justify="space-between"
            >
                <TryLeftSection />
                <TryRightSection />
            </Flex>
    )
}
