import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import {
  Container,
  Content,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text
} from 'native-base';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(password) {
    this.props.passwordChanged(password);
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
  return { email: auth.email, password: auth.password };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
