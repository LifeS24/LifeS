import * as React from 'react'
import { FormErrorMessage, FormControl, FormLabel, Input, useColorModeValue as mode } from '@chakra-ui/react'

export const InputField = React.forwardRef((props, ref) => {
  const { label, errors, reference, name, ...rest } = props
  return (
    <FormControl isInvalid={errors} size="lg" {...rest}>
      <FormLabel
        _focus={{
          color: "#085FCE",
        }}
        fontWeight="semibold"
        color={mode('gray.600', 'white')}
        position="absolute"
        top="-3"
        insetStart="2"
        bg={{
          base: mode('white', 'gray.800'),
          md: mode('white', 'gray.700'),
        }}
        px="2"
        fontSize={{ base: "sm", md: "md" }}
        zIndex={2}
      >
        {label}
      </FormLabel>
      <Input ref={reference} size="md" focusBorderColor="brand.orangeClair" fontSize={{ base: "sm", md: "md" }} {...rest} name={name} />
      <FormErrorMessage>
        {errors?.message}
      </FormErrorMessage>
    </FormControl>
  )
})
InputField.displayName = 'InputField'
