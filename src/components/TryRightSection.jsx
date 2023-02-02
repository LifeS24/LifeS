import React, { useContext } from 'react'
import {
    Box,
    Flex,
    Image,
    ButtonGroup,
} from '@chakra-ui/react'

import Form from './Form';
import Button from './Button';
import Homme from '../assets/homme2.png'
import { Context } from '../context/Context';

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function TryRightSection() {
    const { visible2, changeVisibility, changeVisibility2, changeQrCode } = useContext(Context)

    const schema = yup.object().shape({
        fullName: yup.string().required("Field required"),
        civility: yup.string().required("Field required"),
        medicalIssues: yup.string().required("Field required"),
        allergyAndReactions: yup.string(),
        bloodTypes: yup.string().required("Field required"),
        weight: yup.number("Shoud be a positive value").required("Field required").min(3, "Weight shoud be between 2 and 250 KG").max(250, "Weight shoud be between 2 and 250"),
        height: yup.number("Shoud be a positive value").required("Field required").min(0.5, "Height shoud be between 0.5 and 2.5 meters").max(2.5, "Height shoud be between 0.5 and 2.5 meters").required("Field required"),
    });

    const tryLifes = () => {
        changeVisibility(false);
        changeVisibility2(false);
    }

    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, formState: { errors }, reset } = useForm(
        {
            resolver: yupResolver(schema),
        }
    );

    const onSave = data => {
        console.log(data);
        changeQrCode(JSON.stringify(data));
        changeVisibility2(true);
        //reset();
    }

    return (
        <Flex
            w="35%"
            pt="20px"
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
            {visible2 &&
                <>
                    <Image
                        w="100%"
                        src={Homme}
                    />
                </>
            }
            {!visible2 &&
                <Form
                    errors={errors}
                    register={register}
                    onSubmit={handleSubmit(onSave)}
                />
            }
        </Flex>

    )
}
