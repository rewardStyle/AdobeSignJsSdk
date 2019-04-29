/**
*  Copyright 2019 Adobe Systems Incorporated. All rights reserved.
*  This file is licensed to you under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License. You may obtain a copy
*  of the License at http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software distributed under
*  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
*  OF ANY KIND, either express or implied. See the License for the specific language
*  governing permissions and limitations under the License.
*
*
**/


/**
 * 
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 6.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/agreements/CommonViewConfiguration', 'model/agreements/ComposeViewConfiguration'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CommonViewConfiguration'), require('./ComposeViewConfiguration'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.AgreementViewInfo = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.CommonViewConfiguration, root.SwaggerJsClient.ComposeViewConfiguration);
  }
}(this, function(ApiClient, CommonViewConfiguration, ComposeViewConfiguration) {
  'use strict';




  /**
   * The AgreementViewInfo model module.
   * @module model/agreements/AgreementViewInfo
   * @version 6.0.0
   */

  /**
   * Constructs a new <code>AgreementViewInfo</code>.
   * @alias module:model/agreements/AgreementViewInfo
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>AgreementViewInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/AgreementViewInfo} obj Optional instance to populate.
   * @return {module:model/agreements/AgreementViewInfo} The populated <code>AgreementViewInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('commonViewConfiguration')) {
        obj['commonViewConfiguration'] = CommonViewConfiguration.constructFromObject(data['commonViewConfiguration']);
      }
      if (data.hasOwnProperty('composeViewConfiguration')) {
        obj['composeViewConfiguration'] = ComposeViewConfiguration.constructFromObject(data['composeViewConfiguration']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * Common view configuration for all the available views
   * @member {module:model/agreements/CommonViewConfiguration} commonViewConfiguration
   */
  exports.prototype['commonViewConfiguration'] = undefined;
  /**
   * Compose page view configuration
   * @member {module:model/agreements/ComposeViewConfiguration} composeViewConfiguration
   */
  exports.prototype['composeViewConfiguration'] = undefined;
  /**
   * Name of the requested agreement view
   * @member {module:model/agreements/AgreementViewInfo.NameEnum} name
   */
  exports.prototype['name'] = undefined;


  /**
   * Allowed values for the <code>name</code> property.
   * @enum {String}
   * @readonly
   */
  exports.NameEnum = {
    /**
     * value: "COMPOSE"
     * @const
     */
    "COMPOSE": "COMPOSE",
    /**
     * value: "MODIFY"
     * @const
     */
    "MODIFY": "MODIFY",
    /**
     * value: "PREFILL"
     * @const
     */
    "PREFILL": "PREFILL",
    /**
     * value: "AUTHORING"
     * @const
     */
    "AUTHORING": "AUTHORING",
    /**
     * value: "SEND_PROGRESS"
     * @const
     */
    "SEND_PROGRESS": "SEND_PROGRESS",
    /**
     * value: "POST_CREATE"
     * @const
     */
    "POST_CREATE": "POST_CREATE",
    /**
     * value: "DOCUMENT"
     * @const
     */
    "DOCUMENT": "DOCUMENT",
    /**
     * value: "MANAGE"
     * @const
     */
    "MANAGE": "MANAGE",
    /**
     * value: "SIGNING"
     * @const
     */
    "SIGNING": "SIGNING",
    /**
     * value: "ALL"
     * @const
     */
    "ALL": "ALL"  };


  return exports;
}));

