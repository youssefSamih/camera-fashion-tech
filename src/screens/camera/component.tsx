import React from 'react';

import { CameraButton, CameraView, Container } from '@components';

// ~~~~~~ Component

export const CameraScreen = () => {
  // ~~~~~~ Render

  return (
    <Container>
      <CameraView />

      <CameraButton />
    </Container>
  );
};
