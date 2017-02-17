import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
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
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

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
              <Input
                onChangeText={this.onEmailChange.bind(this)}
                autoCorrect={false}
                autoCapitalize='none' />
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

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, { emailChanged })(LoginForm);
