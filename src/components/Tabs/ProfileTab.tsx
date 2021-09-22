import React, {useEffect} from 'react';
import {Image, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ApplicationState, onLoadingSingleUser} from '../../redux';
import Button from '../Button';
import {Box, Text, theme} from '../Theme';
export default function ProfileTab() {
  const users = useSelector(
    (state: ApplicationState) => state.SingleUserReducer,
  );

  const results = users.data.data;
  console.log('Data From Profile Page:', results);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onLoadingSingleUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      flex={0.4}
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="primary"
      padding="m">
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="gray_dark"
        height={100}
        borderRadius="s"
        padding="m">
        <Image style={styles.imagem} source={{uri: results.avatar}} />
        <Box>
          <Text color="green" variant="title1">
            {results.email}
          </Text>
          <Text color="white">{results.first_name}</Text>
        </Box>
      </Box>
      <Box>
        <Box marginTop="m">
          <Button
            onPress={() => {}}
            label="Change theam to light"
            variant="secoundary"
            style={{marginBottom: 15}}
          />
        </Box>
        <Button onPress={() => {}} label="Logout" variant="secoundary" />
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  imagem: {
    height: 80,
    width: 80,
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
    marginRight: 20,
  },
});
