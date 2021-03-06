/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import Avatar from 'react-avatar-edit';
import { Modal, Button } from '@mantine/core';

const UserSectionPicture = ({ user }) => {
  const defaultPicture =
    'https://user-images.githubusercontent.com/13368066/151895402-67d28c80-17a8-4a35-8bab-b0be177cbfda.png';

  const [opened, setOpened] = useState(false);
  const img = user.picture ?? defaultPicture;
  const handleImgClick = () => {
    setOpened(true);
  };

  const [avatar, setAvatar] = useState(img);
  const [previewState, setPreviewState] = useState({ preview: null, img });
  const onCrop = (preview) => {
    setPreviewState({ preview });
  };
  const onClose = () => {
    setPreviewState({ preview: null });
  };
  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 500000) {
      alert('File is too big!');
      elem.target.value = '';
    }
  };

  const handleCloseModal = () => {
    setOpened(false);
    setPreviewState({ preview: null });
  };

  // todo cloudinary
  const handleChangePicture = () => {
    setAvatar(previewState.preview);
    handleCloseModal();
  };

  return (
    <div className="user-container__data--hero">
      <Modal
        opened={opened}
        onClose={handleCloseModal}
        title="Edita tu imagen de perfil"
        size="lg"
        centered
      >
        <div className="user__modal--avatar">
          <div className="user-container__data--hero-editor">
            <Avatar
              width={200}
              height={200}
              onCrop={onCrop}
              onClose={onClose}
              onBeforeFileLoad={onBeforeFileLoad}
              src={setPreviewState.src}
            />

            {previewState.preview ? (
              <div className="user-container__data--hero-pic">
                <img
                  src={previewState.preview}
                  alt={user.username}
                  onClick={handleImgClick}
                />
              </div>
            ) : null}
          </div>

          <Button
            onClick={handleChangePicture}
            style={{
              marginTop: 15,
              maxWidth: 200,
              alignSelf: 'center',
            }}
            disabled={!previewState.preview}
          >
            {' '}
            Cambiar imagen
          </Button>
        </div>
      </Modal>
      <div className="user-container__data--hero-pic">
        <img src={avatar} alt={user.username} onClick={handleImgClick} />
      </div>

      <div className="user-container__data--hero-username">
        {`@${user.username}`}
      </div>
    </div>
  );
};

export default UserSectionPicture;
