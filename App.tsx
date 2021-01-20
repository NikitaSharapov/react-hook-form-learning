import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Picker} from '@react-native-picker/picker';

let count = 0;

const App = () => {
  const [selectedValue, setSelectedValue] = useState();
  const {register, handleSubmit, setValue, control} = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log('work ', data);
  });

  useEffect(() => {
    count++;
    console.log('render ', count);
  });

  return (
    <View>
      <View>
        <View>
          {/* <TextInput
            ref={register({name: 'test'})}
            style={styles.container}
            onChangeText={(value) => {
              setValue('test', value);
            }}
          /> */}
        </View>
        <View>
          {/* <Controller
            defaultValue="123"
            name="test"
            control={control}
            render={(props) => (
              <TextInput
                {...props}
                style={styles.container}
                onChangeText={(value) => {
                  props.onChange(value);
                }}
              />
            )}
          /> */}
          <Controller
            defaultValue="php"
            name="test1"
            control={control}
            render={(props) => (
              <Picker
                {...props}
                selectedValue={props.value}
                onValueChange={(itemValue, itemIndex) => {
                  props.onChange(itemValue);
                  setSelectedValue(itemValue);
                }}>
                <Picker.Item label="react" value="react" />
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="PHP" value="php" />
              </Picker>
            )}
          />
          <Controller
            defaultValue="php"
            name="test2"
            control={control}
            render={(props) => (
              <Picker
                {...props}
                selectedValue={props.value}
                onValueChange={(itemValue, itemIndex) => {
                  props.onChange(itemValue);
                  setSelectedValue(itemValue);
                }}>
                <Picker.Item label="react" value="react" />
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="PHP" value="php" />
              </Picker>
            )}
          />
          <Controller
            defaultValue="php"
            name="test3"
            control={control}
            render={(props) => (
              <Picker
                {...props}
                selectedValue={props.value}
                onValueChange={(itemValue, itemIndex) => {
                  props.onChange(itemValue);
                  setSelectedValue(itemValue);
                }}>
                <Picker.Item label="react" value="react" />
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="PHP" value="php" />
              </Picker>
            )}
          />
          <Controller
            defaultValue="php"
            name="test4"
            control={control}
            render={(props) => (
              <Picker
                {...props}
                selectedValue={props.value}
                onValueChange={(itemValue, itemIndex) => {
                  props.onChange(itemValue);
                  setSelectedValue(itemValue);
                }}>
                <Picker.Item label="react" value="react" />
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="PHP" value="php" />
              </Picker>
            )}
          />
          {/* <Picker
            // ref={() => register({name: 'test1'})} не работает
            // ref={register({name: 'test1'})} не работает
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => {
              setValue('test1', itemValue);
              setSelectedValue(itemValue);
            }}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker> */}
        </View>
        <Button
          title={'кнопка'}
          onPress={() => {
            handleSubmit(onSubmit);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
});

export default App;
