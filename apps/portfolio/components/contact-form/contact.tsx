import { FormData } from '../../utils/types';
import { sendEmail } from '../../utils/send-email';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import breakpointValues from '../../settings/breakpoints';
import { useState } from 'react';

export const ContactForm = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);

  const onSubmit = async (data: FormData) => {
    const res = await sendEmail(data);
    if (res === 'success') {
      setEmailSent(true);
    } else {
      setEmailError(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper>
        <Label htmlFor="name">Full Name:</Label>
        <Input
          type="text"
          placeholder="Full Name"
          {...register('name', { required: true })}
        />
      </FormWrapper>
      <FormWrapper>
        <Label htmlFor="email">Email Address:</Label>
        <Input
          type="email"
          placeholder="example@domain.com"
          {...register('email', { required: true })}
        />
      </FormWrapper>
      <FormWrapper>
        <Label htmlFor="message">Message:</Label>
        <TextArea
          rows={4}
          placeholder="Type your message"
          {...register('message', { required: true })}
        ></TextArea>
      </FormWrapper>
      {emailSent ? (
        <SuccessMsg>Your message has been sent successfully!</SuccessMsg>
      ) : (
        <>
          {emailError ? (
            <ErrorMsg>
              There was an issue sending this message. Please try again later
            </ErrorMsg>
          ) : (
            <ButtonWrapper>
              <Button>Submit</Button>
            </ButtonWrapper>
          )}
        </>
      )}
    </Form>
  );
};

const Form = styled.form``;

const FormWrapper = styled.div``;

const Label = styled.label`
  display: block;
  width: 100%;
  /* background-color: #77696866; */
  @media (min-width: ${breakpointValues.tablet}) {
    width: 25%;
  }
`;

const Input = styled.input`
  background-color: #696866;
  color: #fff;
  height: 30px;
  width: 100%;
  border-radius: 5px;
  ::placeholder {
    color: #fff;
  }
  @media (min-width: ${breakpointValues.tablet}) {
    width: 25%;
  }
`;

const TextArea = styled.textarea`
  background-color: #696866;
  color: #fff;
  width: 100%;
  border-radius: 5px;
  ::placeholder {
    color: #fff;
  }
  @media (min-width: ${breakpointValues.tablet}) {
    width: 25%;
  }
`;

const ButtonWrapper = styled.div`
  padding-bottom: 50px;
`;

const Button = styled.button`
  height: 30px;
  width: 100%;
  background-color: #036308;
  color: #fff;
  border-radius: 5px;
  border: 2px solid #036308;
  cursor: pointer;
  @media (min-width: ${breakpointValues.tablet}) {
    width: 25%;
  }
  :hover {
    background-color: #fff;
    color: #036308;
    border-radius: 5px;
    border: 2px solid #036308;
  }
`;

const Message = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  padding-bottom: 50px;
`;

const SuccessMsg = styled(Message)``;

const ErrorMsg = styled(Message)``;
