import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SendIcon from "@mui/icons-material/Send";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
// @ts-ignore
// React-hook-form
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
});

interface IFormInput {
  email: string;
  name: string;
  message: string;
}

const defaultValues = {
  email: "",
  name: "",
  message: "",
};

export default function Contact() {
  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const { handleSubmit, control, reset } = useForm<IFormInput>({
    defaultValues: defaultValues,
  });

  const onSubmit = (data: IFormInput) => {
    //alert(JSON.stringify(data, null, 2));
    console.log(data);
    setOpen(true);
    reset();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container component="main" sx={{ mt: 4, mb: 8 }} maxWidth="sm">
        <Grid container>
          <Grid item xs={12}>
            <Box>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Controller
                  name="name"
                  control={control}
                  render={({
                    field: { onChange, value, ref },
                    fieldState: { error },
                  }) => {
                    return (
                      <TextField
                        margin="normal"
                        fullWidth
                        variant="standard"
                        inputRef={ref}
                        label="Name"
                        type="name"
                        id="name"
                        autoComplete="name"
                        placeholder="John Doe"
                        onChange={onChange}
                        value={value}
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    );
                  }}
                />

                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({
                    field: { onChange, value, onBlur },
                    fieldState: { error },
                  }) => {
                    return (
                      <TextField
                        helperText={error ? error.message : null}
                        variant="standard"
                        placeholder="test@test.com"
                        size="medium"
                        error={!!error}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        fullWidth
                        label="Email"
                        type="email"
                        required
                      />
                    );
                  }}
                />

                <Controller
                  name="message"
                  control={control}
                  render={({
                    field: { onChange, value, ref },
                    fieldState: { error },
                  }) => {
                    return (
                      <TextField
                        margin="normal"
                        fullWidth
                        variant="standard"
                        multiline
                        rows={6}
                        inputRef={ref}
                        label="What would you like to say ?"
                        placeholder="Write your message here ..."
                        type="message"
                        id="message"
                        autoComplete="message"
                        onChange={onChange}
                        value={value}
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    );
                  }}
                />

                <Button
                  type="submit"
                  variant="outlined"
                  endIcon={<SendIcon />}
                  sx={{
                    mt: 3,
                    mb: 2,

                    // "&:hover": {
                    //   "&:after": {
                    //     opacity: 1,
                    //     right: "10px"
                    //   },
                    //   transition: "0.5s",
                    //   background: "green",
                    //   paddingRight: "24px",
                    //   paddingLeft: "8px"
                    // }
                  }}
                >
                  {"Send Message"}
                </Button>
              </form>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  The message has been sent.
                </Alert>
              </Snackbar>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
