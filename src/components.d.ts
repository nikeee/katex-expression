/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface KatexExpression {
    /**
    * katex expression to render
    */
    'expression': string;
    /**
    * Katex options json
    */
    'katexOptions': string;
  }
}

declare global {


  interface HTMLKatexExpressionElement extends Components.KatexExpression, HTMLStencilElement {}
  var HTMLKatexExpressionElement: {
    prototype: HTMLKatexExpressionElement;
    new (): HTMLKatexExpressionElement;
  };
  interface HTMLElementTagNameMap {
    'katex-expression': HTMLKatexExpressionElement;
  }
}

declare namespace LocalJSX {
  interface KatexExpression extends JSXBase.HTMLAttributes<HTMLKatexExpressionElement> {
    /**
    * katex expression to render
    */
    'expression'?: string;
    /**
    * Katex options json
    */
    'katexOptions'?: string;
    /**
    * Emits Error object on exception
    */
    'onOnError'?: (event: CustomEvent<any>) => void;
  }

  interface IntrinsicElements {
    'katex-expression': KatexExpression;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}

