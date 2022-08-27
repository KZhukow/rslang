import { Alert, AlertDescription, AlertIcon, Box } from '@chakra-ui/react';

export default function ErrorMessage() {
  return (
    <Box my={4}>
      <Alert status="error" borderRadius={4}>
        <AlertIcon />
        <AlertDescription>{}</AlertDescription>
      </Alert>
    </Box>
  );
}
