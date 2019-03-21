import * as React from 'react';
import styles from './ServiceRequest.module.scss';
import { IServiceRequestProps } from './IServiceRequestProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class ServiceRequest extends React.Component<IServiceRequestProps, {}> {
  public render(): React.ReactElement<IServiceRequestProps> {
    return (
      <div className={ styles.serviceRequest }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to Genpact</span>
              <p className={ styles.subTitle }>Customize Service Request Using SharePoint Web Parts</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
