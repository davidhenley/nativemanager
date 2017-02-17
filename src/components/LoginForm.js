import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Body,
  Content,
  Card,
  CardItem,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text } from 'native-base';

class LoginForm extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Text>Employee Manager</Text>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input autoCapitalize='none'/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry />
            </Item>
          </Form>
          <Button primary full style={styles.mt15}>
            <Text>Log in</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = {
  mt15: {
    marginTop: 15
  }
};

export default connect()(LoginForm);
