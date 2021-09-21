import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ApplicationState, onLoadingData} from '../../redux';
import HomeCard from '../HomeCard';
import {Box} from '../Theme';

export default function HomeTab() {
  //const [data, setData] = useState([]);
  //console.log('Data from HomeTab', data);
  const users = useSelector((state: ApplicationState) => state.dataReducer);
  const results = users.data.data;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onLoadingData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box padding="m">
      <FlatList
        data={results}
        keyExtractor={user => String(user.id)}
        onEndReachedThreshold={0.1}
        renderItem={user => (
          <HomeCard
            url={`${user.item.avatar}`}
            name={`${user.item.last_name}`}
          />
        )}
      />
    </Box>
  );
}
