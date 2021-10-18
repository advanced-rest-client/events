/**
 * A definition of a form item used in the UI.
 */
export declare interface FormItem {
  /**
   * Property name
   */
  name: string;
  /**
   * Property value
   */
  value: any;
  /**
   * Whether the property is enabled. If not set it is assumed the property is enabled.
   */
  enabled?: boolean;
  /**
   * Property schema
   */
  schema?: FormItemSchema;
}

export declare interface AmfFormItem extends FormItem {
 /**
   * Property schema
   */
  schema?: AmfFormItemSchema;
  /** 
   * If the model is a type of object it is a list of this model objects.
   */
  properties?: any[];
}

export declare interface FormItemSchema {
  /**
   * Whether the property is required. It is not by default.
   */
  required?: boolean;
  /**
   * Property type. Default to string.
   */
  type?: 'string' | 'integer' | 'float' | 'nil' | 'boolean' | 'date' | 'datetime' | 'time' | 'enum';
  /**
   * The description of the property
   */
  description?: string;
  /**
   * The value of `type` property of the input element used to input value. Default to text.
   */
  inputType?: 'number' | 'boolean' | 'date' | 'text';
  /**
   * Input element's pattern
   */
  pattern?: string;
  /**
   * Input element's minLength
   */
  minLength?: number;
  /**
   * Input element's maxLength
   */
  maxLength?: number;
  /**
   * The default value to use in the input element if missing
   */
  defaultValue?: any;
  /**
   * The examples to render/use
   */
  examples?: Example[];
  /**
   * For the numeric types, binds this value to the `step` attribute
   */
  multipleOf?: number;
  /**
   * For the numeric types, binds this value to the `minimum` attribute
   */
  minimum?: number;
  /**
   * For the numeric types, binds this value to the `maximum` attribute
   */
  maximum?: number;
  /**
   * Enum values to render. Instead of an input a drop down is rendered,
   */
  enum?: any[];
  /**
   * Whether this property cannot be edited
   */
  readOnly?: boolean;
}

declare interface Example {
  /**
   * The example to render
   */
  value?: string|number|boolean|object|any[];
  /**
   * Example title
   */
  title?: string;
  /**
   * @deprecated Use `title` instead.
   */
  name?: string;
  /**
   * Raw value of RAML example. This value is a YAML or JSON
   * schema value. This is only set when raw value is available in the model and it is not JSON/XML.
   */
  raw?: string;
  /**
   * Only when `hasUnion` is set.
   */
  values?: Array<Example>;
  /**
   * Only when `hasUnion` is set.
   */
  hasRaw: boolean;
  /**
   * When true then `title` property has a value
   */
  hasTitle: boolean;
  /**
   * When true then `values` property has a value
   */
  hasUnion: boolean;
  /**
   * When true then the `value` is a scalar value
   */
  isScalar: boolean;
}

export declare interface AmfFormItemSchema extends FormItemSchema {
  /**
   * Data type of the property
   */
  apiType?: string;
  /**
   * Format of a number type
   */
  format?: string;
  /**
   * List of file types defined for a file type.
   */
  fileTypes?: string[];
  /**
   * Flag describing whether the type is an union
   */
  isUnion?: boolean;
  /**
   * List of possible types of the union.
   */
  anyOf?: any[];
  /**
   * Label for the form control
   */
  inputLabel?: string;
  /**
   * Flag describing array value for the property
   */
  isArray?: boolean;
  /**
   * Name of the items type
   */
  items?: string|string[];
  /**
   * Flag describing boolean value for the property
   */
  isBool?: boolean;
  /**
   * Flag describing File value for the property
   */
  isFile?: boolean;
  /**
   * Flag describing Object value for the property
   */
  isObject?: boolean;
  /**
   * True when it is an union and one of union items is nil.
   */
  isNillable?: boolean;
  /**
   * Flag describing whether the item is a custom control. This is not generated from the AMF model but rather when a custom model is being created manually.
   */
  isCustom?: boolean;
  /** 
   * Extended documentation that includes description, patterns and examples.
   */
  extendedDescription?: string;
  /**
   * When set it prohibits a consumer of this property from encoding values automatically.
   */
  noAutoEncode?: boolean;
  /**
   * A placeholder in the `input` filed to use.
   */
  inputPlaceholder?: string;
}
