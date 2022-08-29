import { Alert, AlertDescription, AlertIcon, Box } from '@chakra-ui/react';

export function ErrorMessage() {
  return (
    <Box my={4}>
      <Alert status="error" borderRadius={4}>
        <AlertIcon />
        <AlertDescription>{}</AlertDescription>
      </Alert>
    </Box>
  );
}

type props = {
  message: string;
}
export function ErrorDiv({ message }: props) {
  return (
    <div className="errorForm hidden" id="divError">
      {message}
    </div>
  );
}

type propsTwo = {
  message: string;
}
export function ErrorDivEmail({ message }: propsTwo) {
  return (
    <div className="errorForm hidden" id="divErrorEmail">
      {message}
    </div>
  );
}
