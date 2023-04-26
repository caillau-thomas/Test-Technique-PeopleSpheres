import {
  Col,
  Row,
  Button,
  Input,
  Form,
  Space,
  message,
  Typography
} from 'antd';
// ----------------------------------------------------------------------
const { Title } = Typography;

const onFinish = (values) => {
  message.success('Vous avez noté ce test');
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
  message.error('Vous devez noter ce test');
};

function refreshPage() {
  window.location.reload();
}
// ----------------------------------------------------------------------
const FormComponent = () => (
  <Form
    name="basic"
    labelCol={{ span: 3 }}
    wrapperCol={{ span: 24 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Title level={5} style={{
      textAlign: 'left',
      fontWeight:'normal',
      color:'grey',
    }}>
      Donnez une note à ce test techinque:
    </Title>
    <Form.Item
      label="Note"
      name="Note"
      rules={[{
        required: true,
        message: 'Merci de donner une note à ce test'
      }]}
      style={{
        width: '100%',
        textAlign: 'start'
      }}
    >
      <Input />
    </Form.Item>
    <Row>
      <Col>
        <div style={{ height: '12vh' }}>
          <Col span={24} />
        </div>
      </Col>
    </Row>
    <Form.Item>
      <Space direction='horizontal' style={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <Button type="default" htmlType="button" style={{
          borderColor: '#8156BC',
          color: '#8156BC'
        }}
          onClick={refreshPage}>
          Annuler
        </Button>
        <Button type="primary" htmlType="submit" style={{
          backgroundColor: '#20CA89'
        }}>
          Soumettre
        </Button>
      </Space>
    </Form.Item>
  </Form>
);

export default FormComponent;
