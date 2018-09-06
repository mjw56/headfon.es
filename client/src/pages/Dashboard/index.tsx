import * as React from 'react';
import { navigate } from '@reach/router';
import { logout } from '../../api';
import { authorize, endSession } from '../../store';
import './style.css';

interface DashboardProps {
  path: string;
}

export class Dashboard extends React.PureComponent<DashboardProps, {}> {
  public render() {
    return (
      <div className="dashboard">
        <a onClick={this.handleSearch}>
          <button>Search</button>
        </a>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
  private handleSearch = () => {
    navigate('/search');
  };
  private handleLogout = () => {
    logout().then(r => {
      authorize(false);
      endSession();
      navigate('/');
    });
  };
}
