import React, { Component } from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
  Icon,
  Button
} from 'native-base';

class EmployeeCreate extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input autoCapitalize="words" autoCorrect={false} />
              <Icon name="person-add" />
            </Item>
            <Item floatingLabel>
              <Label>Phone</Label>
              <Input keyboardType="phone-pad" />
              <Icon name="call" />
            </Item>
            <Button full style={styles.mt15}><Text>Create</Text></Button>
          </Form>
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

export default EmployeeCreate;
