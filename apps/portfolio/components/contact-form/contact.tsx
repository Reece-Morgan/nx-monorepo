import { FormData } from '../../utils/types';
import { sendEmail } from '../../utils/send-email';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import breakpointValues from '../../settings/breakpoints';

export const ContactForm = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper className="mb-5">
        <Label htmlFor="name">Full Name:</Label>
        <Input
          type="text"
          placeholder="Full Name"
          {...register('name', { required: true })}
        />
      </FormWrapper>
      <FormWrapper className="mb-5">
        <Label htmlFor="email">Email Address:</Label>
        <Input
          type="email"
          placeholder="example@domain.com"
          {...register('email', { required: true })}
        />
      </FormWrapper>
      <FormWrapper className="mb-5">
        <Label htmlFor="message">Message:</Label>
        <TextArea
          rows={4}
          placeholder="Type your message"
          {...register('message', { required: true })}
        ></TextArea>
      </FormWrapper>
      <ButtonWrapper>
        <Button>Submit</Button>
      </ButtonWrapper>
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
