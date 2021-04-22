import cx from 'classnames';
import React, { FC, ReactNode } from 'react';

import Error from '../icons/Error/Error';
import { colours } from '../../constants/colours';

interface Props {
  content: string | JSX.Element | ReactNode;
  type?: 'error' | 'info' | 'success' | 'warning';
}

const MESSAGES: FC<Props> = ({ content, type = 'info' }) => {
  const className = cx(
    'height-fit-content p-3 flex flex-row items-start paragraph-sm bg-neutral-white-l text-neutral-black-l border rounded-med',
    {
      'border-base-red-l': type === 'error',
      'border-neutral-light-l': type === 'info',
      'border-primary-l': type === 'success',
      'border-base-orange-d': type === 'warning'
    }
  );

  return (
    <div className={className}>
      {type === 'error' && (
        <div className="mr-1 min-w-1.5">
          <Error colour={colours['base-red-l']} width={18} />
        </div>
      )}
      <article>{content}</article>
    </div>
  );
};

export default MESSAGES;
