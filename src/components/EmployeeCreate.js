import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
  Icon,
  Button,
  Picker,
  Right,
  Left
} from 'native-base';

class EmployeeCreate extends Component {
  onValueChange() {

  }

  render() {
    const { name, phone, shift } = this.props;
    const { employeeUpdate } = this.props;
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input
                value={name}
                onChangeText={value => employeeUpdate({ prop: 'name', value })}
                autoCapitalize="words"
                autoCorrect={false} />
              <Icon name="person-add" />
            </Item>
            <Item floatingLabel>
              <Label>Phone</Label>
              <Input
                value={phone}
                onChangeText={value => employeeUpdate({ prop: 'phone', value })}
                keyboardType="phone-pad" />
              <Icon name="call" />
            </Item>
              <Icon style={{ fontSize: 24, paddingLeft:13, paddingTop:4, paddingRight: 10 }} name="calendar" />
              <Picker
                placeholder="Day"
                mode="dropdown"
                iosHeader="Select one"
                selectedValue="Monday"
                onValueChange={value => employeeUpdate({ prop: 'shift', value })}>
                  <Picker.Item label="Monday" value="Monday" />
                  <Picker.Item label="Tuesday" value="Tuesday" />
                  <Picker.Item label="Wednesday" value="Wednesday" />
                  <Picker.Item label="Thursday" value="Thursday" />
                  <Picker.Item label="Friday" value="Friday" />
                  <Picker.Item label="Saturday" value="Saturday" />
                  <Picker.Item label="Sunday" value="Sunday" />
               </Picker>
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

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
