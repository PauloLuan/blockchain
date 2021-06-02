import {
  Flex,
  Stack,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button
} from '@chakra-ui/react'

import { PayEmployeeDefiSharedUi } from '@pauloluan/pay-employee-defi/shared-ui'

export const Login = () => {
  return (
    <Flex v='100vh' h='100vh' align='center' justify='center'>
      <Flex
        as='form'
        width='100%'
        maxWidth={360}
        borderRadius={8}
        borderColor='white'
      >
        <Stack>
          <PayEmployeeDefiSharedUi />
          <FormControl size='lg'>
            <FormLabel>Seu Email</FormLabel>
            <Input
              data-testid='login-email-field'
              name='name'
              type='email'
              size='lg'
            ></Input>
            <FormHelperText>Pare de usar e-mail da bol</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Sua senha:</FormLabel>
            <Input
              data-testid='login-password-field'
              name='password'
              type='password'
              size='lg'
            ></Input>
            <FormHelperText>Respeitamos a LGPD</FormHelperText>
          </FormControl>
          <Button
            data-testid='login-submit-button'
            colorScheme='blue'
            variant='solid'
            size='lg'
            _hover={{
              bgColor: 'blue.900'
            }}
          >
            Sign In
          </Button>
        </Stack>
      </Flex>
    </Flex>
  )
}
