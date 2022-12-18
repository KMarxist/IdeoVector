import 'solid-js';

declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      'mwc-button': JSX.HTMLAttributes<HTMLButtonElement> & {
        'aria-haspopup'?: string;
        label?: string;
        icon?: string;
        outlined?: boolean;
        raised?: boolean;
        unelevated?: boolean;
        dense?: boolean;
        trailingIcon?: boolean;
        disabled?: boolean;
        expandContent?: boolean;
        fullwidth?: boolean;
      };
    }
  }
}
