import { validationErrorMessages } from '@/src/components/constants';
import { Box, Button, TextField } from '@mui/material';
import { FunctionComponent } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  onSubmit: (formData: FormData) => void;
};

const ContactForm: FunctionComponent<Props> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm<FormData>();
  const intl = useIntl();
  // const theme = useTheme();

  const messages = {
    fieldRequired: intl.formatMessage(validationErrorMessages.fieldRequired),
  } as const;

  const handleFormSubmit = async () => {
    await handleSubmit((formData) => onSubmit?.(formData))();
  };

  return (
    <>
      <form>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: messages.fieldRequired,
            },
          }}
          render={({ field, fieldState }) => (
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              name={field.name}
              value={field.value}
              inputRef={field.ref}
              label={<FormattedMessage id="name" defaultMessage="Name" />}
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              onBlur={field.onBlur}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: messages.fieldRequired,
            },
          }}
          render={({ field, fieldState }) => (
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              name={field.name}
              value={field.value}
              inputRef={field.ref}
              label={<FormattedMessage id="email" defaultMessage="Email" />}
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              onBlur={field.onBlur}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          name="subject"
          control={control}
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: messages.fieldRequired,
            },
          }}
          render={({ field, fieldState }) => (
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              name={field.name}
              value={field.value}
              inputRef={field.ref}
              label={<FormattedMessage id="subject" defaultMessage="Subject" />}
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              onBlur={field.onBlur}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: messages.fieldRequired,
            },
          }}
          render={({ field, fieldState }) => (
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              name={field.name}
              value={field.value}
              inputRef={field.ref}
              label={<FormattedMessage id="message" defaultMessage="Message" />}
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              onBlur={field.onBlur}
              onChange={field.onChange}
              multiline
              maxRows={4}
            />
          )}
        />
      </form>
      <Box mt={3} mb={2}>
        <Button variant="contained" color="primary" onClick={handleFormSubmit}>
          <FormattedMessage id="submit" defaultMessage="submit" />
        </Button>
      </Box>
    </>
  );
};

export default ContactForm;
