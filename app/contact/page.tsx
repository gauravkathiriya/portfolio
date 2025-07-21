'use client';

import { useState } from 'react';
import { Typography, Form, Input, Button, Row, Col, Card, message } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, SendOutlined } from '@ant-design/icons';
import PageLayout from '@/components/PageLayout';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

export default function Contact() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      message.success('Message sent successfully! I will get back to you soon.');
      form.resetFields();
      setLoading(false);
    }, 1500);
    
    // In a real application, you would send this data to your backend
    console.log('Form values:', values);
  };

  return (
    <PageLayout>
      <div className="space-y-12">
        <section>
          <Title>Get In Touch</Title>
          <Paragraph className="text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </Paragraph>
        </section>

        <Row gutter={[32, 32]}>
          <Col xs={24} md={10}>
            <div className="space-y-8">
              <Card className="h-full">
                <div className="space-y-6">
                  <Title level={3}>Contact Information</Title>
                  <Paragraph className="text-lg">
                    Feel free to reach out using any of the methods below. I'll get back to you as soon as possible.
                  </Paragraph>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-50 p-3 rounded-full">
                        <MailOutlined style={{ fontSize: '24px', color: '#1677ff' }} />
                      </div>
                      <div>
                        <div className="text-gray-500">Email</div>
                        <a href="mailto:your.actual@email.com" className="text-lg font-medium">
                          your.actual@email.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-50 p-3 rounded-full">
                        <PhoneOutlined style={{ fontSize: '24px', color: '#1677ff' }} />
                      </div>
                      <div>
                        <div className="text-gray-500">Phone</div>
                        <a href="tel:+1234567890" className="text-lg font-medium">
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-50 p-3 rounded-full">
                        <EnvironmentOutlined style={{ fontSize: '24px', color: '#1677ff' }} />
                      </div>
                      <div>
                        <div className="text-gray-500">Location</div>
                        <div className="text-lg font-medium">
                          Your City, Country
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
          
          <Col xs={24} md={14}>
            <Card className="h-full">
              <Title level={3}>Send Me a Message</Title>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="mt-6"
              >
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="name"
                      label="Name"
                      rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                      <Input size="large" placeholder="Your Name" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="email"
                      label="Email"
                      rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email' }
                      ]}
                    >
                      <Input size="large" placeholder="Your Email" />
                    </Form.Item>
                  </Col>
                </Row>
                
                <Form.Item
                  name="subject"
                  label="Subject"
                  rules={[{ required: true, message: 'Please enter a subject' }]}
                >
                  <Input size="large" placeholder="Subject" />
                </Form.Item>
                
                <Form.Item
                  name="message"
                  label="Message"
                  rules={[{ required: true, message: 'Please enter your message' }]}
                >
                  <TextArea
                    rows={6}
                    placeholder="Your Message"
                  />
                </Form.Item>
                
                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    size="large"
                    icon={<SendOutlined />}
                    loading={loading}
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  );
} 