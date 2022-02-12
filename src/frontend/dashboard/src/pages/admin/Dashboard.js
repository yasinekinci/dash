import { Card, Row, Col } from 'antd';
import { Line, Column, Pie } from '@ant-design/charts';

//read me :  https://charts.ant.design/demos/global

const Dashboard = () => {

    const getLine = () => {
        const data = [
            { year: '1991', value: 3 },
            { year: '1992', value: 4 },
            { year: '1993', value: 3.5 },
            { year: '1994', value: 5 },
            { year: '1995', value: 4.9 },
            { year: '1996', value: 6 },
            { year: '1997', value: 7 },
            { year: '1998', value: 9 },
            { year: '1999', value: 13 },
        ];

        const config = {
            data,
            height: 400,
            xField: 'year',
            yField: 'value',
            point: {
                size: 5,
                shape: 'diamond',
            },
        };
        return <Line {...config} />;
    }

    const getColumn = () => {

        const data = [
            {
                type: 'Furniture appliances',
                sales: 38,
            },
            {
                type: 'Cereals, Oils and Non-staple food',
                sales: 52,
            },
            {
                type: 'Fresh fruits',
                sales: 0,
            },
            {
                type: 'Beauty care',
                sales: 145,
            },
            {
                type: 'Baby products',
                sales: 48,
            },
            {
                type: 'Imported food',
                sales: 38,
            },
            {
                type: 'Food and drink',
                sales: 38,
            },
            {
                type: 'Home cleaning',
                sales: 38,
            },
        ];

        const config = {
            data,
            xField: 'type',
            yField: 'sales',
            label: {
                position: 'middle',
                style: {
                    fill: '#FFFFFF',
                    opacity: 0.6,
                },
            },
            meta: {
                type: { alias: 'Category' },
                sales: { alias: 'Sales' },
            },
        };

        return (
            <Column
                {...config}
                onReady={(plot) => {
                    plot.on('plot:click', (evt) => {
                        const { x, y } = evt;
                        const { xField } = plot.options;
                        const tooltipData = plot.chart.getTooltipItems({ x, y });
                        console.log(tooltipData);
                    });
                }}
            />
        );

    }

    const getPie = () => {
        var data = [
            {
                type: 'Category One',
                value: 27,
              },
              {
                type: 'Class 2',
                value: 25,
              },
              {
                type: 'Category Three',
                value: 18,
              },
              {
                type: 'Category Four',
                value: 15,
              },
              {
                type: 'Category Five',
                value: 10,
              },
              {
                type: 'Other',
                value: 5,
              },
          ];
          var config = {
            appendPadding: 10,
            data: data,
            angleField: 'value',
            colorField: 'type',
            radius: 0.75,
            label: {
              type: 'spider',
              labelHeight: 28,
              content: '{name}\n{percentage}',
            },
            interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
          };
          return <Pie {...config} />;

    }

    return (

        <Row>
            <Col xs={{ span: 7, offset: 0 }}> <Card>{getLine()} </Card></Col>
            <Col xs={{ span: 8, offset: 1 }}> <Card>{getColumn()} </Card></Col>
            <Col xs={{ span: 7, offset: 1 }}> <Card>{getPie()} </Card></Col>
        </Row>

    )
}

export default Dashboard
