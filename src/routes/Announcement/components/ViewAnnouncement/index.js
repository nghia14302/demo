import { useEffect, useState } from 'react';

import { convertFromRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { selectAnnounce } from '../../slice/selectors';
import { ContainerAnnounce, ContentAnnounce } from './style';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export const ViewAnnouncement = () => {
    const [state, setState] = useState();
    const { id } = useParams();
    const navigate = useNavigate();
    const listAnnounce = useSelector(selectAnnounce);

    useEffect(() => {
        let item = null;
        for (let i = 0; i < listAnnounce.length; i++) {
            if (listAnnounce[i].id == id) {
                item = listAnnounce[i];
                break;
            }
        }
        if (item != null) {
            setState(item);
        } else {
            navigate('/manage-announcement');
        }
    }, [id]);

    return (
        <ContainerAnnounce>
            {state && (
                <ContentAnnounce>
                    <h1 className="title">{state.title}</h1>
                    <Editor
                        editorState={EditorState.createWithContent(
                            convertFromRaw(JSON.parse(state.content))
                        )}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        readOnly
                        style={{ 'text-align': 'justify' }}
                        toolbar={{
                            options: [],
                        }}
                    />
                </ContentAnnounce>
            )}
        </ContainerAnnounce>
    );
};
