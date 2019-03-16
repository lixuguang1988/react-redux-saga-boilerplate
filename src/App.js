import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

//antd 本地化 不能放到index.js里面
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

import CommonHeader from './components/CommonHeader';
// import Home from './routes/Home';
// import News from './routes/News';

const Home = lazy(()=>import('./routes/Home'));
const News = lazy(()=>import('./routes/News'));

//moment 本地化
moment.locale('zh-cn');

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={zhCN}>

      <div className="app">
          <CommonHeader />
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            {/* <Route path="/news" component={News} /> */}
            <Route exact path="/" render={(props)=><PageSuspense><Home {...props} /></PageSuspense>} />
            <Route path="/news" render={(props)=><PageSuspense><News {...props} /></PageSuspense>} />
          </Switch>
      </div>
      </LocaleProvider>

    );
  }
}

function PageSuspense({children}){
  // debugger
  return (<Suspense fallback={<div style={{
    position: 'fixed', 
    height: '100vh', 
    width: '100vw', 
    top: 0, 
    left: 0,
    background: '#fff',
    paddingTop: '50px',
    textAlign: 'center',
    color: '#eee'
  }}>loading...</div>}>
    <div>{children}</div>
  </Suspense>)
}

export default App;
