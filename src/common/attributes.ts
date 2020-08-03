import { HTMLAttributes, AriaAttributes } from 'react';

export type CommonAttributes = AriaAttributes & Pick<HTMLAttributes<HTMLElement>,
| 'accessKey'
| 'dir'
| 'hidden'
| 'id'
| 'lang'
| 'spellCheck'
| 'style'
| 'tabIndex'
| 'title'
| 'translate'
>;
