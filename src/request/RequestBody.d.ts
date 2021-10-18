import { ApiType } from "../models/ApiTypes";

export declare interface MultipartBody {
  /**
   * When true a this entry represent a file part
   */
  isFile: boolean;
  /**
   * The name of the filed
   */
  name: string;
  /**
   * Converted value
   */
  value: string;
  /**
   * A content type entered by the user to the text part of the text part input.
   * This can only be set when `isFile` is false.
   */
  type?: string;
  /**
   * The original file name used with the part
   */
  fileName?: string;
  /**
   * Whether the parameter is enabled. Default to true.
   */
  enabled?: boolean;
  /**
   * When `isFile` is true then this is the size of the selected file.
   */
  size?: number;
}

export declare interface RawBody {
  /**
   * The last used body value.
   */
  value: string;
  /**
   * True when the generator was used to build the value
   */
  isGenerator?: boolean;
  /**
   * The schema for the generator. Work in progress.
   */
  generatorSchema?: any;
}

/**
 * The body editor may produce multiple view models
 * for the UI. Each editor can store it's data in here
 * to restore it after opening a request,
 */
export declare interface BodyMetaModel {
  /**
   * The id of the editor. Each editor in ARC has own id.
   */
  type: string;
  /**
   * Generated view model.
   */
  viewModel: (ApiType | MultipartBody | RawBody)[];
}

/**
 * Body editor meta data.
 */
export declare interface BodyMeta {
  /**
   * The model generated for the body editor.
   */
  model?: BodyMetaModel[];
  /**
   * The selected editor
   */
  selected?: string;
}
