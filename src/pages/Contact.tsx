import React, { useState } from "react";
import { Button, Form, FormProps } from "antd";
import styled from "styled-components";
import Title from "../components/Title";
import axios from "axios";
import { FormFields } from "../types/types";
import { Link } from "react-router-dom";
import { CustomInput, CustomTextArea } from "../components/CustomInput";
import { Helmet, HelmetProvider } from "react-helmet-async";

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

const helmetContext = {};

const Contact: React.FC = () => {
  const [message, setMessage] = useState("");

  const onFinish: FormProps<FormFields>["onFinish"] = async (values) => {
    const response = await axios.post(
      // "http://localhost:8081/api/contact", // local API endpoint
      "https://cad-test-task-backend-production.up.railway.app/api/contact", // production API endpoint
      values
    );

    console.log(values);
    setMessage(response.data.message);
  };

  if (message) {
    return (
      <ContactWrapper>
        <Title align='center'>{message}</Title>
        <Link to='/'>
          <Button type='link'>Go to Home</Button>
        </Link>
      </ContactWrapper>
    );
  }

  return (
    <HelmetProvider context={helmetContext}>
      <ContactWrapper>
        <Helmet>
          <title>Связаться с CAD Exchanger</title>
          <meta
            name='description'
            content='Свяжитесь с нами, чтобы получить больше информации о наших услугах. Мы всегда готовы помочь!'
          />
          <meta
            name='keywords'
            content='контакты, связь, поддержка клиентов, запросы, CAD Exchanger, услуги'
          />
        </Helmet>
        <Title align='center'>Contact us for cooperation</Title>
        <FormWrapper>
          <Form layout='vertical' onFinish={onFinish}>
            <Form.Item<FormFields>
              label='Name'
              name='name'
              tooltip='How should we address you?'
              colon={false}
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <CustomInput />
            </Form.Item>

            <Form.Item<FormFields>
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
              <CustomInput />
            </Form.Item>

            <Form.Item<FormFields>
              label='Message'
              name='message'
              colon={false}
              rules={[{ required: true, message: "Please write message!" }]}
            >
              <CustomTextArea />
            </Form.Item>

            <Form.Item>
              <ButtonWrapper>
                <Button
                  color='default'
                  variant='solid'
                  size='large'
                  block
                  htmlType='submit'
                >
                  Submit
                </Button>
              </ButtonWrapper>
            </Form.Item>
          </Form>
        </FormWrapper>
      </ContactWrapper>
    </HelmetProvider>
  );
  <Helmet>
    <title>Связаться с [Название компании]</title>
    <meta
      name='description'
      content='Свяжитесь с нами, чтобы получить больше информации о наших услугах. Мы всегда готовы помочь!'
    />
    <meta
      name='keywords'
      content='контакты, связь, поддержка клиентов, запросы, [Название компании], услуги'
    />
  </Helmet>;
};
export default Contact;
