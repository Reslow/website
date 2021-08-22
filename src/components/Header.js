import React from 'react';
import _ from 'lodash';

import {classNames} from '../utils';
import ActionLink from './ActionLink';

export default class Header extends React.Component {
    render() {
        return (
            <header id="masthead" className="site-header outer">
              <div className="inner">
                    <div className="headerText">
                         <p className="title">Fanny Reslow</p>
                         <div class="navigation">
                           <h2><a href ="/">Home</a></h2>
                           <h2><a href ="/about">About</a></h2>
                         </div>
                     </div>
                     </div>
                     </header>
                  
        )}
}