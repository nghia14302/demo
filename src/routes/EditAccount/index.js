import { useEffect } from 'react';

import { Avatar, Col, Row, Space, Card, Image, Typography, Button } from 'antd';
import moment from 'moment';
import { useSelector } from 'react-redux';

import {
    ActivityTable,
    InputBio,
    InputFacebook,
    InputFullName,
    InputPersonalEmail,
    InputEmailFPT,
    SelectBirthdate,
    SelectGender,
    ConfirmModal,
    FullName,
} from './components';
import selector from './slice/selectors';
import { Container } from './style';

import getGutter from '@/utils/getGutter';
import useTheme from '@/utils/useTheme';

// import { EditOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const EditAccount = () => {
    const setTheme = useTheme();

    const avatar = useSelector(selector.avatar);
    const heroImage = useSelector(selector.heroImage);
    const joinDate = useSelector(selector.joinDate);
    const role = useSelector(selector.role);
    const position = useSelector(selector.position);

    useEffect(() => {
        if (process.env.NODE_ENV !== 'production') {
            setTheme(false);
        }
    });

    return (
        <Container>
            <Space direction="vertical" size={getGutter(1)} style={{ display: 'flex' }}>
                <Image
                    width="100%"
                    height="200px"
                    src={heroImage}
                    preview={false}
                    placeholder={true}
                />
                <Row gutter={getGutter(1)}>
                    <Col span={7} className="left-side">
                        <Space
                            direction="vertical"
                            size="middle"
                            style={{ display: 'flex' }}
                            className="pos-sticky"
                        >
                            <Card style={{ width: '100%', height: '100%' }} loading={false}>
                                <Avatar size={160} src={avatar} />
                                <FullName />
                                <Title
                                    level={5}
                                    style={{
                                        marginTop: 0,
                                    }}
                                >
                                    {role}
                                </Title>
                                <Text>Ng??y tham gia: {moment(joinDate).format('DD/MM/yyyy')}</Text>
                                <Text>Ch???c v???: {position}</Text>
                            </Card>
                            <Space size="middle" className="full-fill">
                                <Button block>Hu??? thay ?????i</Button>
                                <ConfirmModal />
                            </Space>
                        </Space>
                    </Col>
                    <Col span={17} className="right-side">
                        <Card style={{ width: '100%', height: '100%' }} loading={false}>
                            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                                <Title
                                    level={4}
                                    style={{
                                        marginTop: 0,
                                    }}
                                >
                                    Th??ng tin c?? b???n
                                </Title>
                                <Row gutter={[getGutter(1), getGutter(1)]}>
                                    <Col span={24}>
                                        <Title level={5}>H??? v?? t??n</Title>
                                        <InputFullName />
                                    </Col>
                                    <Col span={12}>
                                        <Title level={5}>Ng??y sinh</Title>
                                        <SelectBirthdate />
                                    </Col>
                                    <Col span={12}>
                                        <Title level={5}>Gi???i t??nh</Title>
                                        <SelectGender />
                                    </Col>
                                    <Col span={24}>
                                        <Title level={5}>Email FPT</Title>
                                        <InputEmailFPT />
                                    </Col>
                                    <Col span={24}>
                                        <Title level={5}>Email li??n k???t</Title>
                                        <InputPersonalEmail />
                                    </Col>
                                    <Col span={24}>
                                        <Title level={5}>Facebook</Title>
                                        <InputFacebook />
                                    </Col>
                                    <Col span={24}>
                                        <Title level={5}>Bio</Title>
                                        <InputBio />
                                    </Col>
                                </Row>
                                <Title level={4}>Th??ng tin n??ng cao</Title>
                                <ActivityTable />
                            </Space>
                        </Card>
                    </Col>
                </Row>
            </Space>
        </Container>
    );
};

export default EditAccount;
