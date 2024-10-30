import { Button, Form, Input } from "antd";
import styled from "styled-components";
import Title from "../components/Title";

// const formItemLayout = {
//   labelCol: {
//     xs: { span: 24 },
//     sm: { span: 6 },
//   },
//   wrapperCol: {
//     xs: { span: 24 },
//     sm: { span: 14 },
//   },
// };

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items: center;
  padding-top: 150px;
	width: 100%;
`;

const FormWrapper = styled.div`
  max-width: 500px;
	width: 100%;
	padding: 0 20px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 10px 0;
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <Title align='center'>Contact us for cooperation</Title>
      <FormWrapper>
        <Form layout='vertical'>
          <Form.Item
            label='Name'
            name='name'
            tooltip='How should we address you?'
            colon={false}
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input type='text' />
          </Form.Item>

          <Form.Item
            label='Email'
            name='email'
            colon={false}
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              { required: true, message: "Please enter your email address!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Message'
            name='message'
            colon={false}
            rules={[{ required: true, message: "Please write message!" }]}
          >
            <Input.TextArea />
          </Form.Item>
        </Form>

        <Form.Item>
          <ButtonWrapper>
            <Button color='default' variant='solid' size='large' block>
              Submit
            </Button>
          </ButtonWrapper>
        </Form.Item>
      </FormWrapper>
    </ContactWrapper>
  );
};
export default Contact;
