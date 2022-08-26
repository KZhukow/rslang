import React from 'react';
import ReactDOM from 'react-dom/client';
import ContextUrl from './ContextUrl';

class Context {
  isNotFinal = true;

  currentPage: React.Component | undefined | null;

  pageClasses: Map<string, React.Component> = new Map<string, React.Component>();

  url = new ContextUrl();

  root: ReactDOM.Root | null = null;
}

export default Context;
