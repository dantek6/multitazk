import { ErrorData } from '../types/types';

interface MessageProps {
  message: string | ErrorData;
}

export function Message({ message  }: MessageProps) {
  const errorMessage = typeof message === 'string' ? message : message.error;
    return (
      <p>
        {errorMessage}
      </p>
    );
  }