import { Col, Row } from 'antd';
// ----------------------------------------------------------------------
import MyForm from '../components/form/index'
// ----------------------------------------------------------------------
const FormPage = () => (
  <div>
    <Row>
      <Col>
        <div style={{ height: '25vh' }}>
          <Col span={24} />
        </div>
      </Col>
    </Row>
    <Row>
      <Col span={10} offset={8}>
        <MyForm />
      </Col>
    </Row>
  </div>
);
export default FormPage;
