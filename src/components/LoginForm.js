import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {
  Container,
  Content,
  Body,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text,
  Spinner
} from 'native-base';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(password) {
    this.props.passwordChanged(password);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner color='blue' />;
    }
    return (
      <Button
        onPress={this.onButtonPress.bind(this)}
        primary full style={styles.mt15}>
        <Text>Log in</Text>
      </Button>
    );
  }

  renderError() {
    if (this.props.error) {
      return (
        <Body style={styles.mt15}>
          <Text style={{color: 'red'}}>{this.props.error}</Text>
        </Body>
      );
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                value={this.props.email}
                onChangeText={this.onEmailChange.bind(this)}
                autoCorrect={false}
                autoCapitalize='none' />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                value={this.props.password}
                onChangeText={this.onPasswordChange.bind(this)}
                secureTextEntry />
            </Item>
          </Form>
          {this.renderError()}
          {this.renderButton()}
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
  const { email, password, loading, error } = auth;
  return {
    email, password, loading, error
  };
};

export default connect(mapStateToProps, actions)(LoginForm);
