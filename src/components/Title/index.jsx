import React from 'react';

const styles = { 
  textAlign: "center",
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '28px',
  textTransform: 'uppercase',
  marginBottom: '60px'
}

const Title = ({children}) => (
  <span style={styles}>{children}</span>
);

export default Title;