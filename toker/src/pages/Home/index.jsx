import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import styles from './index.css';

import Logo from '../../components/Logo';
import Navigate from 'universal-navigate';
import routerUrl from '../../utils'

export default function Home() {
  console.log('当前环境', process.env.NODE_ENV);

  return (
    <View style={styles.home}>
      <Logo />
      <Text style={styles.title}>我是首页</Text>
      <Text style={styles.info} onClick={()=>{
        Navigate.push({
          url: routerUrl('detail'),
        });
      }}>我要跳转详情页面</Text>
      <Text style={styles.info}>Visit https://rax.js.org</Text>
    </View>
  );
}
