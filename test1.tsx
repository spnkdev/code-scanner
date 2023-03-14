import { Form } from 'kit-ui/src/comp/Form';
import { DatePicker } from 'kit-ui/src/comp/Form/DatePicker';
import { Input } from 'kit-ui/src/comp/Form/Input';
import { Horizontal } from 'kit-ui/src/comp/Horizontal';
import { Spacer } from 'kit-ui/src/comp/Spacer';
import { Vertical } from 'kit-ui/src/comp/Vertical';
import { Button } from 'kit-ui/src/components/yaml/Button';
import { PieChart } from 'kit-ui/src/components/yaml/PieChart';
import { Text } from 'kit-ui/src/components/yaml/Text';
import { Title } from 'kit-ui/src/components/yaml/Title';
import { store } from 'kit-ui/src/store';
import * as React from 'react';
import { exStore } from './store';

const ctx = {};

export const uiexamples = [
    {
        title: 'Button',
        description: 'Simple Button',
        example: `
            import { Button } from 'kit-ui/src/comp/form/Button';
            return <Button title='This is a Button' onClick={() => store.error = 'Ouch'} />;
        `,
        live: () => {
            return <Button title='This is a Button' onClick={() => store.error = 'Ouch'} />;
        },
        properties: [
            { name: 'title', description: 'Text inside the button.' },
            { name: 'icon', description: 'Icon name from <a href="https://material.io/tools/icons/" target="_BLANK">Material Icons</a>' },
        ],
    },
    {
        title: 'DatePicker',
        description: 'Input with validation, styling, form integration and more.',
        example: `
            import { DatePicker } from 'kit-ui/src/comp/form/DatePicker';
            return <DatePicker title='Birthday' context={ctx} stateName='exampledate' />;
        `,
        live: () => {
            return <DatePicker title='Birthday' context={ctx} stateName='exampledate' />;
        },
        properties: [],
    },
    {
        title: 'Form',
        description: 'Input with validation, styling, form integration and more.',
        example: `
            import { Form } from 'kit-ui/src/comp/Form';
            import { Input } from 'kit-ui/src/comp/Form/Input';
            return <Form context={ctx} onSubmit={() => {
                store.error = JSON.stringify(ctx);
                return true;
            }}>
                <Input title='Username' context={ctx} stateName='username' />
                <Input title='Email' context={ctx} stateName='email' validation={[
                    { message: 'Invalid email', regex: '.+@.+\.[a-z]+' },
                ]} />
                <Button submit title='Submit' />
            </Form>;
        `,
        live: () => {
            return <Form context={ctx} onSubmit={async () => {
                store.error = JSON.stringify(ctx);
                return true;
            }}>
                <Input title='Username' context={ctx} stateName='username' />
                <Input title='Email' context={ctx} stateName='email' validation={[
                    { message: 'Invalid email', regex: '.+@.+\.[a-z]+' },
                ]} />
                <Button submit title='Submit' />
            </Form>;
        },
        properties: [
            { name: 'context', description: '' },
            { name: 'stateName', description: '' },
            { name: 'method', description: '' },
            { name: 'path', description: '' },
            { name: 'load', description: '' },
            { name: 'login', description: 'Special case, encodes username and password in header using base64.' },
            { name: 'onResponse', description: '' },
            { name: 'onLoaded', description: '' },
            { name: 'to', description: '' },
            { name: 'sendtype', description: '' },
            { name: 'review', description: '' },
            { name: 'Standard Form Attributes', description: '' },
        ],
    },
    {
        title: 'Input',
        description: 'Input with validation, styling, form integration and more.',
        example: `
            import { Input } from 'kit-ui/src/comp/form/Input';
            return <Input
                title='Your Username'
                context={ctx} stateName='exampleinput'
                validation={[ maxLength: 5, message: 'Too long' ]}
            />;
        `,
        live: () => {
            return <Input
                title='Your Username'
                context={ctx} stateName='exampleinput'
                validation={[{ maxLength: 5, message: 'Too long' }]}
            />;
        },
        properties: [
            { name: 'title', description: 'Title shown above the input.' },
            { name: 'context', description:  'Object to store data inside.' },
            { name: 'stateName', description:  'The key to use to store inside the context object.' },
            { name: 'validation', description:  'Array of validation rules.' },
        ],
    },
    {
        title: 'Pie Chart',
        description: `
            Pie chart from echarts-for-react. This adds a wrapper to bundle necessary Javascript separately
            from the main applications code. Then load the library only when necessary. Without the wrapper
            your application would need to download about 500kb more of Javascript before an initial render
            could even occur. See Webpack Dynamic Imports for more info. Or view results of webpack-bundle-analyzer
            to gain more insight to the problem solved.
        `,
        example: `
            import { PieChart } from 'kit-ui/src/components/yaml/PieChart';

            const data = [
                {value: 310000000, name: 'Americans'},
                {value: 35000000, name: 'Canadians'},
                {value: 120000000, name: 'British'},
            ];

            return <PieChart data={data} />;
        `,
        live: () => {
            const data = [
                {value: 310000000, name: 'Americans'},
                {value: 35000000, name: 'Canadians'},
                {value: 120000000, name: 'British'},
            ];
            return <PieChart data={data} />;
        },
        properties: [{
            name: '...',
            description: `
                Same as <a href="https://www.npmjs.com/package/echarts-for-react" target="_BLANK">echarts-for-react</a>,
                but with fallback values for required props.
            `,
        }],
    },
    {
        title: 'Horizontal/Vertical/Spacer',
        description: 'These allow basic layouts easily.',
        example: `
            <Horizontal>
                <Vertical style={{ background: 'white' }}>
                    <Title text="Main Area" />
                    <Text text="Some example text" />
                    <Horizontal>
                        <Button title='Left Aligned Button' />
                    </Horizontal>
                    <Horizontal>
                        <Spacer />
                        <Button title='Right Aligned Button' />
                    </Horizontal>
                </Vertical>
                <Vertical style={{ background: 'gray', maxWidth: '200px' }}>
                    <Horizontal style={{ flex: 0 }}><Title text="Sidebar" /></Horizontal>
                    <Horizontal>
                        <Vertical style={{ background: 'red' }}></Vertical>
                        <Vertical>
                            <Horizontal style={{ background: 'green' }} />
                            <Horizontal style={{ background: 'blue' }} />
                            <Horizontal style={{ background: 'orange' }} />
                        </Vertical>
                    </Horizontal>
                </Vertical>
            </Horizontal>
        `,
        live: () => {
            return <Horizontal>
                <Vertical style={{ background: 'white' }}>
                    <Title text='Main Area' />
                    <Text text='Some example text' />
                    <Horizontal>
                        <Button title='Left Aligned Button' />
                    </Horizontal>
                    <Horizontal>
                        <Spacer />
                        <Button title='Right Aligned Button' />
                    </Horizontal>
                </Vertical>
                <Vertical style={{ background: 'gray', maxWidth: '200px' }}>
                    <Horizontal style={{ flex: 0 }}><Title text='Sidebar' /></Horizontal>
                    <Horizontal>
                        <Vertical style={{ background: 'red' }}></Vertical>
                        <Vertical>
                            <Horizontal style={{ background: 'green' }} />
                            <Horizontal style={{ background: 'blue' }} />
                            <Horizontal style={{ background: 'orange' }} />
                        </Vertical>
                    </Horizontal>
                </Vertical>
            </Horizontal>;
        },
        properties: [],
    },
];
