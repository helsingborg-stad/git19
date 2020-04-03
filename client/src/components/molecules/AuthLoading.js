import React from 'react';
import PropTypes from 'prop-types';
import { FadeLoader } from 'react-spinners';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';
import { Button, Text } from '../atoms';

const AuthLoading = ({ cancelLogin }) => (
  <AuthLoadingWrapper>
    <AuthLoadingBody>
      <Loader size={100} color="#9B9B9B" />

      {isMobile ? (
        <Text>Söker efter BankID säkerhetsprogram</Text>
      ) : (
        <Text>Väntar på att BankID ska startas på en annan enhet</Text>
      )}
    </AuthLoadingBody>
    <AuthLoadingAction>
      <Button color="purple" block onClick={cancelLogin}>
        <Text>Avbryt</Text>
      </Button>
    </AuthLoadingAction>
  </AuthLoadingWrapper>
);

AuthLoading.propTypes = {
  cancelLogin: PropTypes.func.isRequired,
};

const Loader = styled(FadeLoader)`
  margin-bottom: 32px;
`;

const AuthLoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AuthLoadingBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AuthLoadingAction = styled.div`
  justify-self: flex-end;
`;

export default AuthLoading;
