import { Card, Col, Row, Typography } from 'antd';
// ----------------------------------------------------------------------
import FormComponent from './form'
import DescriptionComponent from './description';
import Logo from '../../assets/Logo.svg'
// ----------------------------------------------------------------------
const { Title } = Typography;
// ----------------------------------------------------------------------
const MyForm = () => (
    <Card
        bordered={false}
        style={{
            width: '100%',
            borderRadius: 24,
            boxShadow: "8px 8px 10px rgba(113, 113, 113, 0.2)"
        }}
    >
        <Row style={{ paddingBottom: 15 }}>
            <Col span={20} offset={2}>
                <Title type='warning' level={2} style={{
                    color: '#8156BC',
                }}>
                    Mon test techinque d'intégration
                </Title>
            </Col>
            <Col>
                <img style={{ position: 'absolute' }} src={Logo} alt="Logo" />
            </Col>
        </Row>
        <Row>
            <Col sm={24} xl={10} style={{
                paddingRight: 10,
                paddingLeft: 10
            }}>
                <DescriptionComponent />
            </Col>
            <Col sm={24} xl={14} style={{
                paddingRight: 10,
                paddingLeft: 10
            }} >
                <FormComponent />
            </Col>
        </Row>
    </Card>
);
export default MyForm;