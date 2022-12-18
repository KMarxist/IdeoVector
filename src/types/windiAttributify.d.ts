import 'solid-js';
import type { AttributifyNames } from 'windicss/types/jsx';

export interface AttributifyAttributes extends Partial<Record<AttributifyNames<'w:'>, string>> {}

declare module 'solid-js' {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface HTMLAttributes<T> extends AttributifyAttributes {}
  }
}
