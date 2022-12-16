/* tslint:disable */
/* eslint-disable */
/**
 * marshall-code-backend-quarkus API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    PresetCompact,
    PresetCompactFromJSON,
    PresetCompactToJSON,
} from '../models';

export interface FindByFilterRequest {
    artist?: string | null;
    filter?: string | null;
    song?: string | null;
}

/**
 * 
 */
export class PresetResourceApi extends runtime.BaseAPI {

    /**
     */
    async findByFilterRaw(requestParameters: FindByFilterRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<PresetCompact>>> {
        const queryParameters: any = {};

        if (requestParameters.artist !== undefined) {
            queryParameters['artist'] = requestParameters.artist;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.song !== undefined) {
            queryParameters['song'] = requestParameters.song;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/presets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PresetCompactFromJSON));
    }

    /**
     */
    async findByFilter(artist?: string | null, filter?: string | null, song?: string | null, initOverrides?: RequestInit): Promise<Array<PresetCompact>> {
        const response = await this.findByFilterRaw({ artist: artist, filter: filter, song: song }, initOverrides);
        return await response.value();
    }

    /**
     */
    async findRecentRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<PresetCompact>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/presets/recent`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PresetCompactFromJSON));
    }

    /**
     */
    async findRecent(initOverrides?: RequestInit): Promise<Array<PresetCompact>> {
        const response = await this.findRecentRaw(initOverrides);
        return await response.value();
    }

}
