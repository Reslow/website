import React from 'react';
import _ from 'lodash';

import {classNames} from '../utils';
import ActionLink from './ActionLink';

export default class Header extends React.Component {
    render() {
        return (
            <header id="masthead" className="site-header outer">
              <div className="inner">
                <div className="site-header-inside">
                    <div className="headerText">
                         <p className="title">Fanny Reslow</p>
                     </div>
                  
                       {_.get(this.props, 'pageContext.site.siteMetadata.header.has_nav', null) && (<React.Fragment>
                         <button id="menu-open" className="menu-toggle"><span className="screen-reader-text"></span><span className="icon-menu"
                          aria-hidden="true" /></button>
                   <nav id="main-navigation" className="site-nav" aria-label="Main Navigation">
                         <div className="site-nav-inside">
                          <button id="menu-close" className="menu-toggle"><span className="screen-reader-text">Menu</span><span className="icon-close"
                          aria-hidden="true" /></button>
                          <ul className="menu">
                                {_.map(_.get(this.props, 'pageContext.site.siteMetadata.header.nav_links', null), (action, action_idx) => {
                                let pageUrl = _.trim(_.get(this.props, 'pageContext.url', null), '/');
                                 let actionUrl = _.trim(_.get(action, 'url', null), '/');
                                 return (
                                     <li key={action_idx} className={classNames('menu-item', {'current-menu-item': pageUrl === actionUrl, 'menu-button': _.get(action, 'style', null) !== 'link'})}>
                                      <ActionLink {...this.props} action={action} />
                                    </li>

                                     )
                                   })}
                          </ul>
                        </div>
                          
                  </nav>
                  </React.Fragment>)}
                </div>
              </div>
            </header>
        );
    }
}
