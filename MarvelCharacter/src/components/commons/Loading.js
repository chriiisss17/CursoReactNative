import React, {useMemo} from 'react';
import {useEffect} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {useCallback} from 'react/cjs/react.development';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.electromagnetic,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

const Loading = ({data: {isLoading, setIsLoading}, children}) => {
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, [isLoading]);
  if (isLoading == true) {
    return (
      <ActivityIndicator
        style={[styles.container, styles.horizontal]}
        size={'large'}
        color={colors.greensea}
      />
    );
  } else {
    return children;
  }
};

export default Loading;
