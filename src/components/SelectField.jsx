import { FormErrorMessage, Select, FormControl, FormLabel, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

export const SelectField = React.forwardRef((props, ref) => {
    const { liste, label, errors, reference, name, ...rest } = props

    return (
        <FormControl position="relative" isInvalid={errors}>
            <FormLabel
                _focus={{
                    color: "#085FCE",
                }}
                fontWeight="semibold"
                color={mode('gray.600', 'white')}
                top="-3"
                insetStart="2"
                zIndex={2}
                position="absolute"
                bg={{
                    base: mode('white', 'gray.800'),
                    md: mode('white', 'gray.700'),
                }}
                px="2"
            >
                {label}
            </FormLabel>
            <Select
                placeholder={`Select`}
                size="md"
                focusBorderColor="brand.orangeClair"
                fontSize="md" {...rest}
                name={name}
                ref={reference}
            >
                {liste.map((item, key) => {
                    return (
                        <option key={key} value={item.key} selected={item.key === props.sexe}>{item.value}</option>
                    )
                })
                }
            </Select>
            <FormErrorMessage>
                {errors?.message}
            </FormErrorMessage>
        </FormControl>
    )
})
SelectField.displayName = 'SelectField'
