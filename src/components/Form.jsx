import React from 'react'
import {
    Box,
    Flex,
    Stack,
    Button,
    ButtonGroup,
} from '@chakra-ui/react'

import { InputField } from "./InputField"
import { SelectField } from "./SelectField"

export default function Form({ register, errors, onSubmit }) {
    const Civilities = [
        {
            key: "Mr",
            value: "Mr"
        },
        {
            key: "Mrs",
            value: "Mrs"
        },
    ]
    const BloodTypes = [
        {
            key: "O+",
            value: "O+"
        },
        {
            key: "A+",
            value: "A+"
        },
        {
            key: "B+",
            value: "B+"
        },
        {
            key: "AB+",
            value: "AB+"
        },
        {
            key: "O-",
            value: "O-"
        },
        {
            key: "A-",
            value: "A-"
        },
        {
            key: "B-",
            value: "B-"
        },
        {
            key: "AB-",
            value: "AB-"
        },
    ]

    return (
        <Box
            w="100%"
            mr="25px"
            mt="30px"
            pb="75px"
            ml="-50px"
        >
            <form
                onSubmit={onSubmit}
            >
                <Stack spacing="8">
                    <Flex>
                        <InputField label="FullName" placeholder="ex: Mamadou Ndiaye" type="text" name="fullName" reference={register} errors={errors.fullName} />
                        <SelectField label="Civility" placeholder="ex: Mr" liste={Civilities} name="civility" reference={register} errors={errors.civility} />
                    </Flex>
                    <InputField label="Medical issues" placeholder="ex: Asthma" type="text" name="medicalIssues" reference={register} errors={errors.medicalIssues} />
                    <InputField label="Allergy and reactions" placeholder="ex: Peanut" type="text" name="allergyAndReactions" reference={register} errors={errors.allergyAndReactions} />
                    <SelectField label="blood-type" placeholder="ex: O+" liste={BloodTypes} name="bloodTypes" reference={register} errors={errors.bloodTypes} />
                    <Flex>
                        <InputField label="Weight" placeholder="ex: 75" type="text" name="weight" reference={register} errors={errors.weight} />
                        <InputField label="Heihgt" placeholder="ex: 1.85" type="text" name="height" reference={register} errors={errors.height} />
                    </Flex>
                </Stack>
                <ButtonGroup
                    pt="30px"
                    display="flex"
                    justifyContent="flex-end"
                >
                    <Button
                        h="40px"
                        w="120px"
                        bg="#0B49A0"
                        color="#fff"
                        type="submit"
                        borderRadius="20px"
                        border="2px solid #0B49A0"
                        fontFamily="PoppinsNormal"
                        _hover={{ bg: "#0B49A0", color: "#fff", }}
                    >
                        Let's go
                    </Button>
                </ButtonGroup>
            </form>
        </Box>
    )
}
