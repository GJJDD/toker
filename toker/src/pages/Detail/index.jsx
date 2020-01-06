import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import styles from './index.css';

import Logo from '../../components/Logo';
import Navigate from 'universal-navigate';



export default function Home() {
  return (
    <View style={styles.home}>
      <Logo />
      <Text style={styles.title}>我是详情页</Text>
      <Text onClick={
          ()=>{
            Navigate.pop({});
          }
      } style={styles.info}>我要回到首页</Text>
      <Text style={styles.info}>Visit https://rax.js.org</Text>
    </View>
  );
}
