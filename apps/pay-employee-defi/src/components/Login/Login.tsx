import { Flex, Stack, Input, Button } from '@chakra-ui/react'

export const Login = () => {
  return (
    <Flex v='100vh' h='100vh' align='center' justify='center'>
      <Flex as='form'>
        <Stack>
          <Input
            data-testid='login-email-field'
            name='name'
            type='email'
          ></Input>
          <Input
            data-testid='login-password-field'
            name='password'
            type='password'
          ></Input>
          <Button
            data-testid='login-submit-button'
            colorScheme='blue'
            variant='solid'
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
