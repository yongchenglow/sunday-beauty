import { validationErrorMessages } from '@/src/components/constants';
import { Alert, Box, Button, Snackbar, TextField } from '@mui/material';
import { FunctionComponent, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm: FunctionComponent = () => {
  const { control, reset } = useForm<FormData>();
  const intl = useIntl();
  const form = useRef();

  const messages = {
    fieldRequired: intl.formatMessage(validationErrorMessages.fieldRequired),
  } as const;

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFail, setOpenFail] = useState(false);

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccess(false);
    setOpenFail(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          setOpenSuccess(true);
          reset();
        },
        (error) => {
          console.log(error.text);
          setOpenFail(true);
        },
      );
  };

  return (
    <>
      <form ref={form} onSubmit={handleFormSubmit}>
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
              required
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
              required
              margin="normal"
              type="email"
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
              required
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
              required
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
              minRows={5}
              maxRows={5}
            />
          )}
        />
        <Box mt={2} mb={2}>
          <Button type="submit" variant="contained" fullWidth color="primary">
            <FormattedMessage id="submit" defaultMessage="submit" />
          </Button>
        </Box>
      </form>
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Your message have been sent Li Jie will contact you within 7 business
          days
        </Alert>
      </Snackbar>
      <Snackbar
        open={openFail}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Something went wrong. Please try again later.
        </Alert>
      </Snackbar>
    </>
  );
};

export type { FormData };
export default ContactForm;
