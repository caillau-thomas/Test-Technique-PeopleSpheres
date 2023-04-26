import { Card, Typography } from 'antd';
// ----------------------------------------------------------------------
const { Text } = Typography;
// ----------------------------------------------------------------------
const DescriptionComponent = () => (
    <Card
        bordered={false}
        style={{
            width: '100%',
            border: '1px solid #C9C8CB',
            textAlign: 'left'
        }}
    >
        <p>
            <Text style={{
                color: '#20CA89',
                fontWeight: 'bold',
                fontSize: 15,
            }}> Bienvenu </Text>
            dans ce test techinque. Pas de stress,
            le but est simplement de nous donner
            une idée honnête de ce que vous savez
            et ne savez pas faire afin d'être en
            capacité de vous fournir des taches
            intéressantes lorsque que vous rejoindrez
            nos équipes. Alors <br />
            <Text style={{
                color: '#8156BC',
                fontWeight: 'bold',
                fontStyle: 'italic',
                fontSize: 16,
                textDecorationLine: "underline"
            }}> HAVE FUN !</Text>
        </p>
    </Card>
);

export default DescriptionComponent;
