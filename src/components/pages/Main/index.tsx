import React, { FC, useEffect } from 'react'
import { View, Text } from 'react-native'
import { INavigation } from '~/services/shared/interfaces';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from '~/store/ducks/rootReducer';
import { UserActions } from '~/store/ducks/user';
import { Welcome } from '~/assets/svgs';

interface MainProps extends INavigation {

}

const Main: FC<MainProps> = ({ }) => {
  const dispatch = useDispatch();
  const { users: { user } } = useSelector((state: AppStateType) => state);
  console.log(user?.name);

  useEffect(() => {
    getUser()
  }, [])

  const getUser = () => {
    dispatch(UserActions.getUserById({ USR_Id: 25 }))
  }

  return (
    <View style={styles.container}>
      <Welcome style={styles.welcomeImage} />
      <Text style={styles.welcomeTitle} >
        {'Seja bem-vindo, a instalação do template foi realizada com sucesso! Comece agora a criar seu aplicativo!'}
      </Text>
    </View>
  )
}

export { Main }


