import 'solid-js';

declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      'mwc-icon-button': JSX.HTMLAttributes<HTMLButtonElement> & {
        'aria-haspopup'?: string;
        'aria-label'?: string;
        icon?: string;
        disabled?: boolean;
      };
    }
  }
}
