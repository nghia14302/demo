import { useState } from 'react';

import { Button, Image, Input, Modal } from 'antd';

import { ContainerUploadImg, ImageUpload, UploadTwoUrl } from './style';

import { PlusOutlined } from '@ant-design/icons';

export const UploadImage = (props) => {
    const actions = props.onChange;
    const [imgList, setImgList] = useState(props.type === 'edit' ? props.imgs : []);
    const [loading, setLoading] = useState(false);
    const [newUrl, setNewUrl] = useState({
        url1: props.type === 'edit' ? props.imgs[0] : '',
        url2: props.type === 'edit' ? props.imgs[1] : '',
    });

    const handleUpload = () => {
        let res = [];
        if (newUrl.url1.trim() != '' || newUrl.url1) res.push(newUrl.url1);
        if (newUrl.url2.trim() != '' || newUrl.url2) res.push(newUrl.url2);
        actions(res);
        setImgList(res);
        setLoading(false);
    };

    return (
        <ContainerUploadImg>
            <h3 className="title">
                Upload <span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>(Optional)</span> :
            </h3>

            {imgList.length > 0 &&
                imgList.map(
                    (item, key) =>
                        item && <Image key={key} alt="Not found" height={100} src={item} />
                )}

            <ImageUpload onClick={() => setLoading(true)}>
                <PlusOutlined />
                <p>Upload</p>
            </ImageUpload>

            <Modal
                open={loading}
                title="Nhập url của hình ảnh vào đây:"
                footer={false}
                onCancel={() => setLoading(false)}
                closable={true}
                centered
            >
                <UploadTwoUrl>
                    <h3>Hình 1:</h3>
                    <Input
                        value={newUrl.url1}
                        onChange={(e) =>
                            setNewUrl({
                                ...newUrl,
                                url1: e.target.value,
                            })
                        }
                        placeholder="https://image"
                    />
                    <h3>Hình 2:</h3>
                    <Input
                        value={newUrl.url2}
                        onChange={(e) =>
                            setNewUrl({
                                ...newUrl,
                                url2: e.target.value,
                            })
                        }
                        placeholder="https://image"
                    />
                    <br />
                    {newUrl.url1 && <Image src={newUrl.url1} alt="Not found" height={100} />}
                    {newUrl.url2 && <Image src={newUrl.url2} alt="Not found" height={100} />}
                    <div className="two-button">
                        <Button onClick={() => setLoading(false)} className="cancel-btn">
                            Hủy
                        </Button>
                        <Button onClick={() => handleUpload()} className="ok-btn">
                            Lưu
                        </Button>
                    </div>
                </UploadTwoUrl>
            </Modal>
        </ContainerUploadImg>
    );
};
