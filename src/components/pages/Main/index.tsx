import React, { FC, useEffect } from 'react'
import { View } from 'react-native'
import { INavigation } from '~/services/shared/interfaces';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from '~/store/ducks/rootReducer';
import { UserActions } from '~/store/ducks/user';

interface MainProps extends INavigation {

}

const Main: FC<MainProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { users: { user } } = useSelector((state: AppStateType) => state);

  console.log(user?.name);

  useEffect(() => {
    dispatch(UserActions.getUserById({ USR_Id: 25 }))
  }, [])

  return (
    <View style={styles.container}>

    </View>
  )
}

export { Main }


