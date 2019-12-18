import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import ClassComponent from './pages/a_compare/class'
import HookComponent from './pages/a_compare/Hooks'
import RenderA from './pages/a_compare/render-props-a'
import RenderB from './pages/a_compare/render-props-b'
import ResizeAble from './pages/a_compare/ResizeAble'

import StateClass from './pages/b_usestate/Foo'
import StateHook from './pages/b_usestate/FooHook'

import EventClass from './pages/c_useeffect/Foo'
import EventHook from './pages/c_useeffect/FooHooks'

import UseMemo from './pages/d_otherhook/usememo'
import UseCallback from './pages/d_otherhook/useCallback'
import UseRef from './pages/d_otherhook/userefs'

import FooA from './pages/e_ownhook/FooA'
import FooB from './pages/e_ownhook/FooB'



function App() {
  return (
    <Router>
      <div>
        <nav>
           <h2>Hook简介</h2>
          <ul>
            <li>
              <Link to="/class">用class的方式编写</Link>
            </li>
            <li>
              <Link to="/hooks">hooks方式编写</Link>
            </li>
            <li>
              <Link to="/ra">渲染属性a组件</Link>
            </li>
            <li>
              <Link to="/rb">渲染属性b组件</Link>
            </li>
          </ul>
          <h2>useState</h2>
          <ul>
            <li>
              <Link to="/statec">class方式设置state</Link>
            </li>
            <li>
              <Link to="/stateh">hook方式设置state</Link>
            </li>

          </ul>
          <h2>useEffect</h2>
          <ul>
            <li>
              <Link to="/ec">class方式添加副作用</Link>
            </li>
            <li>
              <Link to="/eh">hook方式添加副作用</Link>
            </li>
          </ul>
          <h2>其他hook函数</h2>
          <ul>
            <li>
              <Link to="/usememo">usememo</Link>
            </li>
            <li>
              <Link to="/usecallback">usecallback</Link>
            </li>
            <li>
              <Link to="/useref">useref</Link>
            </li>
          </ul>
          <h2>自定义hook</h2>
          <ul>
            <li>
              <Link to="/hfa">复用1</Link>
            </li>
            <li>
              <Link to="/hfb">复用2</Link>
            </li>
          </ul>
        </nav>
        <div style={{
          position:'absolute',
          top:'100px',
          right:'100px',
          border:'2px solid red',
          minWidth:'150px',
          minHeight:'100px',
          fontSize:'30px',
          borderRadius:'5px',
          padding:'5px'
        }}>
        <Switch>
           <Route path="/" exact>
           </Route>
           <Route path="/class" exact>
             <ClassComponent/>
           </Route>
           <Route path="/hooks" exact>
             <HookComponent/>
           </Route>
           <Route path="/ra" exact>
             <ResizeAble
               render={
                 size => <RenderA size={size}/>
               }
             />
           </Route>
           <Route path="/rb" exact>
             <ResizeAble
               render={
                 size => <RenderB size={size}/>
               }
             />
           </Route>
          <Route path="/statec" exact>
            <StateClass/>
          </Route>
          <Route path="/stateh" exact>
          <StateHook defaultCount={1} />
        </Route>
          <Route path="/ec" exact>
            <EventClass/>
          </Route>
          <Route path="/eh" exact>
            <EventHook />
          </Route>
          <Route path="/usememo" exact>
            <UseMemo />
          </Route>
          <Route path="/usecallback" exact>
            <UseCallback />
          </Route>
          <Route path="/useref" exact>
            <UseRef />
          </Route>
          <Route path="/hfa" exact>
            <FooA />
          </Route>
          <Route path="/hfb" exact>
            <FooB />
          </Route>
        </Switch>
         </div>
      </div>
    </Router>
  );
}

export default App;
